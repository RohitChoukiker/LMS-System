

const AppError = require("../utils/AppError")

module.exports = (err,req,res,next)=>{
  
    err.status = err.status || 'fail',
    err.statusCode = err.statusCode || 500
  
    res.status(err.statusCode).json({
      status: err.status,
      message : err.message
    })
  }


  const handleJWTError = err =>{
    new AppError('Invalid Token! Please login again',401)
  }
