var request = require('request');

var url = 'http://api.tripadvisor.com/api/partner/2.0/map/';
var apikey = 'e6a40c16-b15a-4843-810b-354b961f722e';

module.exports = {
  getLocationDetails: function(req, res, next) {
    request(url + '42.7345996,-73.6892439?key=' + apikey, function (err, response, body) {
      if (err) { console.log(err); }
      res.json(JSON.parse(body));
    });
  }
}
