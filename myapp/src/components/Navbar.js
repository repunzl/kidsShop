import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaUser, FaShoppingCart, FaHome, FaSearch, FaTachometerAlt, FaTh } from 'react-icons/fa'; 
import './Navbar.css';
import { FaBabyCarriage } from 'react-icons/fa';

function Navbar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showCategories, setShowCategories] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div>
      <div className="top-banner">
        <div className="banner-left">
          LIVRAISON GRATUITE dès 400 dhs d'achat partout au <span className="highlight">Maroc</span> 📞 0632885419
        </div>
        <div className="banner-right">
          <a href="mailto:contact@casakids.ma" className="contact-link">contact@casakids.ma</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </div>

      <nav className="navbar">
        <div className="navbar-logo">
          <FaBabyCarriage size={50} color="#FFB6C1" /> 
        </div>

        <ul className="navbar-links">
          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaUser /> About
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <FaHeart /> Favorites
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingCart /> Cart
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <FaTachometerAlt /> Dashboard
            </Link>
          </li>

          {/* Section des catégories */}
          <li className="navbar-categories">
            <span onClick={toggleCategories} aria-label="Toggle categories">
              <FaTh /> Categories
            </span>
            {showCategories && (
              <ul className="categories-dropdown">
                <li><Link to="/category/clothing">Clothing</Link></li>
                <li><Link to="/category/accessories">Accessories</Link></li>
                <li><Link to="/category/shoes">Shoes</Link></li>
              </ul>
            )}
          </li>

          <ul className="navbar-links">
  <li>
    <Link to="/signin">Sign In</Link>
  </li>
</ul>

        </ul>

        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <FaSearch className="icon" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
