import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutText}>
      <h1>About Us</h1>
      <p>
        Welcome to <span className={styles.aboutEandaColor}> EANDA</span>, your
        trusted source for the finest steam cleaners. We specialize in providing
        innovative cleaning solutions that harness the power of steam to
        revolutionize your cleaning experience. At{' '}
        <span className={styles.aboutEandaColor}> EANDA</span>, we understand
        the importance of maintaining a clean and hygienic environment. That's
        why we offer our flagship steam cleaner, specifically designed to tackle
        a wide range of cleaning tasks effectively and efficiently. Our steam
        cleaner utilizes the latest technology, delivering powerful steam that
        penetrates deep into surfaces, eliminating dirt, grime, and bacteria
        without the need for harsh chemicals. It is a versatile solution that
        can be used on multiple surfaces such as floors, carpets, tiles,
        upholstery, and more. We take pride in providing exceptional customer
        service, ensuring that you find the perfect steam cleaner to suit your
        needs. Our knowledgeable team is dedicated to assisting you in making an
        informed decision and guiding you through the selection process.
        Experience the convenience and effectiveness of steam cleaning with
        <span className={styles.aboutEandaColor}> EANDA</span>. Trust us to
        provide a reliable, durable, and user-friendly steam cleaner that
        delivers outstanding results, making your cleaning tasks a breeze.
      </p>
    </div>
  );
};

export default About;
