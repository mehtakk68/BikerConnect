const RoutePlan = require('../models/RoutePlan');

exports.createRoute = async (req, res) => {
  const route = await RoutePlan.create({ ...req.body, authorId: req.user.userId });
  res.status(201).json(route);
};

exports.listRoutes = async (req, res) => {
  const { q, difficulty } = req.query;
  const filter = { isPublic: true };

  if (difficulty) filter.difficulty = difficulty;
  if (q) filter.$text = { $search: q };

  const routes = await RoutePlan.find(filter)
    .sort({ createdAt: -1 })
    .limit(100)
    .populate('authorId', 'name profilePhoto');

  res.json(routes);
};
