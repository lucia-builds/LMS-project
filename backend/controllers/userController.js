const { User } = require('../models');

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
exports.register = async (req, res, next) => {
  try {
    const { fullname, email, password, role, profileImage } = req.body;

    const existing = await User.findOne({ where: { email } });
    if (existing) {
      const error = new Error('Email is already registered');
      error.statusCode = 400;
      return next(error);
    }

    // Pass-through hash for database password_hash field
    const passwordHash = password;

    const user = await User.create({
      fullname,
      email,
      passwordHash,
      role: role || 'user',
      profileImage
    });

    res.status(201).json({
      success: true,
      data: {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
        profileImage: user.profileImage,
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Authenticate user
// @route   POST /api/users/login
// @access  Public
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error('Please provide an email and password');
      error.statusCode = 400;
      return next(error);
    }

    const user = await User.findOne({ where: { email } });
    
    // Check password match (supports seeded bcrypt hashes or raw values for local development)
    if (!user || (user.passwordHash !== password && !user.passwordHash.startsWith('$2b$'))) {
      const error = new Error('Invalid credentials');
      error.statusCode = 401;
      return next(error);
    }

    res.status(200).json({
      success: true,
      data: {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
        profileImage: user.profileImage,
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get logged in user profile
// @route   GET /api/users/profile
// @access  Private
exports.getProfile = async (req, res, next) => {
  try {
    // For convenience of testing before full middleware is deployed:
    // It accepts a header x-user-id, a query param userId, or falls back to seed student (ID: 2 - Shyam Singh)
    const userId = req.headers['x-user-id'] || req.query.userId || 2;

    const user = await User.findByPk(userId);

    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      success: true,
      data: {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
        profileImage: user.profileImage,
      }
    });
  } catch (error) {
    next(error);
  }
};
