const mongoose = require('mongoose');
const { REGEX_URL } = require('../utils/constants');

const { ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose;

const movieSchema = new Schema(
  {
    country: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      validate: {
        validator: (url) => REGEX_URL.test(url),
        message: 'enter url image',
      },
    },
    trailerLink: {
      type: String,
      required: true,
      validate: {
        validator: (url) => REGEX_URL.test(url),
        message: 'enter url image',
      },
    },
    thumbnail: {
      type: String,
      required: true,
      validate: {
        validator: (url) => REGEX_URL.test(url),
        message: 'enter url image',
      },
    },
    owner: {
      type: ObjectId,
      required: true,
    },
    movieId: {
      type: Number,
      required: true,
    },
    nameRU: {
      type: String,
      required: true,
    },
    nameEN: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.model('movie', movieSchema);
