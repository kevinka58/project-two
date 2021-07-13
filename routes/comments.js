var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments')
/* GET users listing. */
router.post('/cars/:id/comments', commentsCtrl.create)
router.post('/cars/:id/comments/new', commentsCtrl.comment)
module.exports = router;
