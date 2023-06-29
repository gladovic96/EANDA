import React from 'react';
import ContactForm from './ContactForm';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.boxContact}>
        <h1>Contact US</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
