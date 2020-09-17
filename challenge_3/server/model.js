var db = require('./database.js');


module.exports = {

 postForm1: function(dataArray, callback) {

  let query = "INSERT INTO info(name, email, password) values(?,?,?)"
  db.query(query, dataArray, (err,results) => {
    if(err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
 }

}