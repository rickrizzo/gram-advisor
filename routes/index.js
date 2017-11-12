var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gram Advisor' });
});

router.get('/analyzer', function(req, res, next) {
  res.render('analyzer', { title: 'Gram Advisor' });
});

router.get('/results', function(req, res, next) {
  request('http://localhost:3000/api', function(err, response, body) {
    res.render('results', { title: 'Gram Advisor', data: JSON.parse(body) })
  });
});

module.exports = router;
