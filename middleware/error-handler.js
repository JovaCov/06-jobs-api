
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  
  let customError = {
    statusCode:err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg:err.message || 'something went wrong try again later'
  }
  if(err.name==='ValidationError'){
    console.log(Object.values(err.errors));
    customError.msg = Object.values(err.errors).map((item)=>item.message).join(',')
    customError.statusCode = 400
  }
  
  if(err.code && err.code === 11000){
    customError.msg = `Duplicate value ${Object.keys(err.keyValue)} field`
    customError.statusCode = 400
  }
  if(err.name==='CastError'){
    customError.msg = `no item found with id: ${err.value}`
    customError.statusCode = 404
  }
  return res.status(customError.statusCode).json({ msg: customError.msg})
}

module.exports = errorHandlerMiddleware
