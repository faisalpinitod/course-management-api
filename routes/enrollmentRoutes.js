const express = require('express');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const { enrollInCourse, getEnrollments, getEnrollmentsByCourse } = require('../controllers/enrollmentController');

const router = express.Router();

router.post('/', authenticate, authorize(['student']), enrollInCourse);
router.get('/', authenticate, authorize(['student']), getEnrollments);
router.get('/course/:courseId', authenticate, authorize(['teacher']), getEnrollmentsByCourse);

module.exports = router;
