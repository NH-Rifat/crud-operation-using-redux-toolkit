import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav_section}>
      <ul className={styles.nav_ul}>
        <li className={styles.item}>
          <Link to='/'>Home</Link>
        </li>
        <li className={styles.item}>
          <Link to='/showProduct'>Show Product</Link>
        </li>
        <li className={styles.item}>
          <Link to='/addProduct'>Add Product</Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
