var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments')
/* GET users listing. */
router.post('/cars/:id/comments', commentsCtrl.create)

module.exports = router;
