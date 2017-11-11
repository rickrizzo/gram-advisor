var ig = require('instagram-node').instagram();

ig.use({ access_token: '551122949.48102ae.9028c7ba15204bfe8132930e1a1c4c53' });

module.exports = {
  getTopLocations: function(req, res, next) {
    ig.location_search({ lat: 42.7284, lng: -73.6918 }, function(err, result, remaining, limit) {
      if(err) { console.log(err); }
      res.json(JSON.parse(result));
    });
  }
}
