const { ProgressTracking, Enrollment, Lesson } = require('../models');

// @desc    Update or create progress for a lesson
// @route   POST /api/progress
// @access  Private
exports.updateProgress = async (req, res, next) => {
  try {
    const { enrollmentId, lessonId, isCompleted, watchTimeSeconds } = req.body;

    // Validate enrollment exists
    const enrollment = await Enrollment.findByPk(enrollmentId);
    if (!enrollment) {
      const error = new Error(`Enrollment not found with id of ${enrollmentId}`);
      error.statusCode = 404;
      return next(error);
    }

    // Validate lesson exists
    const lesson = await Lesson.findByPk(lessonId);
    if (!lesson) {
      const error = new Error(`Lesson not found with id of ${lessonId}`);
      error.statusCode = 404;
      return next(error);
    }

    // Find or create progress tracking record
    let [progress, created] = await ProgressTracking.findOrCreate({
      where: { enrollmentId, lessonId },
      defaults: {
        isCompleted: isCompleted || false,
        completedAt: isCompleted ? new Date() : null,
        watchTimeSeconds: watchTimeSeconds || 0
      }
    });

    // If progress already existed, update it
    if (!created) {
      const updateData = {};
      if (isCompleted !== undefined) {
        updateData.isCompleted = isCompleted;
        updateData.completedAt = isCompleted ? new Date() : null;
      }
      if (watchTimeSeconds !== undefined) {
        // Increment or set watch time
        updateData.watchTimeSeconds = watchTimeSeconds;
      }
      
      progress = await progress.update(updateData);
    }

    res.status(200).json({
      success: true,
      data: progress
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get progress report for a specific course enrollment
// @route   GET /api/enrollments/:enrollmentId/progress
// @access  Private
exports.getEnrollmentProgress = async (req, res, next) => {
  try {
    const { enrollmentId } = req.params;

    const enrollment = await Enrollment.findByPk(enrollmentId, {
      include: [{ model: Lesson, as: 'course_lessons', association: 'course' }]
    });

    if (!enrollment) {
      const error = new Error('Enrollment not found');
      error.statusCode = 404;
      return next(error);
    }

    const progressRecords = await ProgressTracking.findAll({
      where: { enrollmentId },
      include: [{ model: Lesson, as: 'lesson', attributes: ['id', 'title', 'lessonOrder'] }]
    });

    // Calculate metrics
    const totalLessons = await Lesson.count({ where: { courseId: enrollment.courseId } });
    const completedCount = progressRecords.filter(p => p.isCompleted).length;
    const totalWatchTime = progressRecords.reduce((sum, record) => sum + record.watchTimeSeconds, 0);

    const completionRate = totalLessons > 0 ? parseFloat(((completedCount / totalLessons) * 100).toFixed(2)) : 0;

    res.status(200).json({
      success: true,
      data: {
        enrollmentId: parseInt(enrollmentId, 10),
        totalLessons,
        completedLessons: completedCount,
        completionRatePercent: completionRate,
        totalWatchTimeSeconds: totalWatchTime,
        records: progressRecords
      }
    });
  } catch (error) {
    next(error);
  }
};
