import React, { useState } from "react";
import logo from "../../public/images/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { VscSignIn } from "react-icons/vsc";
import { SlBasket } from "react-icons/sl";
import Hamburger from "hamburger-react";
import { VscAccount } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectCurrentToken } from "../features/auth/authSlice";
import { useLogoutMutation } from "../services/mainApi";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const token = useSelector(selectCurrentToken);
  console.log(token);

  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dropdownOpen, setDropdonwOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdonwOpen((prev) => !prev);
  };

  const logoutHandler = async () => {
    try {
      const res = await logout();
      dispatch(logOut());
      navigate("auth/login");
    } catch (err) {
      console.log(err);
    }
  };

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
        <div className="right relative">
          <div className="icons">
            {token ? (
              <div className="group account">
                <div className="">
                  <button type="button" onClick={toggleDropdown}>
                    <VscAccount />
                  </button>
                </div>
                <div className={`absolute right-24 top-6 w-40 p-3 px-5 rounded-md bg-white ${dropdownOpen ? "block" : "hidden"}`}>
                  <ul>
                    <li>
                      <div className="text-base py-2">
                        <Link to="profile">Profile</Link>
                      </div>
                    </li>
                    <li>
                      <button type="button" onClick={logoutHandler} className="w-full text-left text-base py-2">
                        Log out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="signin">
                <Link to="auth/login">
                  <VscSignIn />
                </Link>
              </div>
            )}

            <div className="search">
              <IoSearchSharp />
            </div>
            <div className="basket">
              <Link to='shopping-cart'>
              <SlBasket />
              </Link>
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
