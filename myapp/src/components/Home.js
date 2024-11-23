import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom'; 
import './Home.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


function Home({ searchQuery, addToFavorites }) {
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
      { id: 12, name: 'Baby Mittens', price: 6, imageUrl: 'https://i.pinimg.com/736x/c3/d0/b3/c3d0b3db1f011b1a8341fb3bba2b5f41.jpg' },
      { id: 13, name: 'Baby Swaddle', price: 28, imageUrl: 'https://i.pinimg.com/736x/d4/45/6d/d4456d52d015750d74506dc6979e99f7.jpg' },
      { id: 14, name: 'Baby Stroller Blanket', price: 35, imageUrl: 'https://i.pinimg.com/736x/fa/65/07/fa65074d2e991bc816bfef1e64137318.jpg' },
      { id: 15, name: 'Baby Towel', price: 12, imageUrl: 'https://i.pinimg.com/736x/eb/8e/c9/eb8ec9f3796f6bac4cea90b1d65bdabb.jpg' },
      { id: 16, name: 'Baby Mittens Set', price: 10, imageUrl: 'https://i.pinimg.com/736x/85/1e/8b/851e8b30afe851aa04fc3c475e9759d3.jpg' },
      { id: 17, name: 'Baby Booties Set', price: 15, imageUrl: 'https://i.pinimg.com/736x/d0/52/95/d05295161e1ad8e0f99719d264cce723.jpg' },
      { id: 18, name: 'Baby Swaddle Wrap', price: 20, imageUrl: 'https://i.pinimg.com/736x/c6/bd/2c/c6bd2c5135fe7bd22aac39266f469a77.jpg' },
      { id: 19, name: 'Baby Sleeping Bag', price: 40, imageUrl: 'https://i.pinimg.com/736x/62/f1/85/62f185d933b4a3b32320447e307eba4d.jpg' },
      { id: 20, name: 'Baby Car Seat Cover', price: 25, imageUrl: 'https://i.pinimg.com/736x/45/16/88/45168875699601f25de5e1056e5749f3.jpg' },
      { id: 21, name: 'Baby Diaper Bag', price: 55, imageUrl: 'https://i.pinimg.com/736x/29/89/09/2989092626d76ea1fb50247883bf882a.jpg' },
      { id: 22, name: 'Baby Carrier', price: 65, imageUrl: 'https://i.pinimg.com/736x/3f/9d/bf/3f9dbf125c6cbb572d13da02a3220f92.jpg' },
      { id: 23, name: 'Baby Hat Set', price: 15, imageUrl: 'https://i.pinimg.com/736x/ef/d5/63/efd563c964e12471a633b49f19eb741a.jpg' },
      { id: 24, name: 'Baby Leggings', price: 12, imageUrl: 'https://i.pinimg.com/736x/09/e2/ac/09e2ac2d21fdb3894b12868b63ef9680.jpg' },
      { id: 25, name: 'Baby Gloves', price: 8, imageUrl: 'https://i.pinimg.com/736x/8b/49/bd/8b49bd9932b5cdd7d028d25e9b0d90fb.jpg' },
      { id: 26, name: 'Baby Blanket Set', price: 30, imageUrl: 'https://i.pinimg.com/736x/db/33/a2/db33a249fdbc5ac811e86801f3dcb6e7.jpg' },
      { id: 27, name: 'Baby Winter Coat', price: 50, imageUrl: 'https://i.pinimg.com/736x/d6/70/ad/d670ad608ef7f3b5f47c60a314e998b3.jpg' },
      { id: 28, name: 'Baby Dress', price: 28, imageUrl: 'https://i.pinimg.com/736x/7a/b7/a1/7ab7a1769a1c1d0d1279787c07381c76.jpg' },
      { id: 29, name: 'Baby Swaddle Blanket', price: 30, imageUrl: 'https://i.pinimg.com/736x/71/8a/47/718a472e1cad5f017729a7ae883ad2cc.jpg' },
      { id: 30, name: 'Baby Shower Set', price: 40, imageUrl: 'https://i.pinimg.com/736x/09/75/be/0975be09215fc2d271d892eda56ceab0.jpg' },
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
    <div className="home">
      <h1>Welcome to Baby Fashion</h1>
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
          <p>No products found.</p>
        )}
      </div>
      <div className="footer">
  <div className="footer-content">
    <div className="footer-links">
      <a href="/about">About Us</a>
      <a href="/contact">Contact</a>
      <a href="/privacy">Privacy Policy</a>
    </div>
    <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
    <div className="footer-note">
      © {new Date().getFullYear()} Baby Fashion. All rights reserved.
    </div>
  </div>
</div>

    </div>
  );
}

export default Home;













