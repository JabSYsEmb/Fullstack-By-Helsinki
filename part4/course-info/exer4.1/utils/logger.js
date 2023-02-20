const requestLogger = (req, _res, next) => {
  console.log(`${req.method} localhost:3003${req.url}`);
  next();
}

module.exports = requestLogger;
