const sequelize = require('../config/database');
const User = require('./User');
const Celebrity = require('./Celebrity');
const Course = require('./Course');
const Lesson = require('./Lesson');
const Enrollment = require('./Enrollment');
const Video = require('./Video');
const ProgressTracking = require('./ProgressTracking');
const Notification = require('./Notification');

// 1. Course & Celebrity (Many-to-Many through course_mentors table)
Course.belongsToMany(Celebrity, {
  through: 'course_mentors',
  as: 'mentors',
  foreignKey: 'course_id',
  otherKey: 'celebrity_id',
  timestamps: false,
});
Celebrity.belongsToMany(Course, {
  through: 'course_mentors',
  as: 'courses',
  foreignKey: 'celebrity_id',
  otherKey: 'course_id',
  timestamps: false,
});

// 2. Course & Lesson (One-to-Many)
Course.hasMany(Lesson, {
  foreignKey: 'course_id',
  as: 'lessons',
  onDelete: 'CASCADE',
});
Lesson.belongsTo(Course, {
  foreignKey: 'course_id',
  as: 'course',
});

// 3. User & Enrollment (One-to-Many)
User.hasMany(Enrollment, {
  foreignKey: 'user_id',
  as: 'enrollments',
  onDelete: 'CASCADE',
});
Enrollment.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

// 4. Course & Enrollment (One-to-Many)
Course.hasMany(Enrollment, {
  foreignKey: 'course_id',
  as: 'enrollments',
  onDelete: 'CASCADE',
});
Enrollment.belongsTo(Course, {
  foreignKey: 'course_id',
  as: 'course',
});

// 5. Celebrity & Enrollment (One-to-Many, Chosen Mentor)
Celebrity.hasMany(Enrollment, {
  foreignKey: 'celebrity_id',
  as: 'enrollments',
  onDelete: 'SET NULL',
});
Enrollment.belongsTo(Celebrity, {
  foreignKey: 'celebrity_id',
  as: 'mentor',
});

// 6. Lesson & Video (One-to-Many, Mentor-specific Videos)
Lesson.hasMany(Video, {
  foreignKey: 'lesson_id',
  as: 'videos',
  onDelete: 'CASCADE',
});
Video.belongsTo(Lesson, {
  foreignKey: 'lesson_id',
  as: 'lesson',
});

// 7. Celebrity & Video (One-to-Many)
Celebrity.hasMany(Video, {
  foreignKey: 'celebrity_id',
  as: 'videos',
  onDelete: 'CASCADE',
});
Video.belongsTo(Celebrity, {
  foreignKey: 'celebrity_id',
  as: 'mentor',
});

// 8. Enrollment & ProgressTracking (One-to-Many)
Enrollment.hasMany(ProgressTracking, {
  foreignKey: 'enrollment_id',
  as: 'progress',
  onDelete: 'CASCADE',
});
ProgressTracking.belongsTo(Enrollment, {
  foreignKey: 'enrollment_id',
  as: 'enrollment',
});

// 9. Lesson & ProgressTracking (One-to-Many)
Lesson.hasMany(ProgressTracking, {
  foreignKey: 'lesson_id',
  as: 'progress',
  onDelete: 'CASCADE',
});
ProgressTracking.belongsTo(Lesson, {
  foreignKey: 'lesson_id',
  as: 'lesson',
});

// 10. User & Notification (One-to-Many)
User.hasMany(Notification, {
  foreignKey: 'user_id',
  as: 'notifications',
  onDelete: 'CASCADE',
});
Notification.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

module.exports = {
  sequelize,
  User,
  Celebrity,
  Course,
  Lesson,
  Enrollment,
  Video,
  ProgressTracking,
  Notification,
};
