const express = require('express');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const { createLesson, updateLesson, deleteLesson } = require('../controllers/lessonController');

const router = express.Router();

router.post('/', authenticate, authorize(['teacher']), createLesson);
router.put('/:id', authenticate, authorize(['teacher']), updateLesson);
router.delete('/:id', authenticate, authorize(['teacher']), deleteLesson);

module.exports = router;
