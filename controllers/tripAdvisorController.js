var request = require('request');
var fs = require('fs');

var tripAdvisor = 'http://api.tripadvisor.com/api/partner/2.0/map/';
var tripAdvisorApiKey = 'e6a40c16-b15a-4843-810b-354b961f722e';

module.exports = {
  getLocationDetails: function(req, res, next) {
    fs.readFile(__dirname + '/../data/40.7128&-75.0060.json', 'utf8', function(err, data) {
      if(err) { console.log(err); }
      var locations = [];
      var itemsProcessed = 0;
      var requests = JSON.parse(data).map((location) => {
        return new Promise((resolve) => {
          request(tripAdvisor + location.latitude + ',' + location.longitude + '?key=' + tripAdvisorApiKey, function(err, response, body) {
            body = JSON.parse(body);
            locations.push = ({
              'name': body.name,
              'address': body.address_obj,
              'percent_recommended': body.percent_recommended,
              'rating': body.rating,
              'rating_image': body.rating_image_url,
              'cuisine': body.cuisine,
              'location': body.location_string,
              'url': body.web_url,
              'price': body.price_level,
              'num_reviews': body.num_reviews,
              'category': body.category
              // 'image_id': photos[1],
              // 'image': photo_url[1]
            });
            console.log('COMPLETED', body.name);
          });
        });
      });
      Promise.all(requests).then(() => console.log('done'));
    });
  }
}
