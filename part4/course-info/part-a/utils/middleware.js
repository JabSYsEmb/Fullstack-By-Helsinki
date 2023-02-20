const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

const errorHandler = (error, request, response, next) => {
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' }).end();
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message }).end();
  }

  next(error);
};

module.exports = {
  unknownEndpoint,
  errorHandler,
};
