import React, { useState } from "react";
import { OrderItem } from "./types";

export interface CartContextType {
  cartItems: OrderItem[];
  addItem: (item: OrderItem) => void;
  removeItem: (index: number) => void;
}

export const CartContext = React.createContext<CartContextType>({
  cartItems: [],
  addItem: () => null,
  removeItem: () => null,
});

const CartProvider: React.FC = ({ children }) => {
  const [cartItems, setCartItems] = useState<OrderItem[]>([]);

  const addItem = (item: OrderItem) => {
    setCartItems([...cartItems, item]);
  };

  const removeItem = (index: number) => {
    console.log(cartItems[index]);
    setCartItems([...cartItems.slice(0, index), ...cartItems.slice(index + 1)]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
