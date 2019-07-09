var express = require('express');
var app = express();
var bodyParser = require('body-parser');
 var Router = require('express');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  next();
});
 
app.get('/workorders', function (req, res) {
  // console.log("workorders");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(
    {
      "workOrders":
        [
          { "orderid": 1}
        ]
    })
});


app.get('/products', function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(
    {
      "products":[{"ID":1,}]
    }
  )
});


app.post('/images', function (req, res, next) {
  // console.log(req.body);
    res.send({ "respond": "successfully" });
});

 
  var server = app.listen(8081, function () {
 
    var host = server.address().address
    var port = server.address().port
 
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
  })

