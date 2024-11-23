import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa'; // Icône pour favoris
import { useNavigate } from 'react-router-dom'; 
import './Clothing.css';

function Clothing({ searchQuery, addToFavorites }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const productList = [
      { id: 1, name: 'Baby Shirt', price: 15, imageUrl: 'https://i.pinimg.com/736x/a9/00/53/a90053cccdfb03d0ca5ac9a20a243502.jpg' },
      { id: 2, name: 'Baby Pants', price: 12, imageUrl: 'https://i.pinimg.com/736x/b3/17/b8/b317b847dcb904a1ed62fd97063c8a59.jpg' },
      { id: 3, name: 'Baby Shoes', price: 20, imageUrl: 'https://i.pinimg.com/736x/69/2d/93/692d93ee6daec150ecdb831bdd305e25.jpg' },
      { id: 4, name: 'Baby Hat', price: 10, imageUrl: 'https://i.pinimg.com/736x/e8/a1/77/e8a1770ac24cf7dfde5b7f0938994d79.jpg' },
      { id: 5, name: 'Baby Socks', price: 5, imageUrl: 'https://i.pinimg.com/736x/ab/53/f0/ab53f0bf0c0692b0e231ae7ae9fa98c9.jpg' },
      { id: 6, name: 'Baby Jacket', price: 30, imageUrl: 'https://i.pinimg.com/736x/be/22/ec/be22eccdac3b995e9f4a3ee1869fb887.jpg' },
      { id: 7, name: 'Baby Blanket', price: 25, imageUrl: 'https://i.pinimg.com/736x/31/8e/54/318e54436c9ac2262650c8f47780a024.jpg' },
      { id: 8, name: 'Baby Booties', price: 18, imageUrl: 'https://i.pinimg.com/736x/dd/3f/f6/dd3ff6f66ce7ed9ade71e9603716b86e.jpg' },
      { id: 9, name: 'Baby Bib', price: 8, imageUrl: 'https://i.pinimg.com/736x/89/5d/6a/895d6af35f0e162fcf4a7825998f3856.jpg' },
      { id: 10, name: 'Baby Romper', price: 22, imageUrl: 'https://i.pinimg.com/736x/cf/16/0b/cf160b548a1be0cefd23d7b8fcb71d44.jpg' },
      { id: 11, name: 'Baby Pajamas', price: 18, imageUrl: 'https://i.pinimg.com/736x/bd/86/32/bd8632cb2c80e217057aacc203143478.jpg' },
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
    <div className="clothing">
      <h1>Welcome to Clothing Collection</h1>
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
                <span className="discount-badge">-30%</span>
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
          <p>No clothing found.</p>
        )}
      </div>
    </div>
  );
}

export default Clothing;




