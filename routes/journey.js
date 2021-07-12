const express = require('express');
const router = express.Router();
const journeyCtrl = require('../controllers/journey')


router.get('/new', journeyCtrl.new);
router.get('/:id', journeyCtrl.show);
router.post('/', journeyCtrl.create)

module.exports = router; 