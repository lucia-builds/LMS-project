const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Lesson = sequelize.define('Lesson', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'course_id',
    references: {
      model: 'courses',
      key: 'id',
    },
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Lesson title is required' },
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  lessonOrder: {
    type: DataTypes.INTEGER,
    field: 'lesson_order',
    allowNull: true,
    validate: {
      min: { args: [1], msg: 'Lesson order must be greater than 0' },
    },
  },
}, {
  tableName: 'lessons',
  underscored: true,
  timestamps: true,
});

module.exports = Lesson;
