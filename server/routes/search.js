const router = require('express').Router();
const { check } = require('express-validator');
const searchController = require('../controllers/searchController');

router.get('/', searchController.search);

module.exports = router;
