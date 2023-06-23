import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
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
        <div onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
