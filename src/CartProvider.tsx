import React, { useState } from "react";
import { OrderItem } from "./types";

export interface CartContextType {
  cartItems: OrderItem[];
  addItem: (item: OrderItem) => void;
}

export const CartContext = React.createContext<CartContextType>({
  cartItems: [],
  addItem: () => null,
});

const CartProvider: React.FC = ({ children }) => {
  const [cartItems, setCartItems] = useState<OrderItem[]>([]);

  const addItem = (item: OrderItem) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
