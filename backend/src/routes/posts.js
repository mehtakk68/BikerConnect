const router = require('express').Router();
const asyncHandler = require('../middleware/asyncHandler');
const auth = require('../middleware/auth');
const { createPost, getFeed } = require('../controllers/postController');

router.get('/feed', auth, asyncHandler(getFeed));
router.post('/', auth, asyncHandler(createPost));

module.exports = router;
