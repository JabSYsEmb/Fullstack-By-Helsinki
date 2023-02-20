require('dotenv').config();

const PORT = process.env.NODE_ENV === 'production' ? process.env.PORT:process.env.TEST_PORT;

const MONGODB_URI = process.env.NODE_ENV === 'production' ?
  process.env.MONGODB_URI:process.env.TEST_MONGODB_URI;

module.exports = {
  MONGODB_URI,
  PORT,
};
