// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1 className="title">Call a friend</h1>
        <p className="sub-title">your friendly contact app</p>
        <p className="separator">••••••••••••••••••••••••</p>
      </div>
    </>
  );
};

export default Header;
