var request = require('request');
var fs = require('fs');

var instagram = 'https://api.instagram.com/v1/locations/search?';
var instagramLoc = 'https://api.instagram.com/v1/locations/';
var instagramApiKey = '551122949.48102ae.9028c7ba15204bfe8132930e1a1c4c53';

module.exports = {
  getTopLocations: function(req, res, next) {
    request(instagram + 'lat=40.7128&lng=-75.0060&access_token=' + instagramApiKey + '&count=50', function(err, response, body) {
        if (err) { console.log(err); }
        fs.writeFile(__dirname + '/../data/40.7128&-75.0060.json', JSON.stringify(JSON.parse(body).data), 'utf8', function(error) {
          if (error) { console.log(error); }
          res.send(JSON.parse(body).data);
        });
    });
  }
}
