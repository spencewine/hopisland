import React from 'react';

export default (props) => {
  console.log('props', props);
  return (
            <div className='container'>
                <div><span>Send Us A Message:</span></div>

                <form onSubmit={props.handleSubmit}>
                    <section>
                       <fieldset>
                          <div>
                            <input className='nameBox' name="firstName" type="text" value={props.firstName} onChange={props.handleInput} placeholder="First Name" />
                          </div>
                          <div>
                            <input className='nameBox' name="lastName" type="text" value={props.lastName} onChange={props.handleInput} placeholder="Last Name"/>
                          </div>
                          <div>
                            <input className='companyBox' name="companyName" type="text" value={props.companyName} onChange={props.handleInput} placeholder="Company Name"/>
                          </div>
                      </fieldset>
              <fieldset>
                  <div>
                    <input className='emailBox' name="emailAddress" type="text" value={props.emailAddress} onChange={props.handleInput} placeholder="Email" />
                  </div>
                  <div >
                    <input className='stateAndInquiry' name="inquiryType" type="text" value={props.inquiryType} onChange={props.handleInput} placeholder="Inquiry Type"/>
                  </div>
                  <div>
                      <select className='stateAndInquiry' placeholder="Location" name="location" type="dropdown" >
                          <option defaultValue="" id="locationOption">Location</option>
                          {
                              props.states.map((state, index) => {
                                return (
                                      <option key={index} value={state}>{state}</option>
                                );
                              })
                          }
                      </select>
                  </div>
                  <div>
                    <input className="phoneBox" name="phoneNumber" type="text" value={props.phoneNumber} onChange={props.handleInput} placeholder="Phone"/>
                  </div>
              </fieldset>
                  <div>
                    <textarea className="messageBox" name="message" type="text" value={props.message } onChange={props.handleInput} placeholder="Message"/>
                  </div>
                  <input type="submit" value="Submit" />
                  </section>
                </form>
            </div>
  );
};
