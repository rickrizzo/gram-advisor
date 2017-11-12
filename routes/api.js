var express = require('express');
var router = express.Router();

var instagramCtrl = require('../controllers/instagramController.js');
var tripAdvisorCtrl = require('../controllers/tripAdvisorController.js');

router.get('/getTopLocations', function(req, res, next) {
  instagramCtrl.getTopLocations(req, res, next);
});

router.get('/getLocationDetails', function(req, res, next) {
  tripAdvisorCtrl.getLocationDetails(req, res, next);
});

module.exports = router;
