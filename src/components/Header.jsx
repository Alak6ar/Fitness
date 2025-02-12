import React, { useState } from "react";
import logo from "../../public/images/logo.jpg";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        
        {/* Hamburger Menü */}
      

        {/* Navbar */}
        <div className={`navbar ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/pages">Pages</Link>
            </li>
            <li>
              <Link to="/elements">Elements</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              <Link to="/schedule">Schedule</Link>
            </li>
            <li>
              <Link to="/trainers">Trainers</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Sağ taraf */}
        <div className="right">
            <div className="icons">

          <div className="search">
            <IoSearchSharp />
          </div>
          <div className="basket">
            <SlBasket />
          </div>
            </div>
          <div className="hamburger-menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
