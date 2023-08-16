const { config } = require('dotenv');

const URL = 'mongodb://127.0.0.1:27017/bitfilmsdb';
const REGEX_URL = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/;
const REGEX_URL_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
const { SECRET_KEY = 'dev-secret' } = process.env;
const { PORT = 3000 } = process.env;
const { NODE_ENV } = process.env;

if (NODE_ENV === 'production') {
  config();
}

module.exports = {
  PORT,
  URL,
  SECRET_KEY,
  REGEX_URL,
  REGEX_URL_EMAIL,
  NODE_ENV,
};
