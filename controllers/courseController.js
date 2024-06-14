const Course = require('../models/Course');
const Lesson = require('../models/Lesson');

exports.createCourse = async (req, res) => {
  const { title, description } = req.body;
  try {
    const course = await Course.create({ title, description, teacherId: req.user.id });
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create course' });
  }
};

exports.updateCourse = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
      const course = await Course.findByPk(id);
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }
      if (course.teacherId !== req.user.id) {
        return res.status(403).json({ error: 'Unauthorized' });
      }
      course.title = title;
      course.description = description;
      await course.save();
      res.json(course);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update course' });
    }
  };
  
  exports.deleteCourse = async (req, res) => {
    const { id } = req.params;
    try {
      const course = await Course.findByPk(id);
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }
      if (course.teacherId !== req.user.id) {
        return res.status(403).json({ error: 'Unauthorized' });
      }
      await course.destroy();
      res.json({ message: 'Course deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete course' });
    }
  };
  
  exports.getAllCourses = async (req, res) => {
    try {
      const courses = await Course.findAll();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve courses' });
    }
  };
  
  exports.getCourseById = async (req, res) => {
    const { id } = req.params;
    try {
      const course = await Course.findByPk(id, { include: [Lesson] });
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }
      res.json(course);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve course' });
    }
  };
  