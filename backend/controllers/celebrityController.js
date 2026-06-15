const { Celebrity, Course } = require('../models');

// @desc    Get all active celebrity mentors
// @route   GET /api/celebrities
// @access  Public
exports.getCelebrities = async (req, res, next) => {
  try {
    const { activeOnly } = req.query;
    
    const where = {};
    if (activeOnly !== 'false') {
      where.isActive = true;
    }

    const celebrities = await Celebrity.findAll({
      where,
      include: [
        {
          model: Course,
          as: 'courses',
          attributes: ['id', 'title', 'thumbnailUrl', 'level'],
          through: { attributes: [] }
        }
      ]
    });

    res.status(200).json({
      success: true,
      count: celebrities.length,
      data: celebrities,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single celebrity mentor details
// @route   GET /api/celebrities/:id
// @access  Public
exports.getCelebrity = async (req, res, next) => {
  try {
    const celebrity = await Celebrity.findByPk(req.params.id, {
      include: [
        {
          model: Course,
          as: 'courses',
          attributes: ['id', 'title', 'description', 'thumbnailUrl', 'level', 'price'],
          through: { attributes: [] }
        }
      ]
    });

    if (!celebrity) {
      const error = new Error('Celebrity mentor not found');
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      success: true,
      data: celebrity,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a celebrity mentor
// @route   POST /api/celebrities
// @access  Private/Admin
exports.createCelebrity = async (req, res, next) => {
  try {
    const { name, bio, profileImage, profession, isActive } = req.body;

    const celebrity = await Celebrity.create({
      name,
      bio,
      profileImage,
      profession,
      isActive: isActive !== undefined ? isActive : true
    });

    res.status(201).json({
      success: true,
      data: celebrity,
    });
  } catch (error) {
    next(error);
  }
};
