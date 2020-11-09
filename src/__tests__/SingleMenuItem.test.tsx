import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { CartContext } from "../CartProvider";
import SingleMenuItem from "../components/SingleMenuItem";
import { MenuItem } from "../types";

const testItem: MenuItem = {
  item: "Burger",
  options: [
    {
      size: "regular",
      price: 3,
    },
  ],
};

test("displays information about menu item", () => {
  const { getByText } = render(
    <CartContext.Provider
      value={{ cartItems: [], addItem: () => null, removeItem: () => null }}
    >
      <SingleMenuItem item={testItem} />
    </CartContext.Provider>
  );
  expect(getByText("Burger")).toBeVisible();
  expect(getByText("Size Options")).toBeVisible();
  expect(getByText("regular, $3")).toBeVisible();
});

test("Leverages context when user clicks 'Add to Cart' button", async () => {
  const mockAddItem = jest.fn();
  const { getByText } = render(
    <CartContext.Provider
      value={{ cartItems: [], addItem: mockAddItem, removeItem: () => null }}
    >
      <SingleMenuItem item={testItem} />
    </CartContext.Provider>
  );
  const addToCartButton = getByText("Add to Cart");
  await fireEvent.click(addToCartButton);

  expect(mockAddItem).toHaveBeenCalled();
});
