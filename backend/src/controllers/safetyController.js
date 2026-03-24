const SOSAlert = require('../models/SOSAlert');

exports.triggerSOS = async (req, res) => {
  const alert = await SOSAlert.create({
    riderId: req.user.userId,
    rideId: req.body.rideId,
    location: req.body.location,
    note: req.body.note,
    emergencyContacts: req.body.emergencyContacts || []
  });

  res.status(201).json(alert);
};

exports.resolveSOS = async (req, res) => {
  const alert = await SOSAlert.findOneAndUpdate(
    { _id: req.params.id, riderId: req.user.userId },
    { status: 'resolved' },
    { new: true }
  );

  if (!alert) {
    return res.status(404).json({ message: 'SOS alert not found' });
  }

  return res.json(alert);
};

exports.listOpenAlerts = async (_req, res) => {
  const alerts = await SOSAlert.find({ status: 'open' })
    .sort({ createdAt: -1 })
    .limit(100)
    .populate('riderId', 'name profilePhoto');

  res.json(alerts);
};
