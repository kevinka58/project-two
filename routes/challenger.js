const express = require('express');
const router = express.Router();
const challengerCtrl = require('../controllers/challenger')

router.get('/', challengerCtrl.index);
router.get('/new', challengerCtrl.new);
router.get('/:id', challengerCtrl.show);
router.post('/', challengerCtrl.create)

module.exports = router; 