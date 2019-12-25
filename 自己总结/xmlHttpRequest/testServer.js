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
  console.log(req.body)
  // console.log("workorders");
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Content-Type', 'application/json');
  res.cookie('zhang','eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMDAwMDAwMDU1IiwibmFtZSI6IuWRqOelpSIsImV4cCI6MTU3NjAzNDA0NH0.mFmriz4YKaiR8qTeGZxiqKjZJ9lViIKpcQvm8ZEcV6OT0R7S7Ay6N7HYYau0CnV3pwDnHGIFlHGgnIYdm9iA0jlipIqnQHQfYaRXKr_8RnkvQsUGGE8zZ5uxl7uxo-ji8pvW4l2BtpwrN-R_07s22Rkxs72PuG1WKhnLe1L0aEc.dev',{ expires: new Date(Date.now() + 100000), httpOnly: true });
  res.send(
    {
      'workOrders':"ddd"
    })
});



app.post('/images', function (req, res, next) {
  // console.log(req.body);
    res.send({ "respond": "successfully" });
});

 
  var server = app.listen(8081, function () {
 
    var host = server.address().address
    var port = server.address().port
 
    console.log("应用实例，访问地址为localhost:" ,port)
 
  })

