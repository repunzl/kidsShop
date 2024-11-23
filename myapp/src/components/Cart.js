import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const navigate = useNavigate();

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const goToPayment = () => {
    navigate('/payment');
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.imageUrl} alt={product.name} className="cart-item-image" />
              <div className="product-details">
                <p className="product-name">{product.name}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Price: ${product.price}</p>
                <button onClick={() => removeFromCart(product.id)} className="remove-button">Remove</button>
                <button onClick={() => goToPayment()} className="pay-now">Pay Now</button>
              </div>
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
}

export default Cart;
