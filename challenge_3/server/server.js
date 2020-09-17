
var express = require('express');
var app = express();
const port = 3000;

var model = require('./model.js');

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

//middleware
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/form1', function (req, res) {
  console.log(req.body);
  data = [req.body.name, req.body.email, req.body.password];

  model.postForm1(data, (err) => {
    if (err) {
      console.log(err);
      res.send();
    } else {
      res.send();
    }

  })

})

app.post('/form2', function (req, res) {
  console.log(req.body);
  data = [req.body.line1, req.body.line2, req.body.city, req.body.state, req.body.zipcode,  req.body.phone];

  model.postForm2(data, (err) => {
    if (err) {
      console.log(err);
      res.send();
    } else {
      res.send();
    }

  })

})

app.post('/form3', function (req, res) {
  console.log(req.body);
  data = [req.body.creditcard, req.body.expiry, req.body.cvv, req.body.billingzip, req.body.id];

  model.postForm3(data, (err) => {
    if (err) {
      console.log(err);
      res.send();
    } else {
      res.send();
    }

  })

})