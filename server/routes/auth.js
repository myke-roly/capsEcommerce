const router = require('express').Router();
const authController = require('../controllers/authController');
const auth = require('../middlewares/auth');

router.post('/', authController.authUser);

router.get('/', auth, authController.getUser);

module.exports = router;
