const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Enrollment = sequelize.define('Enrollment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
    references: {
      model: 'users',
      key: 'user_id',
    },
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
  celebrityId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'celebrity_id',
    references: {
      model: 'celebrities',
      key: 'id',
    },
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active',
    validate: {
      isIn: {
        args: [['active', 'completed', 'cancelled']],
        msg: 'Status must be active, completed, or cancelled',
      },
    },
  },
}, {
  tableName: 'enrollments',
  underscored: true,
  timestamps: true,
  createdAt: 'enrolled_at', // Map Sequelize's default createdAt to enrolled_at column
  updatedAt: 'updated_at',
});

module.exports = Enrollment;
