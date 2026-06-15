const { Notification } = require('../models');

// @desc    Get user notifications
// @route   GET /api/notifications
// @access  Private
exports.getNotifications = async (req, res, next) => {
  try {
    const userId = req.headers['x-user-id'] || req.query.userId || 2;

    const notifications = await Notification.findAll({
      where: { userId },
      order: [['createdAt', 'DESC']]
    });

    res.status(200).json({
      success: true,
      count: notifications.length,
      data: notifications
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Mark notification as read
// @route   PUT /api/notifications/:id/read
// @access  Private
exports.markAsRead = async (req, res, next) => {
  try {
    const notification = await Notification.findByPk(req.params.id);

    if (!notification) {
      const error = new Error('Notification not found');
      error.statusCode = 404;
      return next(error);
    }

    notification.isRead = true;
    await notification.save();

    res.status(200).json({
      success: true,
      data: notification
    });
  } catch (error) {
    next(error);
  }
};
