import React from 'react';
import styles from './ContactForm.module.css';
import world from '../assets/world.png';

function ContactForm() {
  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactForm}>
        <form action="submit">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Enter your name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter your Email" />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Enter your Message"
            cols="10"
            rows="5"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className={styles.contactImg}>
        <img src={world} alt="" />
      </div>
    </div>
  );
}

export default ContactForm;
