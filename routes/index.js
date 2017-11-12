var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gram Advisor' });
});

router.get('/analyzer', function(req, res, next) {
  res.render('analyzer', { title: 'Gram Advisor' });
});

router.get('/results', function(req, res, next) {
  
});

module.exports = router;
