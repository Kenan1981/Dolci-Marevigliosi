import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ image, name, category, price, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    onAddToCart({ name, price, quantity });
  };

  return (
    <Card className="product-card">
      {category && <span className="discount-badge">{category}</span>}
      <Card.Img variant="top" src={`/image/${image}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>${price.toFixed(2)}</Card.Text>
        <div className="quantity-controls d-flex justify-content-between">
          <Button onClick={handleDecrease}>-</Button>
          <span>{quantity}</span>
          <Button onClick={handleIncrease}>+</Button>
        </div>
        <Button onClick={handleAddToCart} className="mt-2" variant="primary">Sepete Ekle</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;


