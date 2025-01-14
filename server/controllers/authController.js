const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { promisify } = require('util');


const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN

    });
};

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);


    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true // cookie cannot be accessed or modified in any way by the browser
    };

    // if in production, set secure flag
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;


    // Set cookie
    res.cookie('jwt', token, cookieOptions);

    res.status(statusCode).json({
        status: 'success',
        token
    });
};

exports.signup = catchAsync(async (req, res, next) => {
    // Check if user with this email already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
        return next(new AppError('Email already in use. Please use a different email address.', 400));
    }

    const newUser = await User.create(req.body);
    
    // createSendToken(newUser, 201, res);
    res.status(201).json({
        status: 'success',
        data: {
            user: newUser
        }
    });
});

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');


    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Invalid email or password', 401));
    }

    createSendToken(user, 200, res);



});

exports.logout = catchAsync(async (req, res, next) => {
    res.clearCookie('jwt');
    res.status(200).json({ status: 'success' });
});


exports.protect = catchAsync(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return next(new AppError('You are not logged in! Please log in to get access.', 401));
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
        return next(new AppError('User belonging to this token does not exist', 401));
    }

    req.user = currentUser;
    next();

});

