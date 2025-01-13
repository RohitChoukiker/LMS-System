require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const AppError = require('./utils/AppError');
const globalErrorHandler = require('./Error/errorController');
const app = express();
const authRoutes = require('./routes/authRoutes');

// console.log('Current NODE_ENV:', process.env.NODE_ENV);


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));

    console.log('Running in development mode');
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use('/api/auth', authRoutes);


app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
