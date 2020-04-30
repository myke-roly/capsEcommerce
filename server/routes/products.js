const router = require('express').Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.getProducts);

router.post('/', productsController.addProduct);

module.exports = router;