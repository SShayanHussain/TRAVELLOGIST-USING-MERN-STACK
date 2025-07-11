import React from 'react';
import Topheader from './Topheader';
import Navbar from './Navbar';
import './HeaderWrapper.css';

function HeaderWrapper() {
  return (
    <div className="header-wrapper">
      <Topheader />
      <div className="navbar-container-wrapper">
        <Navbar />
      </div>
    </div>
  );
}

export default HeaderWrapper;
