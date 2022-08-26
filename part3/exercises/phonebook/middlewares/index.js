const logger = require("./logger");
const unknownEndpoint = require("./unknown_end_point");

module.exports = {
  logger: logger.requestLogger,
  unknownEndpoint: unknownEndpoint.unknownEndpoint,
};
