const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UnauthorizedError = require('../errors/UnauthorizedError');

const { Schema } = mongoose;

const { REGEX_URL_EMAIL } = require('../utils/constants');

// byaka
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (email) => REGEX_URL_EMAIL.test(email),
        message: 'Требуется ввести электронный адрес',
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    name: {
      type: String,
      required: true,
      minlength: [2, 'Минимальная длина поля "name" - 2'],
      maxlength: [30, 'Максимальная длина поля "name" - 30'],
    },
  },

  {
    versionKey: false,
    statics: {
      findUserByCredentials(email, password) {
        return this.findOne({ email })
          .select('+password')
          .then((user) => {
            if (user) {
              return bcrypt.compare(password, user.password).then((matched) => {
                if (matched) return user;
                throw new UnauthorizedError('Неправильная почта или пароль');
              });
            }
            throw new UnauthorizedError('Неправильная почта или пароль');
          });
      },
    },
  },
);

module.exports = mongoose.model('user', userSchema);
