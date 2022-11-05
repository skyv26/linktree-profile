import React from 'react';
import './Contact.css';

const Contact = props => {
  return (
    <div className='contact-form--container'>
      <div className="contact-form--info">
        <h1 className="contact-form--info_title">Contact Me</h1>
        <p className="contact-form--info_desc">Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      <form className='form'>
        <label htmlFor="first_name" className="form-label">
          First Name
          <input type="text" id='first_name' placeholder="Enter your first name" className="form-input" />
          <p className="input-msg first_name">Please enter a message</p>
        </label>
      </form>
    </div>
  );
};

export default Contact;