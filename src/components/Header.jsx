import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerCover}>
      <div className={styles.container}>
        <div className={styles.headerText}>
          <h1>EANDA</h1>
          <h3>Best cleaning solutions</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
