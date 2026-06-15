const express = require('express');
const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse
} = require('../controllers/courseController');

const {
  addLesson,
  getLessons,
  getLesson,
  updateLesson,
  deleteLesson
} = require('../controllers/lessonController');

const { getLessonVideo } = require('../controllers/videoController');

const router = express.Router();

// Course CRUD routes
router.route('/')
  .get(getCourses)
  .post(createCourse);

router.route('/:id')
  .get(getCourse)
  .put(updateCourse)
  .delete(deleteCourse);

// Lesson routes nested within courses
router.route('/:courseId/lessons')
  .get(getLessons)
  .post(addLesson);

// Direct Lesson CRUD routes
router.route('/lessons/:id')
  .get(getLesson)
  .put(updateLesson)
  .delete(deleteLesson);

// Eager load customized celebrity video for a lesson
router.route('/lessons/:lessonId/videos/:celebrityId')
  .get(getLessonVideo);

module.exports = router;
