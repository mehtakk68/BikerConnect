const mongoose = require('mongoose');

const marketplaceItemSchema = new mongoose.Schema(
  {
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    category: {
      type: String,
      enum: ['bike', 'accessory', 'gear', 'service', 'other'],
      default: 'other'
    },
    price: { type: Number, min: 0, required: true },
    currency: { type: String, default: 'INR' },
    condition: {
      type: String,
      enum: ['new', 'like_new', 'used', 'for_parts'],
      default: 'used'
    },
    photos: [String],
    city: String,
    status: {
      type: String,
      enum: ['available', 'reserved', 'sold', 'archived'],
      default: 'available'
    }
  },
  { timestamps: true }
);

marketplaceItemSchema.index({ title: 'text', description: 'text' });

module.exports = mongoose.model('MarketplaceItem', marketplaceItemSchema);
