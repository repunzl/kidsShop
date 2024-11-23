import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom'; 
import './Shoes.css';

function Shoes({ searchQuery, addToFavorites }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const productList = [
      { id: 1, name: 'Running Shoes', price: 100, imageUrl: 'https://i.pinimg.com/736x/35/a0/91/35a09108dc9e7eb3dc021d67b788d8d6.jpg' },
      { id: 2, name: 'Boots', price: 150, imageUrl: 'https://i.pinimg.com/736x/b8/bb/7d/b8bb7d6fb82f2e363e41c79ab77891cf.jpg' },
      { id: 3, name: 'Sandals', price: 40, imageUrl: 'https://i.pinimg.com/736x/f2/cd/26/f2cd26afe3fba6393dd9dc5aa35a596d.jpg' },
      { id: 4, name: 'Sneakers', price: 80, imageUrl: 'https://i.pinimg.com/736x/49/01/d2/4901d2493ccbc077de14333273f1755b.jpg' },
      { id: 5, name: 'Loafers', price: 70, imageUrl: 'https://i.pinimg.com/736x/8d/e9/64/8de96430e0eda5bc17d26b6c24c7f615.jpg' },
      { id: 6, name: 'High Heels', price: 120, imageUrl: 'https://i.pinimg.com/736x/c0/4d/59/c04d59e809be982e28507d64287f7015.jpg' },
      { id: 7, name: 'Ankle Boots', price: 95, imageUrl: 'https://i.pinimg.com/736x/d1/c7/8e/d1c78e823fa26801fcc9f7b446b5d0fd.jpg' },
      { id: 8, name: 'Flip Flops', price: 25, imageUrl: 'https://i.pinimg.com/736x/3b/9a/8a/3b9a8aae961114c9c34ee03db1670f3a.jpg' },
      { id: 9, name: 'Chelsea Boots', price: 130, imageUrl: 'https://i.pinimg.com/736x/42/28/1e/42281e621ca40ac0caa073a5a78f1acd.jpg' },
      { id: 10, name: 'Platform Shoes', price: 110, imageUrl: 'https://i.pinimg.com/736x/86/4d/5e/864d5e50b2200976cfee6b6bccd8cd61.jpg' },
      { id: 11, name: 'Clogs', price: 50, imageUrl: 'https://i.pinimg.com/736x/2f/fa/77/2ffa77a047d2e9ee074e29bce5125c71.jpg' },
      { id: 12, name: 'Wedges', price: 90, imageUrl: 'https://i.pinimg.com/736x/23/63/b1/2363b1fe47954a0491e1a3d69be34813.jpg' },
      { id: 13, name: 'Espadrilles', price: 60, imageUrl: 'https://i.pinimg.com/736x/c6/79/22/c67922ced4ae68b40c3e10bfcaf6a215.jpg' },
      { id: 14, name: 'Moccasins', price: 85, imageUrl: 'https://i.pinimg.com/736x/2b/75/b5/2b75b53f0337ceb88b42b42474e4c03f.jpg' },
      { id: 15, name: 'Oxfords', price: 140, imageUrl: 'https://i.pinimg.com/736x/37/d2/cd/37d2cd44a6369dfe8e4b236d08e36248.jpg' },
    ];
    setProducts(productList);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const goToProductDetail = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="shoes">
      <h1>Welcome to Shoe Collection</h1>
      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product"
              onClick={() => goToProductDetail(product.id)} 
            >
              <div className="product-image-container">
                <img src={product.imageUrl} alt={product.name} />
                <span className="discount-badge">-50%</span>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <div className="icons">
                  <FaHeart
                    className="icon"
                    title="Add to favorites"
                    onClick={(e) => {
                      e.stopPropagation(); 
                      addToFavorites(product);
                      alert(`${product.name} has been added to your favorites!`);
                    }}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No shoes found.</p>
        )}
      </div>

      <footer className="shoes-footer">
        <p>&copy; 2024 Shoe Store. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}

export default Shoes;

