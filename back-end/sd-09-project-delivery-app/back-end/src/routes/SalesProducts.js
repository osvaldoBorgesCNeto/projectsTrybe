const express = require('express');
const SalesProducts = require('../controllers/SalesProducts');
const token = require('../middlewares/auth/token');

const router = express.Router();

router.get('/', token, SalesProducts.getAll);

module.exports = router;
