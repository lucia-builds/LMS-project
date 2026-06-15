const { Course, Lesson, Celebrity } = require('../models');
const { Op } = require('sequelize');

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
exports.getCourses = async (req, res, next) => {
  try {
    let { page, limit, sortBy, sortOrder, category, level, minPrice, maxPrice } = req.query;

    // Default pagination values
    page = parseInt(page, 10) || 1;
    limit = parseInt(limit, 10) || 10;
    const offset = (page - 1) * limit;

    // Sorting
    const order = [];
    if (sortBy) {
      order.push([sortBy, sortOrder === 'desc' ? 'DESC' : 'ASC']);
    } else {
      order.push(['createdAt', 'DESC']); // default sort
    }

    // Filtering
    const where = {};
    if (category) {
      where.category = category;
    }
    if (level) {
      where.level = level;
    }
    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) where.price[Op.gte] = parseFloat(minPrice);
      if (maxPrice) where.price[Op.lte] = parseFloat(maxPrice);
    }

    const { count, rows } = await Course.findAndCountAll({
      where,
      order,
      limit,
      offset,
      include: [
        {
          model: Celebrity,
          as: 'mentors',
          attributes: ['id', 'name', 'profileImage', 'profession'],
          through: { attributes: [] } // Exclude join table columns
        }
      ]
    });

    res.status(200).json({
      success: true,
      count,
      pagination: {
        page,
        limit,
        totalPages: Math.ceil(count / limit)
      },
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single course
// @route   GET /api/courses/:id
// @access  Public
exports.getCourse = async (req, res, next) => {
  try {
    const course = await Course.findByPk(req.params.id, {
      include: [
        {
          model: Lesson,
          as: 'lessons',
        },
        {
          model: Celebrity,
          as: 'mentors',
          attributes: ['id', 'name', 'bio', 'profileImage', 'profession'],
          through: { attributes: [] }
        }
      ],
      order: [
        [{ model: Lesson, as: 'lessons' }, 'lessonOrder', 'ASC']
      ]
    });

    if (!course) {
      const error = new Error('Course not found');
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create course
// @route   POST /api/courses
// @access  Private/Admin
exports.createCourse = async (req, res, next) => {
  try {
    const { title, description, category, thumbnailUrl, price, level, mentorIds } = req.body;

    const course = await Course.create({
      title,
      description,
      category,
      thumbnailUrl,
      price,
      level
    });

    // If mentors are provided, associate them
    if (mentorIds && Array.isArray(mentorIds) && mentorIds.length > 0) {
      await course.setMentors(mentorIds);
    }

    // Reload with associations
    const completeCourse = await Course.findByPk(course.id, {
      include: [{ model: Celebrity, as: 'mentors', through: { attributes: [] } }]
    });

    res.status(201).json({
      success: true,
      data: completeCourse,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update course
// @route   PUT /api/courses/:id
// @access  Private/Admin
exports.updateCourse = async (req, res, next) => {
  try {
    let course = await Course.findByPk(req.params.id);

    if (!course) {
      const error = new Error('Course not found');
      error.statusCode = 404;
      return next(error);
    }

    const { title, description, category, thumbnailUrl, price, level, mentorIds } = req.body;

    await course.update({
      title,
      description,
      category,
      thumbnailUrl,
      price,
      level
    });

    // If mentors list is provided, update associations
    if (mentorIds && Array.isArray(mentorIds)) {
      await course.setMentors(mentorIds);
    }

    // Reload with associations
    const completeCourse = await Course.findByPk(course.id, {
      include: [
        { model: Lesson, as: 'lessons' },
        { model: Celebrity, as: 'mentors', through: { attributes: [] } }
      ]
    });

    res.status(200).json({
      success: true,
      data: completeCourse,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete course
// @route   DELETE /api/courses/:id
// @access  Private/Admin
exports.deleteCourse = async (req, res, next) => {
  try {
    const course = await Course.findByPk(req.params.id);

    if (!course) {
      const error = new Error('Course not found');
      error.statusCode = 404;
      return next(error);
    }

    await course.destroy();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};
