import React, { useContext } from "react";
import { CartContext } from "../CartProvider";

const Cart: React.FC = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <React.Fragment>
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div>
          {item.item} {item.size} {item.price}
        </div>
      ))}
    </React.Fragment>
  );
};

export default Cart;
