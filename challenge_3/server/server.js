
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

app.post('/form1', function(req, res) {
    console.log(req.body);
    data = [req.body.name, req.body.email, req.body.password];

    model.postForm1(data, (err) => {
      if(err) {
        console.log(err);
        res.send();
      } else {
        res.send();
      }

    })

})