const User = require('../models/User');
const Post = require('../models/Post');

exports.getDashboard = async (_req, res) => {
  const [users, posts, reportedPosts] = await Promise.all([
    User.countDocuments(),
    Post.countDocuments(),
    Post.countDocuments({ reports: { $exists: true, $ne: [] } })
  ]);

  res.json({ users, posts, reportedPosts });
};
