import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaHome, FaTrashAlt } from 'react-icons/fa'; 
import './Favorites.css';

function Favorites({ favorites, removeFromFavorites }) {
  const navigate = useNavigate();

  return (
    <div className="favorites">
      <h1>Your Favorites</h1>
      {favorites.length > 0 ? (
        <div className="favorites-list">
          {favorites.map((product) => (
            <div key={product.id} className="favorite-item">
              <img src={product.imageUrl} alt={product.name} />
              <div className="favorite-info">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
              <div className="favorite-actions">
                <button
                  className="remove-btn"
                  onClick={() => removeFromFavorites(product.id)} 
                >
                  <FaTrashAlt /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products in your favorites yet.</p>
      )}
      <button className="return-home-btn" onClick={() => navigate('/')}>
        <FaHome /> Return to Home
      </button>
    </div>
  );
}

export default Favorites;




