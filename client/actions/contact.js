import axios from 'axios';
import {SEND_THANK_YOU} from '../constants.js';

export const sendThankYou = () => {
  return ({
    type   : SEND_THANK_YOU,
    message: 'Thank You!'
  });

};


export const createContact = (contactObj) => {
  return dispatch => {
    axios.post('api/contact', {
      firstName   : contactObj.firstName,
      lastName    : contactObj.lastName,
      companyName : contactObj.companyName,
      emailAddress: contactObj.emailAddress,
      inquiryType : contactObj.inquiryType,
      location    : contactObj.location,
      phoneNumber : contactObj.phoneNumber,
      message     : contactObj.message
    })
      .then(response => dispatch(sendThankYou()))
      .catch(err => console.log(err));
  };

};
