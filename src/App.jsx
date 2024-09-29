import React, { useEffect, useState, useCallback } from "react";
import ProductCard from "./components/ProductCard";
import ThumbnailCard from "./components/ThumbnailCard";
import Cart from "./components/Cart";
import CustomNavbar from "./components/Navbar";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { MyCarousel } from "./components/MyCarousel";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCartContent, setShowCartContent] = useState(false);
  const [notification, setNotification] = useState("");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("/data1.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.name === product.name
      );
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
    setTimeout(() => setNotification(""), 3000);
  };

  const handleClearCart = () => setCart([]);
  const handleRemoveItem = (product) =>
    setCart((prevCart) =>
      prevCart.filter((item) => item.name !== product.name)
    );

  const handleBuyCart = () => {
    if (cart.length > 0) {
      setCart([]);
      setNotification("Alışveriş tamamlandı. Siparişiniz hazırlanıyor...");
      setTimeout(() => setNotification(""), 5000);
    }
  };

  const handleIncreaseQuantity = (product) =>
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
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

  const handleMouseEnter = (product) => {
    setHoveredProduct(product);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  // Debouncing ile arama fonksiyonu
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleSearch = useCallback(
    debounce((query) => {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredProducts(filtered);
    }, 500),
    [products]
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <div>
      <div className="mb-5 g-5">
        <CustomNavbar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      </div>
      <div className="mt-5 g-5">
        <MyCarousel />
      </div>
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <div key={index} className="thumbnail-wrapper">
            {hoveredProduct === product ? (
              <div className="product-card-overlay" onMouseLeave={handleMouseLeave}>
                <ProductCard
                  {...product}
                  onAddToCart={handleAddToCart}
                />
              </div>
            ) : (
              <ThumbnailCard
                thumbnail={`image/${product.thumbnail}`}
                onHover={() => handleMouseEnter(product)}
                onMouseLeave={handleMouseLeave}
                dataName={product.name}
              />
            )}
          </div>
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
              onBuyCart={handleBuyCart}
              onRemoveItem={handleRemoveItem}
              onIncreaseQuantity={handleIncreaseQuantity}
              onDecreaseQuantity={handleDecreaseQuantity}
            />
            <button
              onClick={handleToggleCartContent}
              className="btn btn-warning cart-toggle-button "
            >
              <FaTimes />
            </button>
          </div>
        )}
      </div>

      {notification && <div className="notification">{notification}</div>}

      <footer className="footer me-3">
        <div className="footer-content">
          <p>İletişim: info@ornek.com | Telefon: +90 123 456 7890</p>
          <p>&copy; 2024 - Tüm Hakları Saklıdır.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
