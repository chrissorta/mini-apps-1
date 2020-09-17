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
 },

 postForm2: function(dataArray, callback) {

  // let query = "INSERT INTO info(line1, line2, city, state, zipcode) values(?,?,?,?,?)"
  let query = `UPDATE info SET line1 = "${dataArray[0]}",line2 = "${dataArray[1]}", city = "${dataArray[2]}", state = "${dataArray[3]}", zipcode = ${dataArray[4]}, phone = ${dataArray[5]}  WHERE id = (select last_insert_id())`

  // let query = `INSERT into info LastInsertedRow(line1, line2, city, state, zipcode, phone) values(?,?,?,?,?,?)`
  db.query(query, dataArray, (err,results) => {
    if(err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
 },

 postForm3: function(dataArray, callback) {

  // let query = "INSERT INTO info(line1, line2, city, state, zipcode) values(?,?,?,?,?)"
  let query = `UPDATE info SET credit_card = "${dataArray[0]}", expiry_date = "${dataArray[1]}", cvv = "${dataArray[2]}", billing_zip = "${dataArray[3]}" WHERE id = (select last_insert_id())`
  db.query(query, dataArray, (err,results) => {
    if(err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
 }


}