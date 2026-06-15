const { Enrollment, Course, Celebrity, Notification, User } = require('../models');

// @desc    Enroll student in a course
// @route   POST /api/enrollments
// @access  Private
exports.enrollCourse = async (req, res, next) => {
  try {
    const { courseId, celebrityId } = req.body;
    // Default to seeded student ID: 2 (Shyam) if header is missing
    const userId = req.headers['x-user-id'] || req.query.userId || 2;

    // Validate course exists
    const course = await Course.findByPk(courseId);
    if (!course) {
      const error = new Error(`Course not found with id of ${courseId}`);
      error.statusCode = 404;
      return next(error);
    }

    // Validate mentor is associated with the course
    if (celebrityId) {
      const isAssociated = await course.hasMentor(celebrityId);
      if (!isAssociated) {
        const error = new Error(`Celebrity mentor ${celebrityId} does not teach this course`);
        error.statusCode = 400;
        return next(error);
      }
    }

    // Check if already enrolled
    const existing = await Enrollment.findOne({
      where: { userId, courseId }
    });

    if (existing) {
      const error = new Error('You are already enrolled in this course');
      error.statusCode = 400;
      return next(error);
    }

    const enrollment = await Enrollment.create({
      userId,
      courseId,
      celebrityId,
      status: 'active'
    });

    // Create system notification
    await Notification.create({
      userId,
      title: 'Enrolled Successfully',
      message: `You have successfully enrolled in ${course.title}!`,
      type: 'enrollment'
    });

    // Reload with associations
    const completeEnrollment = await Enrollment.findByPk(enrollment.id, {
      include: [
        { model: Course, as: 'course', attributes: ['id', 'title', 'thumbnailUrl'] },
        { model: Celebrity, as: 'mentor', attributes: ['id', 'name', 'profileImage'] }
      ]
    });

    res.status(201).json({
      success: true,
      data: completeEnrollment
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Switch chosen mentor for enrollment
// @route   PUT /api/enrollments/:id/switch-mentor
// @access  Private
exports.switchMentor = async (req, res, next) => {
  try {
    const { celebrityId } = req.body;
    const enrollmentId = req.params.id;

    const enrollment = await Enrollment.findByPk(enrollmentId, {
      include: [{ model: Course, as: 'course' }]
    });

    if (!enrollment) {
      const error = new Error('Enrollment not found');
      error.statusCode = 404;
      return next(error);
    }

    // Validate if the new mentor teaches the course
    const celebrity = await Celebrity.findByPk(celebrityId);
    if (!celebrity) {
      const error = new Error('Celebrity mentor not found');
      error.statusCode = 404;
      return next(error);
    }

    const course = enrollment.course;
    const isAssociated = await course.hasMentor(celebrityId);
    if (!isAssociated) {
      const error = new Error(`Celebrity mentor ${celebrity.name} does not teach this course`);
      error.statusCode = 400;
      return next(error);
    }

    // Switch the mentor
    enrollment.celebrityId = celebrityId;
    await enrollment.save();

    // Create notification
    await Notification.create({
      userId: enrollment.userId,
      title: 'Mentor Switched Successfully',
      message: `Your mentor has been updated to ${celebrity.name} for ${course.title}. Enjoy your classes!`,
      type: 'mentor_switch'
    });

    // Reload enrollment data
    const completeEnrollment = await Enrollment.findByPk(enrollment.id, {
      include: [
        { model: Course, as: 'course', attributes: ['id', 'title', 'thumbnailUrl'] },
        { model: Celebrity, as: 'mentor', attributes: ['id', 'name', 'profileImage', 'profession'] }
      ]
    });

    res.status(200).json({
      success: true,
      message: 'Mentor switched successfully',
      data: completeEnrollment
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get enrolled courses for a student
// @route   GET /api/enrollments/my-courses
// @access  Private
exports.getMyCourses = async (req, res, next) => {
  try {
    const userId = req.headers['x-user-id'] || req.query.userId || 2;

    const enrollments = await Enrollment.findAll({
      where: { userId },
      include: [
        {
          model: Course,
          as: 'course',
          attributes: ['id', 'title', 'description', 'thumbnailUrl', 'level']
        },
        {
          model: Celebrity,
          as: 'mentor',
          attributes: ['id', 'name', 'profileImage', 'profession']
        }
      ],
      order: [['createdAt', 'DESC']]
    });

    res.status(200).json({
      success: true,
      count: enrollments.length,
      data: enrollments
    });
  } catch (error) {
    next(error);
  }
};
