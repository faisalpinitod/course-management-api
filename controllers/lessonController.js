const Lesson = require('../models/Lesson');
const Course = require('../models/Course');

exports.createLesson = async (req, res) => {
  const { title, content, courseId } = req.body;
  try {
    const course = await Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    if (course.teacherId !== req.user.id) {
      return res.status(403).json({ error: 'Unauthorized' });
    }
    const lesson = await Lesson.create({ title, content, courseId });
    res.status(201).json(lesson);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create lesson' });
  }
};

exports.updateLesson = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const lesson = await Lesson.findByPk(id);
    if (!lesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }
    const course = await Course.findByPk(lesson.courseId);
    if (course.teacherId !== req.user.id) {
      return res.status(403).json({ error: 'Unauthorized' });
    }
    lesson.title = title;
    lesson.content = content;
    await lesson.save();
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update lesson' });
  }
};

exports.deleteLesson = async (req, res) => {
  const { id } = req.params;
  try {
    const lesson = await Lesson.findByPk(id);
    if (!lesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }
    const course = await Course.findByPk(lesson.courseId);
    if (course.teacherId !== req.user.id) {
      return res.status(403).json({ error: 'Unauthorized' });
    }
    await lesson.destroy();
    res.json({ message: 'Lesson deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete lesson' });
  }
};
