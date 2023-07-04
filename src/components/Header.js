import React from "react";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <a href="/">
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/a9176967613739.5b3f984f5e0e9.jpg"
        alt="FOOD VILLA"
        className="logo"
      />
    </a>
  );
};
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
