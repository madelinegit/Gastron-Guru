const router = require('express').Router();

const homeRoutes = require('./api/home-routes.js');
const userRoutes = require('./api/user-routes.js');

router.use('/', homeRoutes);
router.use('/user', userRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;