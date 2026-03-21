const router = require('express').Router();
const asyncHandler = require('../middleware/asyncHandler');
const auth = require('../middleware/auth');
const { upsertProfile, getNearbyRiders } = require('../controllers/userController');

router.post('/profile', auth, asyncHandler(upsertProfile));
router.get('/nearby', auth, asyncHandler(getNearbyRiders));

module.exports = router;
