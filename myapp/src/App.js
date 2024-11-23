import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Clothing from './components/Clothing';
import Accessories from './components/Accessories';
import Shoes from './components/Shoes';
import Favorites from './components/Favorites';
import Payment from './components/Payment';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import SignIn from './components/SignIn'; 

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const addToFavorites = (product) => {
    if (!favorites.some((fav) => fav.id === product.id)) {
      setFavorites((prev) => [...prev, product]);
    }
  };

  const removeFromFavorites = (productId) => {
    const updatedFavorites = favorites.filter((product) => product.id !== productId);
    setFavorites(updatedFavorites);
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  return (
    <>

      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="*"
          element={
            <>
              <Navbar onSearch={handleSearch} />
              <Routes>
                <Route
                  path="/"
                  element={<Home searchQuery={searchQuery} addToFavorites={addToFavorites} />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/category/clothing"
                  element={<Clothing searchQuery={searchQuery} addToFavorites={addToFavorites} />}
                />
                <Route
                  path="/category/accessories"
                  element={<Accessories searchQuery={searchQuery} addToFavorites={addToFavorites} />}
                />
                <Route
                  path="/category/shoes"
                  element={<Shoes searchQuery={searchQuery} addToFavorites={addToFavorites} />}
                />
                <Route
                  path="/favorites"
                  element={<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />}
                />
                <Route path="/payment" element={<Payment />} />
                <Route
                  path="/cart"
                  element={<Cart cart={cart} removeFromCart={removeFromCart} />}
                />
                <Route
                  path="/product/:productId"
                  element={<ProductDetail addToCart={addToCart} />}
                />
              </Routes>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;




