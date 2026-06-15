const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Course = sequelize.define('Course', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Course title is required' },
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  thumbnailUrl: {
    type: DataTypes.TEXT,
    field: 'thumbnail_url',
    allowNull: true,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    validate: {
      min: { args: [0], msg: 'Price cannot be negative' },
    },
  },
  level: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: {
        args: [['beginner', 'intermediate', 'advanced']],
        msg: 'Level must be beginner, intermediate, or advanced',
      },
    },
  },
}, {
  tableName: 'courses',
  underscored: true,
  timestamps: true,
});

module.exports = Course;
