import React from 'react';
import "./Contact.css";
import image from "../../assets/contact.png";

const Contact = () => {
  return (
    <section id="Contact">
      <div className="leftContact">
        <img src={image} alt="Contact Visual" />
      </div>
      <div className="rightContact">
        <form action="https://formspree.io/f/meolwqll" autoComplete="off" method="POST">
          <h1 className='contact-heading'>Contact Us</h1>
          <input type="text" placeholder='Name' name='Username' required />
          <input type="email" placeholder='Email Id' name='Email' required />
          <textarea name="Message" id="textarea" placeholder='Message me' required />
          <button type="submit" id='btn'>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
