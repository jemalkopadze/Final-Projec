import React, { useEffect, useState } from 'react'
import { Sidebar } from 'components'
import { getCart } from 'global/api/endpoint'
import { CartProductsCard } from 'components/cards';

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {/* <CartProductsCard /> */}
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
