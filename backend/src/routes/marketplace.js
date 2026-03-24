const router = require('express').Router();
const asyncHandler = require('../middleware/asyncHandler');
const auth = require('../middleware/auth');
const { createListing, listListings, markSold } = require('../controllers/marketplaceController');

router.get('/', auth, asyncHandler(listListings));
router.post('/', auth, asyncHandler(createListing));
router.patch('/:id/sold', auth, asyncHandler(markSold));

module.exports = router;
