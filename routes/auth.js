var express = require('express');
var router = express.Router();

var ig = require('instagram-node').instagram();

ig.use({ client_id: '48102ae117b14da6b0056b30fdaa2118',
         client_secret: 'ac2a2019041b4f11bdd6176ce1e1e0a9' });

var redirect_uri = 'http://localhost:3000/auth/handle_auth';

/* GET home page. */
router.get('/authorize_user', function(req, res, next) {
  res.redirect(ig.get_authorization_url(redirect_uri, {
    scope: ['public_content'],
    state: 'a state'
  }));
});

router.get('/handle_auth', function(req, res, next) {
  ig.authorize_user(req.query.code, redirect_uri, function(err, result) {
    if (err) {
      console.log(err.body);
      res.send("Didn't work");
    } else {
      console.log('Yay! Access token is ' + result.access_token);
      res.send('You made it!!');
    }
  });
});

module.exports = router;
