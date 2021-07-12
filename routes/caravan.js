const express = require('express');
const router = express.Router();
const caravanCtrl = require('../controllers/caravan')


router.get('/new', caravanCtrl.new);
router.get('/:id', caravanCtrl.show);
router.post('/', caravanCtrl.create)

module.exports = router; 