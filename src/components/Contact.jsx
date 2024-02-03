import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Contact Us</h1>
        <p className="subtitle">We'd love to hear from you!</p>
      </header>

      <section className="contact-info">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-description">Feel free to reach out to us with any questions or concerns.</p>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      <section className="contact-details">
        <h2 className="section-title">Our Contact Details</h2>
        <p className="contact-item"><strong>Phone:</strong> (123) 456-7890</p>
        <p className="contact-item"><strong>Email:</strong> info@pamelaspamperedpets.com</p>
        <p className="contact-item"><strong>Address:</strong> 123 Pet Lane, Petville, PA 12345</p>
      </section>
    </div>
  );
};

export default ContactPage;
