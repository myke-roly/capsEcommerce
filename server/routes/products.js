const router = require('express').Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.getProducts);

router.get('/:id', productsController.getProductById);

router.post('/', productsController.addProduct);

module.exports = router;