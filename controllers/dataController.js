var request = require('request');

var tripAdvisor = 'http://api.tripadvisor.com/api/partner/2.0/map/';
var tripAdvisorApiKey = 'e6a40c16-b15a-4843-810b-354b961f722e';

var instagram = 'https://api.instagram.com/v1/locations/search?';
var instagramLoc = 'https://api.instagram.com/v1/locations/'
var instagramApiKey = '551122949.48102ae.9028c7ba15204bfe8132930e1a1c4c53';

module.exports = {
  getLocationDetails: function(req, res, next) {
    request(url + '42.7345996,-73.6892439?key=' + apikey, function (err, response, body) {
      if (err) { console.log(err); }
      res.json(JSON.parse(body));
    });
  },
  getLocationsFull: function(req, res, next) {
    request(instagram + 'lat=40.7128&lng=-74.0060&access_token=' + instagramApiKey, function(err, response, body) {
      var stored = 0
      var locations = [];
      JSON.parse(body).data.forEach(function(elm, index, array) {
        request(tripAdvisor + elm.latitude + ',' + elm.longitude + '?key=' + tripAdvisorApiKey, function(err, response, body) {
          location = JSON.parse(body).data[0];
          request(instagramLoc + elm.id + '/media/recent?access_token=' + instagramApiKey, function(err, response, body) {
            console.log(JSON.parse(body).data);
          });
          if(location.percent_recommended > 70) {
            locations.push({
              'name': location.name,
              'address': location.address_obj,
              'percent_recommended': location.percent_recommended,
              'rating': location.rating,
              'rating_image': location.rating_image_url,
              'cuisine': location.cuisine,
              'location': location.location_string,
              'url': location.web_url,
              'price': location.price_level,
              'num_reviews': location.num_reviews,
              'category': location.category
            });
          }
          stored ++;
          if (stored == array.length) {
            res.json(locations);
          }
        });
      });
    });
  }
}
