const mongoose = require('mongoose');

const routePlanSchema = new mongoose.Schema(
  {
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    name: { type: String, required: true, trim: true },
    description: String,
    coordinates: { type: [[Number]], default: [] },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' },
    scenicRating: { type: Number, min: 1, max: 5, default: 3 },
    estimatedDistanceKm: { type: Number, min: 0 },
    estimatedDurationMin: { type: Number, min: 0 },
    gpxUrl: String,
    isPublic: { type: Boolean, default: true },
    tags: [String]
  },
  { timestamps: true }
);

routePlanSchema.index({ name: 'text', description: 'text', tags: 'text' });

module.exports = mongoose.model('RoutePlan', routePlanSchema);
