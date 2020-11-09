import React from "react";
import { render } from "@testing-library/react";
import Home from "../components/Home";

test("displays welcome message to customers", () => {
  const { getByText } = render(<Home />);
  expect(getByText(`Welcome to Cyril's Burgershoppe!`)).toBeVisible();
});
