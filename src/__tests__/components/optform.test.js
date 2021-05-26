import React from "react";
import { render } from "@testing-library/react";
import { OptForm } from "../../components";

describe("<Optform />", () => {
  it("renders <Optform /> with populated data", () => {
    const { container, getByText, getByPlaceholderText } = render(
      <OptForm>
        <OptForm.Text>
          Ready to watch Netflix? Enter your email to create or restart your
          membership.
        </OptForm.Text>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Get started</OptForm.Button>
      </OptForm>
    );

    expect(
      getByText(
        "Ready to watch Netflix? Enter your email to create or restart your membership."
      )
    ).toBeTruthy();
    expect(getByPlaceholderText("Email address")).toBeTruthy();
    expect(getByText("Get started")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
