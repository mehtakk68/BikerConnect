const User = require('../models/User');

exports.upsertProfile = async (req, res) => {
  const payload = { ...req.body, firebaseUid: req.user.uid, email: req.user.email };
  const user = await User.findOneAndUpdate({ firebaseUid: req.user.uid }, payload, {
    new: true,
    upsert: true,
    setDefaultsOnInsert: true
  });
  res.json(user);
};

exports.getNearbyRiders = async (req, res) => {
  const { lng, lat, km = 25 } = req.query;
  const users = await User.find({
    location: {
      $near: {
        $geometry: { type: 'Point', coordinates: [Number(lng), Number(lat)] },
        $maxDistance: Number(km) * 1000
      }
    }
  }).limit(100);
  res.json(users);
};
