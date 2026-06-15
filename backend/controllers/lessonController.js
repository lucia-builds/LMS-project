const { Lesson, Course } = require('../models');

// @desc    Add lesson to a course
// @route   POST /api/courses/:courseId/lessons
// @access  Private/Admin
exports.addLesson = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const { title, description, lessonOrder } = req.body;

    // Check if course exists
    const course = await Course.findByPk(courseId);
    if (!course) {
      const error = new Error(`Course not found with id of ${courseId}`);
      error.statusCode = 404;
      return next(error);
    }

    const lesson = await Lesson.create({
      courseId,
      title,
      description,
      lessonOrder,
    });

    res.status(201).json({
      success: true,
      data: lesson,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get lessons for a course
// @route   GET /api/courses/:courseId/lessons
// @access  Public
exports.getLessons = async (req, res, next) => {
  try {
    const { courseId } = req.params;

    // Verify course exists first
    const course = await Course.findByPk(courseId);
    if (!course) {
      const error = new Error(`Course not found with id of ${courseId}`);
      error.statusCode = 404;
      return next(error);
    }

    const lessons = await Lesson.findAll({
      where: { courseId },
      order: [['lessonOrder', 'ASC']],
    });

    res.status(200).json({
      success: true,
      count: lessons.length,
      data: lessons,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single lesson
// @route   GET /api/lessons/:id
// @access  Public
exports.getLesson = async (req, res, next) => {
  try {
    const lesson = await Lesson.findByPk(req.params.id, {
      include: [{ model: Course, as: 'course', attributes: ['id', 'title'] }]
    });

    if (!lesson) {
      const error = new Error('Lesson not found');
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      success: true,
      data: lesson,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update lesson
// @route   PUT /api/lessons/:id
// @access  Private/Admin
exports.updateLesson = async (req, res, next) => {
  try {
    let lesson = await Lesson.findByPk(req.params.id);

    if (!lesson) {
      const error = new Error('Lesson not found');
      error.statusCode = 404;
      return next(error);
    }

    const { title, description, lessonOrder } = req.body;

    lesson = await lesson.update({
      title,
      description,
      lessonOrder,
    });

    res.status(200).json({
      success: true,
      data: lesson,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete lesson
// @route   DELETE /api/lessons/:id
// @access  Private/Admin
exports.deleteLesson = async (req, res, next) => {
  try {
    const lesson = await Lesson.findByPk(req.params.id);

    if (!lesson) {
      const error = new Error('Lesson not found');
      error.statusCode = 404;
      return next(error);
    }

    await lesson.destroy();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};
