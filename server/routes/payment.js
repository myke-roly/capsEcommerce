const router = require('express').Router();
const paymentConrtroller = require('../controllers/paymentController');

router.post('/', paymentConrtroller.sendPayment) ;

module.exports = router;