const mongoose = require('mongoose');

const sosAlertSchema = new mongoose.Schema(
  {
    riderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    rideId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ride' },
    location: {
      type: { type: String, enum: ['Point'], default: 'Point' },
      coordinates: { type: [Number], required: true }
    },
    note: String,
    emergencyContacts: [
      {
        name: String,
        phone: String,
        notifiedAt: Date
      }
    ],
    status: { type: String, enum: ['open', 'resolved', 'false_alarm'], default: 'open' }
  },
  { timestamps: true }
);

sosAlertSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('SOSAlert', sosAlertSchema);
