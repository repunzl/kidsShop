import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import { FaHome } from 'react-icons/fa'; 
import { Modal } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false); 
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []); 
  const navigate = useNavigate(); 

  useEffect(() => {
 
    const products = [
      { id: 1, name: 'Baby Shirt', price: 15, imageUrl: 'https://i.pinimg.com/736x/a9/00/53/a90053cccdfb03d0ca5ac9a20a243502.jpg' },
      { id: 2, name: 'Baby Pants', price: 12, imageUrl: 'https://i.pinimg.com/736x/b3/17/b8/b317b847dcb904a1ed62fd97063c8a59.jpg' },
      { id: 3, name: 'Baby Shoes', price: 20, imageUrl: 'https://i.pinimg.com/736x/69/2d/93/692d93ee6daec150ecdb831bdd305e25.jpg' },
      { id: 4, name: 'Baby Hat', price: 10, imageUrl: 'https://i.pinimg.com/736x/e8/a1/77/e8a1770ac24cf7dfde5b7f0938994d79.jpg' },
      { id: 5, name: 'Baby Socks', price: 5, imageUrl: 'https://i.pinimg.com/736x/ab/53/f0/ab53f0bf0c0692b0e231ae7ae9fa98c9.jpg' },
      { id: 6, name: 'Baby Jacket', price: 30, imageUrl: 'https://i.pinimg.com/736x/be/22/ec/be22eccdac3b995e9f4a3ee1869fb887.jpg' },
      { id: 7, name: 'Baby Blanket', price: 25, imageUrl: 'https://i.pinimg.com/736x/31/8e/54/318e54436c9ac2262650c8f47780a024.jpg' },
      { id: 8, name: 'Baby Booties', price: 18, imageUrl: 'https://i.pinimg.com/736x/dd/3f/f6/dd3ff6f66ce7ed9ade71e9603716b86e.jpg' },
      { id: 9, name: 'Baby Bib', price: 8, imageUrl: 'https://i.pinimg.com/736x/01/23/45/0123456789abcdef.jpg' },
      { id: 10, name: 'Baby Romper', price: 22, imageUrl: 'https://i.pinimg.com/736x/12/34/56/123456789abcdef0.jpg' },
      { id: 11, name: 'Baby Pajamas', price: 18, imageUrl: 'https://i.pinimg.com/736x/ab/cd/ef/abcdef0123456789.jpg' },
      { id: 12, name: 'Baby Mittens', price: 6, imageUrl: 'https://i.pinimg.com/736x/98/76/54/9876543210abcdef.jpg' },
      { id: 13, name: 'Baby Swaddle', price: 28, imageUrl: 'https://i.pinimg.com/736x/76/54/32/76543210abcdef12.jpg' },
      { id: 14, name: 'Baby Stroller Blanket', price: 35, imageUrl: 'https://i.pinimg.com/736x/54/32/10/543210abcdef1234.jpg' },
      { id: 15, name: 'Baby Towel', price: 12, imageUrl: 'https://i.pinimg.com/736x/32/10/98/321098abcdef5678.jpg' },
      { id: 16, name: 'Baby Mittens Set', price: 10, imageUrl: 'https://i.pinimg.com/736x/4e/53/12/4e5312ccde8546b34ac43281efc0f937.jpg' },
      { id: 17, name: 'Baby Booties Set', price: 15, imageUrl: 'https://i.pinimg.com/736x/99/44/67/9944674cb9a7ecb290b14984b0f983fa.jpg' },
      { id: 18, name: 'Baby Swaddle Wrap', price: 20, imageUrl: 'https://i.pinimg.com/736x/f2/2b/36/f22b36ba0b545d91d20c55d067de59a6.jpg' },
      { id: 19, name: 'Baby Sleeping Bag', price: 40, imageUrl: 'https://i.pinimg.com/736x/af/ea/69/afea69b8fe6f7f19a43f824703c303d2.jpg' },
      { id: 20, name: 'Baby Car Seat Cover', price: 25, imageUrl: 'https://i.pinimg.com/736x/6f/9b/2d/6f9b2d3f776e09a0507c7d3b4d72ed68.jpg' },
    ];

    const selectedProduct = products.find((product) => product.id === parseInt(productId));
    setProduct(selectedProduct);
  }, [productId]);

  const goToHome = () => {
    navigate('/');
  };

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(prevQuantity => prevQuantity - 1);
  };

  const addToCart = () => {
    const newProduct = { ...product, quantity }; 
    const updatedCart = [...cart, newProduct];

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">

      <div className="product-header">
        <img src={product.imageUrl} alt={product.name} className="product-image" />
        <button className="return-home" onClick={goToHome}>
          <FaHome /> Retour à l'accueil
        </button>
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>

        <div className="quantity-control">
          <button onClick={decrementQuantity}>-</button>
          <span>Quantity: {quantity}</span>
          <button onClick={incrementQuantity}>+</button>
        </div>

        <div className="form">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Product Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The product has been added to your cart successfully!
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={closeModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProductDetail;
