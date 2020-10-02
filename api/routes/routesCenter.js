var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('hello back-end');
});

router.get('/api1', function(req, res, next) {
    res.send('respond with a resource (api1)');
  });

module.exports = router;
