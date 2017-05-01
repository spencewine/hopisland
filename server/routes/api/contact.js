const express = require('express');
const Router = express.Router;
const router = new Router();
const {Contact} = require('../../models');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth   : {
    user: 'hopislandhops@gmail.com',
    pass: '2Paxton313'
  }
});


router.get('/', (req, res, next) => {
  return Contact.findAll()
    .then(contact => res.send(contact))
    .catch(next);
});

router.post('/', (req, res, next) => {
  const {firstName, lastName, companyName, emailAddress, inquiryType, location, phoneNumber, message} = req.body;

  const contactObj = {
    firstName, lastName, companyName, emailAddress, inquiryType, location, phoneNumber

  };

  const mailOptions = {
    from   : '' + firstName + ' ' + lastName + '<' + emailAddress + '>',
    to     : 'hopislandhops@gmail.com', // list of receivers
    subject: 'Hello, Hop Island,' + 'this is' + ' ' + firstName + ' ' + lastName + ' from ' + location,
    html   : '<div><b>user info: </b></div><div><b>name:</b> ' + firstName + ' ' + lastName +
    '</div><div><b> company:</b> ' + companyName + '</div><div><b> inquiry type:</b> ' + inquiryType + '</div><div><b>location:</b> ' + location + '</div><div><b> phone number:</b> ' + phoneNumber + '</div><div><b>user message:</b> ' + message + '</div>',

  };

  return Contact.create({
    firstName,
    lastName,
    companyName,
    emailAddress,
    inquiryType,
    location,
    phoneNumber,
    message
  })
    .then((response) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
      });

      res.send(response);
    })
    .catch(err => console.log(err.message));


});

module.exports = router;
