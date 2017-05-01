import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createContact} from '../actions/contact';
import {states} from '../util/states';
import Contact from '../components/Contact.jsx';

class ContactContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName   : '',
      lastName    : '',
      companyName : '',
      emailAddress: '',
      inquiryType : '',
      location    : '',
      phoneNumber : '',
      message     : ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('STATE', this.state);
    const contactObj = {
      firstName   : this.state.firstName,
      lastName    : this.state.lastName,
      companyName : this.state.companyName,
      emailAddress: this.state.emailAddress,
      inquiryType : this.state.inquiryType,
      location    : this.state.location,
      phoneNumber : this.state.phoneNumber,
      message     : this.state.message
    };

    this.props.createContact(contactObj);

    this.setState({
      firstName   : '',
      lastName    : '',
      companyName : '',
      emailAddress: '',
      inquiryType : '',
      location    : '',
      phoneNumber : '',
      message     : ''
    });


  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }


  render() {
    return (
    <div>
        <Contact
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            companyName={this.state.companyName}
            emailAddress={this.state.emailAddress}
            inquiryType={this.state.inquiryType}
            location={this.state.location}
            phoneNumber={this.state.phoneNumber}
            message={this.state.message}
            states={states}
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            createContact={this.props.createContact}/>
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    thankYouMessage: state.contactReducer.thankYouMessage
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createContact: (contactObj => {
      dispatch(createContact(contactObj));
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);
