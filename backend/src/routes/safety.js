const router = require('express').Router();
const asyncHandler = require('../middleware/asyncHandler');
const auth = require('../middleware/auth');
const { triggerSOS, resolveSOS, listOpenAlerts } = require('../controllers/safetyController');

router.get('/sos', auth, asyncHandler(listOpenAlerts));
router.post('/sos', auth, asyncHandler(triggerSOS));
router.patch('/sos/:id/resolve', auth, asyncHandler(resolveSOS));

module.exports = router;
