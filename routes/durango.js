const express = require('express');
const router = express.Router();
const durangoCtrl = require('../controllers/durango')


router.get('/new', durangoCtrl.new);
router.get('/:id', durangoCtrl.show);
router.post('/', durangoCtrl.create)

module.exports = router; 