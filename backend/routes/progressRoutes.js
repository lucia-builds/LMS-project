const express = require('express');
const { updateProgress, getEnrollmentProgress } = require('../controllers/progressController');

const router = express.Router();

router.route('/')
  .post(updateProgress);

router.route('/:enrollmentId')
  .get(getEnrollmentProgress);

module.exports = router;
