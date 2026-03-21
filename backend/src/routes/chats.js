const router = require('express').Router();
const asyncHandler = require('../middleware/asyncHandler');
const auth = require('../middleware/auth');
const { getChatMessages } = require('../controllers/chatController');

router.get('/:chatId/messages', auth, asyncHandler(getChatMessages));

module.exports = router;
