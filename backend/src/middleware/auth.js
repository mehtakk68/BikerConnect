const admin = require('firebase-admin');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace('Bearer ', '');

  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    const existing = await User.findOne({ firebaseUid: decoded.uid }).select('_id email firebaseUid');
    req.user = {
      uid: decoded.uid,
      email: decoded.email,
      userId: existing?._id
    };
    next();
  } catch (_err) {
    res.status(401).json({ message: 'Invalid auth token' });
  }
};
