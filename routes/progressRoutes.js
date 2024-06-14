const express = require('express');
const { authenticate, authorize } = require("../middleware/authMiddleware")
const { updateProgress, getProgress, getProgressByCourse } = require('../controllers/progressController');

const router = express.Router();

router.post('/', authenticate, authorize(['student']), updateProgress);
router.get('/:userId', authenticate, authorize(['teacher']), getProgress);
router.get('/course/:courseId', authenticate, authorize(['teacher']), getProgressByCourse);

module.exports = router;
