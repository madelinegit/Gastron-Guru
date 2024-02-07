const router = require('express').Router();

const homeRoutes = require('../controllers/home.js');
const userRoutes = require('../controllers/user.js');

router.use('/', homeRoutes);
router.use('/user', userRoutes);
router.use('/checkUser',userRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
