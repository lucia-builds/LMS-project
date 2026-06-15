const express = require('express');
const { getCelebrities, getCelebrity, createCelebrity } = require('../controllers/celebrityController');

const router = express.Router();

router.route('/')
  .get(getCelebrities)
  .post(createCelebrity);

router.route('/:id')
  .get(getCelebrity);

module.exports = router;
