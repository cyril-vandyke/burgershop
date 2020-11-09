import React from "react";
import { render } from "@testing-library/react";
import Cart from "../components/Cart";
import { CartContext } from "../CartProvider";
import { OrderItem } from "../types";

const testCart: OrderItem[] = [
  {
    item: "Fries",
    size: "large",
    price: 1.99,
  },
];

const warningMessage = `Your cart is currently empty! Add some items on the menu and come back`;

test("displays warning message when user has an empty cart", () => {
  const { getByText } = render(
    <CartContext.Provider
      value={{ cartItems: [], addItem: () => null, removeItem: () => null }}
    >
      <Cart />
    </CartContext.Provider>
  );
  expect(getByText(warningMessage)).toBeVisible();
});

test("warning message does not appear when user has items in cart", () => {
  const { queryByText } = render(
    <CartContext.Provider
      value={{
        cartItems: testCart,
        addItem: () => null,
        removeItem: () => null,
      }}
    >
      <Cart />
    </CartContext.Provider>
  );
  expect(queryByText(warningMessage)).toBeNull();
});

test("displays order total when user has items in cart", () => {
  const { getByText } = render(
    <CartContext.Provider
      value={{
        cartItems: testCart,
        addItem: () => null,
        removeItem: () => null,
      }}
    >
      <Cart />
    </CartContext.Provider>
  );
  expect(getByText(`Order Total: $1.99`)).toBeVisible();
});
