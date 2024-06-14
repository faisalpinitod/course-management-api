const express = require('express');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const { createCourse, updateCourse, deleteCourse, getAllCourses, getCourseById } = require('../controllers/courseController');

const router = express.Router();

router.post('/', authenticate, authorize(['teacher']), createCourse);
router.put('/:id', authenticate, authorize(['teacher']), updateCourse);
router.delete('/:id', authenticate, authorize(['teacher']), deleteCourse);
router.get('/', authenticate, getAllCourses);
router.get('/:id', authenticate, getCourseById);

module.exports = router;
