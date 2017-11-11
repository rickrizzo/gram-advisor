var express = require('express');
var router = express.Router();

var ig = require('instagram-node').instagram();

ig.use({ access_token: '551122949.48102ae.9028c7ba15204bfe8132930e1a1c4c53' });

/* GET home page. */
router.get('/', function(req, res, next) {
  // ig.location_search({ lat: 42.7284, lng: -73.6918 }, function(err, result, remaining, limit) {
  //   console.log(result);
  // });
  res.render('index', { title: 'Gram Advisor' });
});

module.exports = router;
