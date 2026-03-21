const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema(
  {
    riderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    routeCoordinates: [[Number]],
    startTime: Date,
    endTime: Date,
    privacy: { type: String, enum: ['public', 'friends', 'private'], default: 'friends' },
    joinedRiders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    distanceKm: Number,
    durationSec: Number,
    avgSpeedKmph: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model('Ride', rideSchema);
