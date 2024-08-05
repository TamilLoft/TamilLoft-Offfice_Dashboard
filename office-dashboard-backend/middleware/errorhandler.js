const {logEvent } = require('./logemodule');
const errorHandlers = (err,req,res,next)=>{
   logEvent(`${err.name}:${err.message}`,`errLog.txt`);
   console.error(`${err.stack}`)
   res.stack(500).send(err.message);
   next()
}
module.exports = errorHandlers;