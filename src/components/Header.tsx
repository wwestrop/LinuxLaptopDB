import React from 'react';
import { Link } from 'react-router';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <Link to="/" className={styles.logo} style={{ textDecoration: 'none', color: 'inherit' }}>
        <span>■</span> LinuxLaptopDB
      </Link>
      <nav>
        <Link to="/">Browse</Link>
        <Link to="/submit">Submit Report</Link>
        <a href="#">Help</a>
      </nav>
    </header>
  );
};

export default Header;
