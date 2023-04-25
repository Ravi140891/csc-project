import React, { useState, useEffect, useRef } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleButtonClick = (event) => {
    event.stopPropagation();
    setShow(!show);
  };

  const handleListItemClick = () => {
    setShow(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="icon">
          <img src="./images/csc-logo.png" alt="" />
        </div>
        <h3>Chai Samosa Cafe</h3>
      </div>
      <div className="menu" ref={menuRef}>
        <button onClick={handleButtonClick}>
          <i className="fa fa-bars"></i>
        </button>
        <ul className={`${show ? "toggle" : ""}`}>
          <li>
            <NavLink to="/" onClick={handleListItemClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" onClick={handleListItemClick}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" onClick={handleListItemClick}>
              About Us
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/contactus" onClick={handleListItemClick}>
              Contact Us
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
