import React from 'react';

function Product({ product, addToFavorites, addToCart }) {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={() => addToFavorites(product)}>❤️ Add to Favorites</button>
      <button onClick={() => addToCart(product)}>🛒 Add to Cart</button>
    </div>
  );
}

export default Product;
