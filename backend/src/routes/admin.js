const router = require('express').Router();
const asyncHandler = require('../middleware/asyncHandler');
const auth = require('../middleware/auth');
const { getDashboard } = require('../controllers/adminController');

router.get('/dashboard', auth, asyncHandler(getDashboard));

module.exports = router;
