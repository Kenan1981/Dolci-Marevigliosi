import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import CustomNavbar from './components/Navbar';
import { FaShoppingCart } from 'react-icons/fa';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCartContent, setShowCartContent] = useState(false);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    fetch('/data1.json')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.name === product.name);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevCart, product];
      }
    });

    setNotification(`${product.name} sepete ${product.quantity} adet eklendi.`);
    setTimeout(() => setNotification(''), 3000); // 3 saniye sonra bildirimi temizle
  };

  const handleClearCart = () => setCart([]);
  const handleRemoveItem = (product) =>
    setCart((prevCart) => prevCart.filter((item) => item.name !== product.name));

  const handleIncreaseQuantity = (product) =>
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  const handleDecreaseQuantity = (product) =>
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === product.name && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

  const handleToggleCartContent = () => {
    setShowCartContent((prevShowCartContent) => !prevShowCartContent);
  };

  return (
    <div>
      <CustomNavbar />
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} onAddToCart={handleAddToCart} />
        ))}
      </div>

      <div className="cart-container">
        <div className="cart-icon-container">
          <FaShoppingCart
            size={80}
            className="cart-icon border border-3 rounded-circle p-2 center bg-info cursor-pointer text-dark"
            onClick={handleToggleCartContent}
          />
        </div>

        {showCartContent && (
          <div className="fixed-cart">
            <Cart
              cartItems={cart}
              onClearCart={handleClearCart}
              onRemoveItem={handleRemoveItem}
              onIncreaseQuantity={handleIncreaseQuantity}
              onDecreaseQuantity={handleDecreaseQuantity}
            />
            <button onClick={handleToggleCartContent} className="btn btn-primary cart-toggle-button">
              Sepeti Gizle
            </button>
          </div>
        )}
      </div>

      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}

      {/* Footer */}
      <footer className="footer rounded-5 me-3">
        <div className="footer-content">
          <p>İletişim: info@ornek.com | Telefon: +90 123 456 7890</p>
          <p>&copy; 2024 - Tüm Hakları Saklıdır.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
