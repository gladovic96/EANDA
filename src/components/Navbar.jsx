import styles from './Navbar.module.css';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className={styles.navBar}>
        <div className={styles.container}>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <h1>
              EANDA
              <br />
              <span>Steam Machines</span>
            </h1>
            <li>Our Product</li>
            <li>Contact Us</li>
          </ul>
          <div onClick={handleNav} className={styles.dropDownMenu}>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? `${styles.fixed} ${styles.left0} ${styles.hFull} ${styles.top0} ${styles.w50} ${styles.borderR} ${styles.borderRGray900} ${styles.bg000300} ${styles.easeInOut} ${styles.duration500}`
            : `${styles.fixed} ${styles.leftNegative100}`
        }
      >
        <ul className={styles.dropDownNav}>
          <li>Home</li>
          <li>About Us</li>
          <li>Our Product</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
