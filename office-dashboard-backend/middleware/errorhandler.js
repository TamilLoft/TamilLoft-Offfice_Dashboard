import { logEvent } from './logemodule.js';

const errorHandlers = (err, req, res, next) => {
   logEvent(`${err.name}:${err.message}`, `errLog.txt`);
   console.error(`${err.stack}`);
   res.status(500).send(err.message);
   next();
};

// Export the error handler using ES module syntax
export default errorHandlers;
