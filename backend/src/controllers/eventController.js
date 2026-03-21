const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  const event = await Event.create(req.body);
  res.status(201).json(event);
};

exports.listEvents = async (_req, res) => {
  const events = await Event.find().sort({ dateTime: 1 }).limit(200);
  res.json(events);
};
