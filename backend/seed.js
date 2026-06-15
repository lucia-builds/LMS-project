const {
  sequelize,
  User,
  Celebrity,
  Course,
  Lesson,
  Enrollment,
  Video,
  ProgressTracking,
  Notification
} = require('./models');

const runSeed = async () => {
  try {
    // Sync database and clear existing data
    await sequelize.sync({ force: true });
    console.log('Database synced & tables dropped/recreated.');

    // Seed Users
    await User.bulkCreate([
      {
        fullname: 'Manasvi',
        email: 'admin@school.com',
        passwordHash: '$2b$12$K3v0E67xU5YBzR2h9Xz7uO1A8vBfC3dE4fG5h6i7j8k9l0m1n2o3p',
        role: 'admin',
        profileImage: 'https://example.com/images/avatars/alex_admin.png'
      },
      {
        fullname: 'Shyam Singh',
        email: 'shyam@student.com',
        passwordHash: '$2b$12$eX8mR1v9K2s7B4v3N5m8uO2BfC3dE4fG5h6i7j8k9l0m1n2o3p4q',
        role: 'user',
        profileImage: 'https://example.com/images/avatars/shyam_student.png'
      },
      {
        fullname: 'Manoj Kumar',
        email: 'manoj@student.com',
        passwordHash: '$2b$12$pL2mN9v8B7v6C5x4Z3m2uO3BfC3dE4fG5h6i7j8k9l0m1n2o3p4q',
        role: 'user',
        profileImage: 'https://example.com/images/avatars/manoj_student.png'
      },
      {
        fullname: 'Ravi Kumar',
        email: 'ravi@student.com',
        passwordHash: '$2b$12$zX9cC8v7B6n5M4k3J2h1uO5BfC3dE4fG5h6i7j8k9l0m1n2o3p4q',
        role: 'user',
        profileImage: 'https://example.com/images/avatars/ravi_student.png'
      }
    ]);
    console.log('Users seeded successfully.');

    // Seed Celebrities
    await Celebrity.bulkCreate([
      {
        name: 'Shah Rukh Khan',
        bio: 'The Badshah of Coding. Master of building scalable architectures and premium frontends.',
        profession: 'React.js & Web Architecture',
        profileImage: 'https://example.com/shahrukh.png',
        isActive: true
      },
      {
        name: 'Deepika Padukone',
        bio: 'Global superstar turned backend engineering expert focusing on data systems.',
        profession: 'Node.js & Database Engineering',
        profileImage: 'https://example.com/deepika.png',
        isActive: true
      },
      {
        name: 'Hrithik Roshan',
        bio: 'High-performance computing enthusiast specializing in clean algorithms and UI optimization.',
        profession: 'Data Structures & UI/UX',
        profileImage: 'https://example.com/hrithik.png',
        isActive: true
      }
    ]);
    console.log('Celebrities seeded successfully.');

    // Seed Courses
    await Course.bulkCreate([
      {
        title: 'Full-Stack Web Development Masterclass',
        description: 'Go from absolute zero to production-ready applications with modern web stacks.',
        thumbnailUrl: 'https://example.com/fullstack_thumb.png',
        level: 'beginner'
      },
      {
        title: 'Advanced Algorithms & System Design',
        description: 'Master complex problem solving and write enterprise-grade backend infrastructure.',
        thumbnailUrl: 'https://example.com/system_thumb.png',
        level: 'advanced'
      }
    ]);
    console.log('Courses seeded successfully.');

    // Seed Course Mentors relations (Many-to-Many through course_mentors)
    const c1 = await Course.findByPk(1);
    await c1.setMentors([1, 2]);

    const c2 = await Course.findByPk(2);
    await c2.setMentors([2, 3]);
    console.log('Course Mentors associations seeded successfully.');

    // Seed Lessons
    await Lesson.bulkCreate([
      {
        courseId: 1,
        title: 'Introduction to Components & State',
        description: 'Understanding how data flows through a modern interactive UI component tree.',
        lessonOrder: 1
      },
      {
        courseId: 1,
        title: 'Building RESTful APIs with Express',
        description: 'Architecting robust server endpoints, middleware routing, and request handlers.',
        lessonOrder: 2
      },
      {
        courseId: 2,
        title: 'Mastering Database Sharding & Indexing',
        description: 'Deep dive into optimizing read/write throughput for high-traffic platforms.',
        lessonOrder: 1
      }
    ]);
    console.log('Lessons seeded successfully.');

    // Seed Enrollments
    await Enrollment.bulkCreate([
      {
        userId: 2,
        courseId: 1,
        celebrityId: 1,
      },
      {
        userId: 3,
        courseId: 1,
        celebrityId: 2,
      },
      {
        userId: 2,
        courseId: 2,
        celebrityId: 3,
      }
    ]);
    console.log('Enrollments seeded successfully.');

    // Seed Videos
    await Video.bulkCreate([
      {
        lessonId: 1,
        celebrityId: 1,
        videoTitle: 'React State Blueprint with SRK',
        videoUrl: 'https://video.com/srk-react-state',
        durationMinutes: 25
      },
      {
        lessonId: 1,
        celebrityId: 2,
        videoTitle: 'Deepika Explains Component Lifecycles',
        videoUrl: 'https://video.com/deepika-components',
        durationMinutes: 22
      },
      {
        lessonId: 2,
        celebrityId: 1,
        videoTitle: 'Express Routing Logic with SRK',
        videoUrl: 'https://video.com/srk-express-routing',
        durationMinutes: 28
      },
      {
        lessonId: 2,
        celebrityId: 2,
        videoTitle: 'Express Backends with Deepika',
        videoUrl: 'https://video.com/deepika-express',
        durationMinutes: 30
      },
      {
        lessonId: 3,
        celebrityId: 2,
        videoTitle: 'Sharding Large Scale Tables with Deepika',
        videoUrl: 'https://video.com/deepika-sharding',
        durationMinutes: 40
      },
      {
        lessonId: 3,
        celebrityId: 3,
        videoTitle: 'High Performance Indexing with Hrithik',
        videoUrl: 'https://video.com/hrithik-indexing',
        durationMinutes: 35
      }
    ]);
    console.log('Videos seeded successfully.');

    // Seed Progress Tracking
    await ProgressTracking.bulkCreate([
      {
        enrollmentId: 1,
        lessonId: 1,
        isCompleted: true,
        watchTimeSeconds: 1500
      },
      {
        enrollmentId: 2,
        lessonId: 1,
        isCompleted: false,
        watchTimeSeconds: 400
      }
    ]);
    console.log('Progress Tracking seeded successfully.');

    // Seed Notifications
    await Notification.bulkCreate([
      {
        userId: 2,
        title: 'Mentor Switched Successfully',
        message: 'Your mentor has been updated. Enjoy your classes!',
        isRead: false
      }
    ]);
    console.log('Notifications seeded successfully.');

    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await sequelize.close();
  }
};

runSeed();
