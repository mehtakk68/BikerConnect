const router = require('express').Router();
const asyncHandler = require('../middleware/asyncHandler');
const auth = require('../middleware/auth');
const { startRide, endRide } = require('../controllers/rideController');

router.post('/start', auth, asyncHandler(startRide));
router.patch('/:id/end', auth, asyncHandler(endRide));

module.exports = router;
