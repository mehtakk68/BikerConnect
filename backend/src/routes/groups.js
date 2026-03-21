const router = require('express').Router();
const asyncHandler = require('../middleware/asyncHandler');
const auth = require('../middleware/auth');
const { createGroup, listGroups } = require('../controllers/groupController');

router.get('/', auth, asyncHandler(listGroups));
router.post('/', auth, asyncHandler(createGroup));

module.exports = router;
