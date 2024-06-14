const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');
const User = require('../models/User');

exports.enrollInCourse = async (req, res) => {
  const { courseId } = req.body;
  try {
    const course = await Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    const enrollment = await Enrollment.create({ userId: req.user.id, courseId });
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to enroll in course' });
  }
};

exports.getEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.findAll({ where: { userId: req.user.id } });
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve enrollments' });
  }
};

exports.getEnrollmentsByCourse = async (req, res) => {
  const { courseId } = req.params;
  try {
    const enrollments = await Enrollment.findAll({ where: { courseId }, include: [User] });
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve enrollments' });
  }
};
