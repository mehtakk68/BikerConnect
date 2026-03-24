const MarketplaceItem = require('../models/MarketplaceItem');

exports.createListing = async (req, res) => {
  const listing = await MarketplaceItem.create({ ...req.body, sellerId: req.user.userId });
  res.status(201).json(listing);
};

exports.listListings = async (req, res) => {
  const { q, category, status = 'available' } = req.query;

  const filter = { status };
  if (category) filter.category = category;
  if (q) filter.$text = { $search: q };

  const listings = await MarketplaceItem.find(filter)
    .sort({ createdAt: -1 })
    .limit(100)
    .populate('sellerId', 'name profilePhoto bikeDetails');

  res.json(listings);
};

exports.markSold = async (req, res) => {
  const listing = await MarketplaceItem.findOneAndUpdate(
    { _id: req.params.id, sellerId: req.user.userId },
    { status: 'sold' },
    { new: true }
  );

  if (!listing) {
    return res.status(404).json({ message: 'Listing not found' });
  }

  return res.json(listing);
};
