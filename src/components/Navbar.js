import React from "react";
import logo from "../images/Sfco_Logo2.png"; // Tell Webpack this JS file uses this image

const Navbar = () => {
  return (
    <div className="whiteBg">
      <div className="container">
        <div className="navbar__content">
          <div className="navbar__left">
            <img src={logo} alt="logo"/>
          </div>
          <ul className="navbar__right">
            <li>
              <a href="">Call us now !</a>
            </li>
            <li>
              <button className="navbar__btn">866-xxx-xxx-xxx </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
