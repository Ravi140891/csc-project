import React from "react";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="menu-page">
      <div className="menu-card">
        <img src="./images/front.jpeg" alt="front-menu" />
      </div>
      <div className="menu-card">
        <img src="./images/back.jpeg" alt="back-menu" />
      </div>
    </div>
  );
};

export default Menu;
