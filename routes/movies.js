/* eslint-disable import/no-extraneous-dependencies */
const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { REGEX_URL } = require('../utils/constants');

const {
  getUserMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

router.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      link: Joi.string().required().pattern(REGEX_URL),
    }),
  }),
  createMovie,
);

router.get('/', getUserMovies);

router.delete(
  '/:id',
  celebrate({
    params: Joi.object().keys({
      id: Joi.string().length(24).hex().required(),
    }),
  }),
  deleteMovie,
);

module.exports = router;
