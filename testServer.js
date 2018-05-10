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
          { "orderid": 1, "saleOrder": "SO1", "material": "A", "quantity": 100, "workQuantity": 110, "startTime": "2018-02-07T16:20:00+0800", "endTime": "2018-03-13 16:20:00+08" },
          { "orderid": 2, "saleOrder": "SO1", "material": "B", "quantity": 200, "workQuantity": 210, "startTime": "2018-03-13T16:20:00+0800", "endTime": "2018-03-27 16:20:00+08" },
          { "orderid": 3, "saleOrder": "SO2", "material": "C", "quantity": 150, "workQuantity": 160, "startTime": "2018-03-27T16:20:00+0800", "endTime": "2018-04-27 16:20:00+08" },
          { "orderid": 3, "saleOrder": "SO2", "material": "C", "quantity": 150, "workQuantity": 160, "startTime": "2018-03-27T16:20:00+0800", "endTime": "2018-04-27 16:20:00+08" },
          { "orderid": 3, "saleOrder": "SO2", "material": "C", "quantity": 150, "workQuantity": 160, "startTime": "2018-03-27T16:20:00+0800", "endTime": "2018-04-27 16:20:00+08" },
          { "orderid": 1, "saleOrder": "SO1", "material": "A", "quantity": 100, "workQuantity": 110, "startTime": "2018-02-07T16:20:00+0800", "endTime": "2018-03-13 16:20:00+08" },
          { "orderid": 2, "saleOrder": "SO1", "material": "B", "quantity": 200, "workQuantity": 210, "startTime": "2018-03-13T16:20:00+0800", "endTime": "2018-03-27 16:20:00+08" },
          { "orderid": 3, "saleOrder": "SO2", "material": "C", "quantity": 150, "workQuantity": 160, "startTime": "2018-03-27T16:20:00+0800", "endTime": "2018-04-27 16:20:00+08" },
          { "orderid": 3, "saleOrder": "SO2", "material": "C", "quantity": 150, "workQuantity": 160, "startTime": "2018-03-27T16:20:00+0800", "endTime": "2018-04-27 16:20:00+08" },
          { "orderid": 3, "saleOrder": "SO2", "material": "C", "quantity": 150, "workQuantity": 160, "startTime": "2018-03-27T16:20:00+0800", "endTime": "2018-04-27 16:20:00+08" },
          { "orderid": 1, "saleOrder": "SO1", "material": "A", "quantity": 100, "workQuantity": 110, "startTime": "2018-02-07T16:20:00+0800", "endTime": "2018-03-13 16:20:00+08" }
        ]
    })
});


app.get('/products', function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(
    {
      "products":[
          {
              "ID":1,
              "name":"A",
              "imageURL":"/images/A.png"
          },
          {
              "ID":2,
              "name":"B",
              "imageURL":"/images/B.png"
          },
          {
            "ID":3,
            "name":"C",
            "imageURL":"/images/C.png"
          },
          {
            "ID":4,
            "name":"D",
            "imageURL":"/images/D.png"
        },
        {
          "ID":5,
          "name":"A",
          "imageURL":"/images/A.png"
        },
        {
            "ID":6,
            "name":"B",
            "imageURL":"/images/B.png"
        }
      ]
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

