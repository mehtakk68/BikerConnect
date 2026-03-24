const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
router.use('/rides', require('./rides'));
router.use('/chats', require('./chats'));
router.use('/groups', require('./groups'));
router.use('/events', require('./events'));
router.use('/routes', require('./routes'));
router.use('/marketplace', require('./marketplace'));
router.use('/safety', require('./safety'));
router.use('/admin', require('./admin'));

module.exports = router;
