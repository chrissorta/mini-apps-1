var express = require('express');
var path = require('path');
var app = express();
var port = 3000;





app.listen(port, () =>  {
  console.log(`app is running at http:/localhost/${port}`);
});

app.use('/', express.static(path.join(__dirname, 'client/dist')))


