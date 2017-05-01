
'use strict';

const Sequelize = require('sequelize');
const db = require('./db');


const Contact = db.define('contact', {
  firstName   : Sequelize.STRING,
  lastName    : Sequelize.STRING,
  companyName : Sequelize.STRING,
  emailAddress: Sequelize.STRING,
  inquiryType : Sequelize.STRING,
  location    : Sequelize.STRING,
  phoneNumber : Sequelize.STRING,
  message     : Sequelize.TEXT
},
  {

  });

module.exports = Contact;
