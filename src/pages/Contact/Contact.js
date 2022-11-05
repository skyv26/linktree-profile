import React, { useRef } from 'react';
import './Contact.css';

const Contact = props => {
  const fName = useRef();
  const lName = useRef();
  const email = useRef();
  const msg = useRef();
  const check = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const allMsg = document.querySelectorAll('.input-msg');

    allMsg.forEach((elem) => {
      elem.classList.remove('visible');
    });

    fName.current.classList.remove('danger');
    lName.current.classList.remove('danger');
    email.current.classList.remove('danger');
    msg.current.classList.remove('danger');
    check.current.classList.remove('danger');
    

    if(fName.current.value.length === 0) {
      fName.current.classList.add('danger');
      document.querySelector(`.${fName.current.id}`).classList.add('visible');
      return;
    }

    if(lName.current.value.length === 0) {
      lName.current.classList.add('danger');
      document.querySelector(`.${lName.current.id}`).classList.add('visible');
      return;
    }

    if(email.current.value.length === 0) {
      email.current.classList.add('danger');
      document.querySelector(`.${email.current.id}`).classList.add('visible');
      return;
    }

    if(msg.current.value.length === 0) {
      msg.current.classList.add('danger');
      document.querySelector(`.${msg.current.id}`).classList.add('visible');
      return;
    }

    if(check.current.checked === false) {
      check.current.classList.add('danger');
      return;
    }
    alert('Thank you for submitting Form. Soon you will hear back..');
    fName.current.value = '';
    lName.current.value = '';
    email.current.value = '';
    msg.current.value = '';
    check.current.checked = false;
  };

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
            <input type="text" id="first_name" placeholder="Enter your first name" className="form-input" ref={fName} />
            <p className="input-msg first_name">Please enter your first name</p>
          </label>

          <label htmlFor="last_name" className="form-label">
            Last Name
            <input ref={lName} type="text" id="last_name" placeholder="Enter your last name" className="form-input" />
            <p className="input-msg last_name">Please enter your last name</p>
          </label>
        </div>

        <label htmlFor="email" className="form-label">
          Email
          <input ref={email} type="text" id="email" placeholder="yourname@email.com" className="form-input" />
          <p className="input-msg email">Please enter your email</p>
        </label>

        <label htmlFor="message" className="form-label">
          Message
          <textarea ref={msg} id="message" placeholder="Send me a message and I'll reply you as soon as possible..." rows="4" className="form-input" />
          <p className="input-msg message">Please enter a message</p>
        </label>

        <label htmlFor="check" className="form-label checkbox-label">
          <input ref={check} type="checkbox" id="check" className="form-input form-checkbox--input" />
          You agree to providing your data to Aakash who may contact you.
        </label>

        <button className="form-btn" id="btn__submit" type="submit" onClick={(e) => submitHandler(e)}>Send message</button>
      </form>
    </div>
  );
};

export default Contact;