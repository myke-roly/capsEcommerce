const router = require('express').Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator');

router.post(
  '/',
  [
    check('email', 'Ingrese un email valido').isEmail(),
    check('password', 'La contrase;a debe ser matoy a 8 caracteres').isLength({ min: 8 }),
  ],
  authController.authUser
);

module.exports = router;
