const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Celebrity = sequelize.define('Celebrity', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Celebrity name is required' },
    },
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  profileImage: {
    type: DataTypes.TEXT,
    field: 'profile_image',
    allowNull: true,
  },
  profession: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    field: 'is_active',
    defaultValue: true,
  },
}, {
  tableName: 'celebrities',
  underscored: true,
  timestamps: true,
});

module.exports = Celebrity;
