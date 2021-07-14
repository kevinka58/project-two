var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments')
/* GET users listing. */
router.post('/cars/:id/comments', commentsCtrl.create)
router.delete('/cars/:id/:index', commentsCtrl.delete)
router.get('/cars/:id/:index/edit', commentsCtrl.edit)
router.put('/cars/:id/:index', commentsCtrl.update)
module.exports = router;
