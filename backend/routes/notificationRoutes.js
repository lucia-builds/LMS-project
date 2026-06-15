const express = require('express');
const { getNotifications, markAsRead } = require('../controllers/notificationController');

const router = express.Router();

router.route('/')
  .get(getNotifications);

router.route('/:id/read')
  .put(markAsRead);

module.exports = router;
