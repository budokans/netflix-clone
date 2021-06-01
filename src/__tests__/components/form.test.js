import React from "react";
import { render } from "@testing-library/react";
import { Form } from "../../components";

jest.mock("react-router-dom");

const form = (
  <Form>
    <Form.Title>Sign in Now</Form.Title>

    <Form.Base onSubmit={() => {}} method="POST">
      <Form.Input
        type="email"
        placeholder="Email address"
        onChange={() => {}}
        required
      />

      <Form.Input
        type="password"
        placeholder="Password"
        onChange={() => {}}
        required
      />
      <Form.Submit disabled type="submit">
        Sign in
      </Form.Submit>

      <Form.Text>
        New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
      </Form.Text>
      <Form.TextSmall>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
      </Form.TextSmall>
    </Form.Base>
  </Form>
);

describe("<Form />", () => {
  it("renders the <Form /> with populated data", () => {
    const { container, getByText, getByPlaceholderText } = render(form);

    expect(getByText("Sign in Now")).toBeTruthy();
    expect(getByPlaceholderText("Email address")).toBeTruthy();
    expect(getByPlaceholderText("Password")).toBeTruthy();
    expect(getByText("Sign in")).toBeTruthy();
    expect(getByText("Sign in").disabled).toBeTruthy();

    expect(
      getByText(
        "This page is protected by Google reCAPTCHA to ensure you're not a bot."
      )
    ).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <Form /> with an error", () => {
    const { container, getByText, queryByText } = render(
      <Form>
        <Form.Error>
          The email address you provided is already assigned to an account.
        </Form.Error>
        <Form.Submit type="submit">Sign in</Form.Submit>
      </Form>
    );

    expect(
      getByText(
        "The email address you provided is already assigned to an account."
      )
    ).toBeTruthy();
    expect(queryByText("Sign in").disabled).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
