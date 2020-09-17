DROP DATABASE checkout;
CREATE DATABASE checkout;

USE checkout;


CREATE table info(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) ,
  password VARCHAR(100) ,
  email VARCHAR(100) ,
  line1 VARCHAR(100) ,
  line2 VARCHAR(100) ,
  city VARCHAR(100) ,
  state VARCHAR(100) ,
  zipcode INT ,
  phone INT ,
  credit_card INT ,
  expiry_date VARCHAR(100) ,
  cvv INT ,
  billing_zip INT ,
  PRIMARY KEY(id)
)