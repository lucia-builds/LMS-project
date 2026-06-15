const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Sequelize Validation Error
  if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
    const errors = err.errors.map(e => e.message);
    return res.status(400).json({
      success: false,
      error: 'Validation Error',
      details: errors,
    });
  }

  // General Error
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    error: err.message || 'Server Error',
  });
};

module.exports = errorHandler;
