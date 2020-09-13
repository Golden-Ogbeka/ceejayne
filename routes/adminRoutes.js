var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/adminLogin', function(req, res, next) {
  res.render('pages/adminLogin');
});

module.exports = router;
