const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Video = sequelize.define('Video', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  lessonId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'lesson_id',
    references: {
      model: 'lessons',
      key: 'id',
    },
  },
  celebrityId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'celebrity_id',
    references: {
      model: 'celebrities',
      key: 'id',
    },
  },
  videoTitle: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'video_title',
    validate: {
      notEmpty: { msg: 'Video title is required' },
    },
  },
  videoUrl: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'video_url',
    validate: {
      notEmpty: { msg: 'Video URL is required' },
      isUrl: { msg: 'Must be a valid URL' },
    },
  },
  durationMinutes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'duration_minutes',
    validate: {
      min: { args: [1], msg: 'Duration must be at least 1 minute' },
    },
  },
}, {
  tableName: 'videos',
  underscored: true,
  timestamps: true,
});

module.exports = Video;
