'use strict';
const {
  Model
} = require('sequelize');

const { SALT } = require('../config/serverConfig');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3,300]
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(async (user) => {
    // const salt = await bcrypt.genSaltSync(10)
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
  })
  return User;
};