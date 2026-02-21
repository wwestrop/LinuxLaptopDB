import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
        <span>■</span> LinuxLaptopDB
      </Link>
      <nav>
        <Link to="/">Browse</Link>
        <a href="#">Submit Report</a>
        <a href="#">Help</a>
      </nav>
    </header>
  );
};

export default Header;
