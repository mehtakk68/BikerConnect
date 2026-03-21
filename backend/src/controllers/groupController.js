const Group = require('../models/Group');

exports.createGroup = async (req, res) => {
  const group = await Group.create({ ...req.body, admins: [req.user.userId], members: [req.user.userId] });
  res.status(201).json(group);
};

exports.listGroups = async (_req, res) => {
  const groups = await Group.find().sort({ createdAt: -1 }).limit(100);
  res.json(groups);
};
