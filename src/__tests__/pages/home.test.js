import React from "react";
import { render } from "@testing-library/react";
import { Home } from "../../pages";

jest.mock("react-router-dom");

test("renders the Home page", () => {
  const { getByText, getByTestId } = render(<Home />);
});
