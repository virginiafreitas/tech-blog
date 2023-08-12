const router = require('express').Router();
const apiRoutes = require('./api/index');
const homeRoutes = require('./render/index');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;
