
module.exports = {
  requestLogger : (request, response, next) => {
    console.log('Method:', request.method);
    console.log('Path:  ', request.path);
    console.log('Body:  ', request.body);
    console.log('---');
    next();
  },
  info: (params) => {
    console.log(params);
  },
  error: (params) => {
    console.error(params);
  },
};
