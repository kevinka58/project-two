const express = require('express');
const router = express.Router();
const chargerCtrl = require('../controllers/charger')


router.get('/new', chargerCtrl.new);
router.get('/:id', chargerCtrl.show);
router.post('/', chargerCtrl.create)

module.exports = router; 