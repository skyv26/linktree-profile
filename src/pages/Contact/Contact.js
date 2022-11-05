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
        
        <div className="full-name--container">
          <label htmlFor="first_name" className="form-label">
            First Name
            <input type="text" id="first_name" placeholder="Enter your first name" className="form-input" />
            <p className="input-msg first_name">Please enter your first name</p>
          </label>

          <label htmlFor="last_name" className="form-label">
            Last Name
            <input type="text" id="last_name" placeholder="Enter your last name" className="form-input" />
            <p className="input-msg last_name">Please enter your last name</p>
          </label>
        </div>

        <label htmlFor="email" className="form-label">
          Email
          <input type="text" id="email" placeholder="yourname@email.com" className="form-input" />
          <p className="input-msg email">Please enter your email</p>
        </label>

        <label htmlFor="message" className="form-label">
          Message
          <textarea id="message" placeholder="Send me a message and I'll reply you as soon as possible..." rows="4" className="form-input" />
          <p className="input-msg message">Please enter a message</p>
        </label>

        <label htmlFor="check" className="form-label checkbox-label">
          <input type="checkbox" id="check" className="form-input form-checkbox--input" />
          You agree to providing your data to Aakash who may contact you.
        </label>

        <button className="form-btn" id="btn__submit" type="submit">Send message</button>
      </form>
    </div>
  );
};

export default Contact;