const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const post = await Post.create({ ...req.body, userId: req.user.userId });
  res.status(201).json(post);
};

exports.getFeed = async (_req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 }).limit(50).populate('userId', 'name profilePhoto');
  res.json(posts);
};
