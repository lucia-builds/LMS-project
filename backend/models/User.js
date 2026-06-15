const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'user_id',
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Fullname is required' },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: { msg: 'Email is already registered' },
    validate: {
      isEmail: { msg: 'Must be a valid email address' },
      notEmpty: { msg: 'Email is required' },
    },
  },
  passwordHash: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'password_hash',
    validate: {
      notEmpty: { msg: 'Password is required' },
    },
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user',
    validate: {
      isIn: {
        args: [['user', 'admin']],
        msg: 'Role must be either user or admin',
      },
    },
  },
  profileImage: {
    type: DataTypes.TEXT,
    field: 'profile_image',
    allowNull: true,
  },
}, {
  tableName: 'users',
  underscored: true,
  timestamps: true,
});

module.exports = User;
