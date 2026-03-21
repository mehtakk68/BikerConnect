const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    chatId: { type: String, required: true, index: true },
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    message: String,
    mediaUrl: String,
    timestamp: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema);
