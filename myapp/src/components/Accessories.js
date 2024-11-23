import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom'; 
import './Accessories.css';

function Accessories({ searchQuery, addToFavorites }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const productList = [
      { id: 1, name: 'Sunglasses', price: 30, imageUrl: 'https://i.pinimg.com/736x/d9/50/5a/d9505ac3ffb9aa26b8ac77530373fe9d.jpg' },
      { id: 2, name: 'Watch', price: 75, imageUrl: 'https://i.pinimg.com/736x/f8/b4/9e/f8b49ece4f9b1180a9a08f4316da1a19.jpg' },
      { id: 3, name: 'Necklace', price: 50, imageUrl: 'https://i.pinimg.com/736x/90/a1/66/90a16649137269e38f1aba8be1b997b4.jpg' },
      { id: 4, name: 'Hat', price: 20, imageUrl: 'https://i.pinimg.com/736x/c4/a4/a0/c4a4a04b67b9149054c228cd08f4ca6e.jpg' },
      { id: 5, name: 'Bracelet', price: 25, imageUrl: 'https://i.pinimg.com/736x/e8/54/a6/e854a6f91653abbca2e1546fb4ed2120.jpg' },
      { id: 6, name: 'Earrings', price: 35, imageUrl: 'https://i.pinimg.com/736x/0d/27/42/0d2742df133c92bdb80f34b8aaf267fb.jpg' },
      { id: 7, name: 'Bag', price: 60, imageUrl: 'https://i.pinimg.com/736x/2b/b4/e1/2bb4e133843efa4af2033e4d23163e52.jpg' },
      { id: 8, name: 'Belt', price: 15, imageUrl: 'https://i.pinimg.com/736x/5a/2e/30/5a2e303514f9f785fd439e5c3aef97da.jpg' },
      { id: 9, name: 'Scarf', price: 18, imageUrl: 'https://i.pinimg.com/736x/d8/89/4e/d8894e101080deebf0d4d3f1a5e3a795.jpg' },
      { id: 10, name: 'Gloves', price: 20, imageUrl: 'https://i.pinimg.com/736x/0e/ba/91/0eba91775f1d494e408a5ffef1f73f14.jpg' },
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
    <div className="accessories">
      <h1>Welcome to Accessories Collection</h1>
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
                <span className="discount-badge">-20%</span>
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
          <p>No accessories found.</p>
        )}
      </div>
      <footer className="accessories-footer">
        <p>&copy; 2024 Accessories Store. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}

export default Accessories;




