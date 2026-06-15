const express = require('express');
const { enrollCourse, switchMentor, getMyCourses } = require('../controllers/enrollmentController');

const router = express.Router();

router.route('/')
  .post(enrollCourse);

router.route('/my-courses')
  .get(getMyCourses);

router.route('/:id/switch-mentor')
  .put(switchMentor);

module.exports = router;
