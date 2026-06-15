const { Video, Lesson, Celebrity } = require('../models');

// @desc    Get video for a specific lesson by specific mentor
// @route   GET /api/lessons/:lessonId/videos/:celebrityId
// @access  Private
exports.getLessonVideo = async (req, res, next) => {
  try {
    const { lessonId, celebrityId } = req.params;

    const video = await Video.findOne({
      where: { lessonId, celebrityId },
      include: [
        { model: Lesson, as: 'lesson', attributes: ['id', 'title'] },
        { model: Celebrity, as: 'mentor', attributes: ['id', 'name', 'profileImage'] }
      ]
    });

    if (!video) {
      const error = new Error('No customized video found for this lesson and mentor combination');
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      success: true,
      data: video
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create/Upload a dynamic video for a lesson
// @route   POST /api/videos
// @access  Private/Admin
exports.createVideo = async (req, res, next) => {
  try {
    const { lessonId, celebrityId, videoTitle, videoUrl, durationMinutes } = req.body;

    // Verify lesson exists
    const lesson = await Lesson.findByPk(lessonId);
    if (!lesson) {
      const error = new Error(`Lesson not found with id of ${lessonId}`);
      error.statusCode = 404;
      return next(error);
    }

    // Verify celebrity exists
    const celebrity = await Celebrity.findByPk(celebrityId);
    if (!celebrity) {
      const error = new Error(`Celebrity mentor not found with id of ${celebrityId}`);
      error.statusCode = 404;
      return next(error);
    }

    // Check if video combination already exists (schema has a UNIQUE constraint)
    const existing = await Video.findOne({
      where: { lessonId, celebrityId }
    });

    if (existing) {
      const error = new Error('A video already exists for this lesson and celebrity mentor combination');
      error.statusCode = 400;
      return next(error);
    }

    const video = await Video.create({
      lessonId,
      celebrityId,
      videoTitle,
      videoUrl,
      durationMinutes
    });

    res.status(201).json({
      success: true,
      data: video
    });
  } catch (error) {
    next(error);
  }
};
