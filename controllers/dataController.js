var request = require('request');
var async = require('async');

var tripAdvisor = 'http://api.tripadvisor.com/api/partner/2.0/map/';
var tripAdvisorApiKey = 'e6a40c16-b15a-4843-810b-354b961f722e';

var instagram = 'https://api.instagram.com/v1/locations/search?';
var instagramLoc = 'https://api.instagram.com/v1/locations/'
var instagramApiKey = '551122949.48102ae.9028c7ba15204bfe8132930e1a1c4c53';

var flickr = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&per_page=3';
var flickrSize = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&photo_id=';
var flickrApiKey = '&api_key=56ac69e62e299eee5d8e615fcd8de386';

module.exports = {
  getFullData: async function () {
    let instagramList = await fetch('/')
  },
  getLocationData: function(req, res, next) {
    async.waterfall([
      function(callback) {
        request(instagram + 'lat=48.858844&lng=2.294351&access_token=' + instagramApiKey + '&count=50', function(err, response, body) {
          callback(null, JSON.parse(body).data);
        });
      },
      function(instagram, callback) {
        async.each(instagram, function(location, callback) {
          request(tripAdvisor + instagram[0].latitude + ',' + instagram[0].longitude + '?key=' + tripAdvisorApiKey, function(err, response, body) {
            body = JSON.parse(body).data[0];
            location.name = body.name;
            location.address = body.address;
            location.percent_recommended = body.percent_recommended;
            location.rating = body.rating;
            location.rating_image = body.rating_imag_url;
            location.cuisine = body.cuisine;
            location.location = body.location_string;
            location.latitude = body.latitude;
            location.longitude = body.longitude;
            location.url = body.web_url;
            location.price = body.price_level;
            location.num_reviews = body.num_reviews;
            location.category = body.category;
            //   callback(null, {
            //     'name': location.name,
            //     'address': location.address_obj,
            //     'percent_recommended': location.percent_recommended,
            //     'rating': location.rating,
            //     'rating_image': location.rating_image_url,
            //     'cuisine': location.cuisine,
            //     'location': location.location_string,
            //     'latitude': location.latitude,
            //     'longitude': location.longitude,
            //     'url': location.web_url,
            //     'price': location.price_level,
            //     'num_reviews': location.num_reviews,
            //     'category': location.category
            // });

          });
          // callback();
        }, function(err) {
          console.log('it is the last callback');
          callback(null, instagram);
        });
        request(tripAdvisor + instagram[0].latitude + ',' + instagram[0].longitude + '?key=' + tripAdvisorApiKey, function(err, response, body) {
          location = JSON.parse(body).data[0];
          callback(null, {
            'name': location.name,
            'address': location.address_obj,
            'percent_recommended': location.percent_recommended,
            'rating': location.rating,
            'rating_image': location.rating_image_url,
            'cuisine': location.cuisine,
            'location': location.location_string,
            'latitude': location.latitude,
            'longitude': location.longitude,
            'url': location.web_url,
            'price': location.price_level,
            'num_reviews': location.num_reviews,
            'category': location.category
          });
        });
      },
      function(tripAdvisor, callback) {
        request(flickr + '&text=' + tripAdvisor.name + '&lat=' + tripAdvisor.latitude + '&lon=' + tripAdvisor.longitude + flickrApiKey, function(err, response, body) {
          photos = /id="(.*)" owner/.exec(body);
          tripAdvisor.photo_id = photos[1];
          callback(null, tripAdvisor);
        });
      },
      function(flickr, callback) {
        request(flickrSize + flickr.photo_id + flickrApiKey, function(err, response, body) {
          photo_url = /<size label="Medium .* source="(.*)" url=".*" media="photo" \/>/.exec(body);
          flickr.photo_url = photo_url[1]
          callback(null, flickr);
        });
      }
    ], function(err, results) {
      res.send(results);
    });
  }
}
