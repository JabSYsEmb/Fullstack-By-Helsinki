const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const config = require('./utils/config');
const notesRouter = require('./controllers/notes');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger').requestLogger;
const loggerInfo = require('./utils/logger').info;
const loggerError = require('./utils/logger').error;

loggerInfo('connecting to', config.MONGODB_URI);

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    loggerInfo('connected to MongoDB');
  })
  .catch((error) => {
    loggerError('error connection to MongoDB:', error.message);
  });

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(logger);

app.use('/api/notes', notesRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
