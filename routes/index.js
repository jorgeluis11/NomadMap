var express = require('express');
var router = express.Router();
var fs = require('fs');
var requestify = require('requestify');
var nomadList = undefined;


requestify.get('https://nomadlist.com/api/v2/list/cities')
.then(function(response) {
    // Get the response body

    nomadList = response.getBody().result;
});

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('./dist/index.html',function (err, data){
    console.log(data);
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
  // res.render('index', { title: 'Express' });
});

router.get('/NomadList', function(req, res, next) {
  res.json(nomadList);
  // https.get("https://nomadlist.com/api/v2/list/cities/amsterdam-netherlands", function(resp){
  //   resp.on('data', function(chunk){
  //     console.log(resp.json());
  //     // res.json(resp);
  //     });
  //   }).on("error", function(e){
  //   console.log("Got error: " + e.message);
  // });

  // fetch("https://nomadlist.com/api/v2/list/cities/amsterdam-netherlands",{ method: 'GET'})
  // .then(function(response) {
  //   console.log("Response",response.text());
  //   req.on(
  //           "data",
  //           function( chunk ){
  //
  //             res.write(chunk);
  //             res.end();
  //           }
  //       );
  // });
});




module.exports = router;
