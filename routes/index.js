var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/chi-tiet-sp-:id', function(req, res, next){
  res.render('chi-tiet-sp', {title :'CHi tiet sp', idsp: req.params.id });
});
module.exports = router;
