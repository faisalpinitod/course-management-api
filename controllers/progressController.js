const Progress = require('../models/Progress');
const Course = require('../models/Course');

exports.updateProgress = async (req, res) => {
  const { courseId, progress } = req.body;
  try {
    const progressRecord = await Progress.findOne({ where: { userId: req.user.id, courseId } });
    if (progressRecord) {
      progressRecord.progress = progress;
      await progressRecord.save();
    } else {
      await Progress.create({ userId: req.user.id, courseId, progress });
    }
    res.status(200).json({ message: 'Progress updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update progress' });
  }
};

exports.getProgress = async (req, res) => {
  const { userId } = req.params;
  try {
    const progress = await Progress.findAll({ where: { userId } });
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve progress' });
  }
};

exports.getProgressByCourse = async (req, res) => {
  const { courseId } = req.params;
  try {
    const progress = await Progress.findAll({ where: { courseId } });
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve progress' });
  }
};
