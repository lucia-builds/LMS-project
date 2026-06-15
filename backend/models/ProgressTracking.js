const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProgressTracking = sequelize.define('ProgressTracking', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  enrollmentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'enrollment_id',
    references: {
      model: 'enrollments',
      key: 'id',
    },
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
  isCompleted: {
    type: DataTypes.BOOLEAN,
    field: 'is_completed',
    defaultValue: false,
  },
  completedAt: {
    type: DataTypes.DATE,
    field: 'completed_at',
    allowNull: true,
  },
  watchTimeSeconds: {
    type: DataTypes.INTEGER,
    field: 'watch_time_seconds',
    defaultValue: 0,
    validate: {
      min: { args: [0], msg: 'Watch time cannot be negative' },
    },
  },
}, {
  tableName: 'progress_tracking',
  underscored: true,
  timestamps: true,
});

module.exports = ProgressTracking;
