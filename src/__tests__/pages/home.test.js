import React from "react";
import { render } from "@testing-library/react";
import { Home } from "../../pages";

jest.mock("react-router-dom");

test("renders the Home page", () => {
  const { getByText, getAllByText, getAllByPlaceholderText } = render(<Home />);

  expect(getByText("Unlimited movies, TV shows and more.")).toBeTruthy();
  expect(getByText("Watch anywhere. Cancel at any time.")).toBeTruthy();
  expect(
    getAllByText(
      "Ready to watch Netflix? Enter your email to create or restart your membership."
    )
  ).toBeTruthy();
  expect(getAllByText("Get started")).toBeTruthy();
  expect(getAllByPlaceholderText("Email address")).toBeTruthy();
});
