const { logEvents } = require('./logEvents')

function NotImplementedError(status = 404, message = "") {
  this.status = status;
  this.message = message;
}
NotImplementedError.prototype = Error.prototype;

const errorHandler = (err, req, res, next) => {
  logEvents(`${err.name}: ${err.message}`, 'errLog.txt')
  res.status(err.status).json({ error: err.message })
}
export { NotImplementedError }
export default errorHandler
