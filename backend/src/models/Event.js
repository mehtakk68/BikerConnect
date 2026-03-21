const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    route: [[Number]],
    startLocation: {
      type: { type: String, enum: ['Point'], default: 'Point' },
      coordinates: { type: [Number], required: true }
    },
    dateTime: { type: Date, required: true },
    maxRiders: Number,
    attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  },
  { timestamps: true }
);

eventSchema.index({ startLocation: '2dsphere' });

module.exports = mongoose.model('Event', eventSchema);
