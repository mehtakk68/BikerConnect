const router = require('express').Router();
const asyncHandler = require('../middleware/asyncHandler');
const auth = require('../middleware/auth');
const { createEvent, listEvents } = require('../controllers/eventController');

router.get('/', auth, asyncHandler(listEvents));
router.post('/', auth, asyncHandler(createEvent));

module.exports = router;
