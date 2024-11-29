import "./navbar.css";
import { useState } from "react";
import React from "react";
import {
  FaSearch,
  FaUserAlt,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa"; // Import icons from react-icons
// Removed useNavigate from react-router-dom

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Setting the natural state of the hamburger menu to be false

  const handleMenuToggle = () => {
    console.log(isMenuOpen);
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-left">
          {/* Hamburger menu */}
          <button className="menu-button" onClick={handleMenuToggle}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`off-screen-menu ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/ToysPage">Toys</a>
              </li>
              <li>
                <a href="/SkincarePage">Skincare</a>
              </li>
              <li>
                <a href="/SupplementsPage">Supplements</a>
              </li>
              <li>
                <a href="/ContactUsPage">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <ul className="navbar-links">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#journal">Journal</a>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          {/* Search Bar */}
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="search-icon">
              <FaSearch />
            </button>
          </div>

          {/* User Icon */}
          <button className="icon-button">
            <a href="/login">
              {" "}
              {/* Replaced navigate with a regular link */}
              <FaUserAlt />
            </a>
          </button>

          {/* Cart Icon */}
          <button className="icon-button">
            <FaShoppingCart />
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
