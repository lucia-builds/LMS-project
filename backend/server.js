const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { sequelize } = require('./models');
const courseRoutes = require('./routes/courseRoutes');
const userRoutes = require('./routes/userRoutes');
const celebrityRoutes = require('./routes/celebrityRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const progressRoutes = require('./routes/progressRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const errorHandler = require('./middleware/errorHandler');

// Load env vars
dotenv.config();

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Mount routers
app.use('/api/courses', courseRoutes);
app.use('/api/users', userRoutes);
app.use('/api/celebrities', celebrityRoutes);
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/notifications', notificationRoutes);

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Authenticate database connection
    // We wrap this in try-catch to allow server to start even if DB fails initially (since you don't have DB link yet)
    try {
      await sequelize.authenticate();
      console.log('PostgreSQL Database connected...');
      
      // Sync models (in production, use migrations)
      await sequelize.sync({ force: false });
    } catch (err) {
      console.error('Unable to connect to the database. Provide correct DATABASE_URL in .env:', err.message);
    }

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();
