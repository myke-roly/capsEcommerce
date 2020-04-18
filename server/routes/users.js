const router = require('express').Router();
const usersController = require('../controllers/usersController');
const { check } = require('express-validator');
const auth = require('../middlewares/auth');

router.post(
  '/',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('lastName', 'El apellido el obligatorio').not().isEmpty(),
    check('email', 'Ingrese un email valido').isEmail(),
    check('password', 'La contrase;a debe ser mayor a 8 caracteres').isLength({ min: 8 })
  ],
  usersController.createUser,
);

router.get('/', auth, usersController.getUser);

module.exports = router;
