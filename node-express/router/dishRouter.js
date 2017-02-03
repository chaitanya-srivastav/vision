var express = require('express');
router = express.Router();

router.route("/")
.get(function(req,res,next){
  // res.setHeader('Content-Type', 'application/json');
  res.json({"method": "GET"});
})
.post(function(req,res,next){
  // res.writeHead(200, {'Content-Type': 'application/json'});
  res.json({"method": "POST"});
});
module.exports = router;
