const router = require('express').Router();
const asyncHandler = require('../middleware/asyncHandler');
const auth = require('../middleware/auth');
const { createRoute, listRoutes } = require('../controllers/routeController');

router.get('/', auth, asyncHandler(listRoutes));
router.post('/', auth, asyncHandler(createRoute));

module.exports = router;
