import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa'; // Alışveriş sepeti simgesi

const Cart = ({ cartItems, onClearCart, onBuyCart, onRemoveItem, onIncreaseQuantity, onDecreaseQuantity }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Card className="cart-card fixed-cart mt-5 mb-5 ">
      <Card.Body>
        <Card.Title className='cart-title mt-3 text-center'>
          <FaShoppingCart size={24} /> Sepet
        </Card.Title>
        {cartItems.length === 0 ? (
          <p>Sepetinizde ürün yok.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item ms-0 ">
                  <div className="cart-item-details">
                    <span className='cart-item-name fs-5 d-block mb-3'>{item.name} <br/> {item.quantity} adet - ${(item.price * item.quantity).toFixed(2)}</span>
                    
                    <div className="button-group ">
                      <Button variant="warning" className='m-1' size='sm' onClick={() => onDecreaseQuantity(item)}>-</Button>
                      <span className="quantity-display">{item.quantity}</span>
                      <Button variant="warning" className='m-1' size='sm' onClick={() => onIncreaseQuantity(item)}>+</Button>
                      <Button className='remove-button m-1' size='sm' variant="danger" onClick={() => onRemoveItem(item)}>Kaldır</Button>
                    </div>
                  </div>
                </li> 
              ))}
            </ul>
            <h3>Toplam: ${totalPrice.toFixed(2)}</h3>
            <Container className='d-flex justify-content-between align-items-center my-5 mx-2 gap-3 fixed-cart'>
            <Button  variant="danger"  onClick={onClearCart}>Tümünü Kaldır</Button>
            <Button  variant="success"  onClick={onBuyCart}>Satin Al</Button>
            </Container>
         
          
         
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default Cart;
