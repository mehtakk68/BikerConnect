const Ride = require('../models/Ride');

exports.startRide = async (req, res) => {
  const ride = await Ride.create({ riderId: req.user.userId, startTime: new Date(), privacy: req.body.privacy });
  res.status(201).json(ride);
};

exports.endRide = async (req, res) => {
  const ride = await Ride.findByIdAndUpdate(req.params.id, { endTime: new Date(), ...req.body }, { new: true });
  res.json(ride);
};
