const express = require('express');
const router = express.Router();
const ramCtrl = require('../controllers/ram')


router.get('/new', ramCtrl.new);
router.get('/:id', ramCtrl.show);
router.post('/', ramCtrl.create)

module.exports = router; 