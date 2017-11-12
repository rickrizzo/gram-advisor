var request = require('request');

var tripAdvisor = 'http://api.tripadvisor.com/api/partner/2.0/map/';
var tripAdvisorApiKey = 'e6a40c16-b15a-4843-810b-354b961f722e';

var instagram = 'https://api.instagram.com/v1/locations/search?';
var instagramLoc = 'https://api.instagram.com/v1/locations/'
var instagramApiKey = '551122949.48102ae.9028c7ba15204bfe8132930e1a1c4c53';

var flickr = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&per_page=3';
var flickrSize = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&photo_id=';
var flickrApiKey = '&api_key=56ac69e62e299eee5d8e615fcd8de386';

module.exports = {
  getLocationDetails: function(req, res, next) {
    request(url + '42.7345996,-73.6892439?key=' + apikey, function (err, response, body) {
      if (err) { console.log(err); }
      res.json(JSON.parse(body));
    });
  },
  getLocationsFull: function(req, res, next) {
    request(instagram + 'lat=40.7128&lng=-74.0060&access_token=' + instagramApiKey + '&count=50', function(err, response, body) {
      if (err) { console.log(err); }
      var stored = 0
      var total = JSON.parse(body).data.length;
      var locations = [];
      console.log('INSTAGRAM LIST')
      JSON.parse(body).data.forEach(function(elm, index, array) {
        request(tripAdvisor + elm.latitude + ',' + elm.longitude + '?key=' + tripAdvisorApiKey, function(err1, response, body) {
          console.log('TRIP ADVISOR DATA FOR', elm.name)
          if (err1) { console.log(err1); }
          location = JSON.parse(body).data[0];
          if(location.percent_recommended > 50) {
            console.log(elm.name, 'made the cut');
            temp = {
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
              'category': location.category,
              'image_id': '',
              'image': ''
            };
            request(flickr + '&text=' + elm.name + '&lat=' + elm.latitude + '&lon=' + elm.longitude + flickrApiKey, function(err2, response, body) {
              console.log('PHOTOS OF', elm.name);
              if (err2) { console.log(err2); }
              photos = /id="(.*)" owner/.exec(body);
              temp.image_id = photos[1];
              request(flickrSize + photos[1] + flickrApiKey, function(err3, response, body) {
                console.log('SIZES OF', elm.name);
                if (err3) { console.log(err3); }
                photo_url = /<size label="Medium .* source="(.*)" url=".*" media="photo" \/>/.exec(body);
                temp.image = photo_url[1];
                locations.push(temp);
                stored ++;
                if (stored == total) {
                  res.json(locations);
                }
              });
            });
          } else {
            total --;
          }
        });
      });
    });
  }
}
