var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {

  if( req.body.code == null)
    return res.json({ok:false});
    
  try {
    request({
        url: "https://github.com/login/oauth/access_token",
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        json: {
          client_id: ".|.",
          client_secret: ".|.",
          code: req.body.code
        }
    }, function (error, response, body) {
      return res.json(body);
    });
  } catch(e){
    console.log(e)
    return res.json(e);
  }

});


module.exports = router;