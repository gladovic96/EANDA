import React from 'react';
import styles from './Product.module.css';
import evo from '../assets/productPhoto.jpg';
import waterTank from '../assets/waterTank.png';
import elcImg from '../assets/ecImg.png';
import cable from '../assets/cable.png';
import wheels from '../assets/wheels.png';
import injection from '../assets/injection.png';
import detergente from '../assets/detergente.png';
import tehnicalData from '../assets/Tehnical-data.jpg';
import evoFeatures from '../assets/productPhotoFeatures.jpg';

const Product = () => {
  return (
    <div>
      <h1 className={styles.productTitle}>Our Product</h1>
      <div className={styles.productWrapper}>
        <div className={styles.productName}>
          <h2>Evo 12345</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
            veniam quam? Aspernatur recusandae necessitatibus esse iure, quod,
            saepe, exercitationem qui sequi ipsam officiis consequatur facilis!
            Cupiditate accusantium cum mollitia quibusdam.
          </p>
        </div>
        <div className={styles.productImg}>
          <img src={evo} alt="#"></img>
        </div>
        <div className={styles.tehnicalData}></div>
        <div className={styles.productImgDesc}>
          <img src={evoFeatures} alt="#"></img>
        </div>
        <div className={styles.productDesc}>
          <h2>Evo Description</h2>
          <ul>
            <li>
              <img src={waterTank} alt="#"></img>Water tank 3 l
            </li>
            <li>
              <img src={elcImg} alt="#"></img>Electric console - EI
            </li>
            <li>
              <img src={cable} alt="#"></img>Electric plug Shuko
            </li>
            <li>
              <img src={wheels} alt="#"></img>Anti-scratch rubber wheels
            </li>
            <li>
              <img src={injection} alt="#"></img>Detergent injection
            </li>
            <li>
              <img src={detergente} alt="#"></img>Detergent tank - 1 l
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
