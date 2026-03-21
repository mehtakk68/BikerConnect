const Message = require('../models/Message');

exports.getChatMessages = async (req, res) => {
  const messages = await Message.find({ chatId: req.params.chatId }).sort({ timestamp: 1 }).limit(200);
  res.json(messages);
};
