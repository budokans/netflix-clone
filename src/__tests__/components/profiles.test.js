import React from "react";
import { render } from "@testing-library/react";
import { Profiles } from "../../components";

describe("<Profiles />", () => {
  it("renders the with populated data", () => {
    const { container, getByTestId, getByText } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture
              src="/images/users/1.png"
              data-testid="profiles-picture"
            />
            <Profiles.Name>Steven Webster</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText("Who's watching?")).toBeTruthy();
    expect(getByTestId("profiles-picture")).toBeTruthy();
    expect(getByText("Steven Webster")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the with populated data but misc profile image", () => {
    const { container, getByTestId, getByText } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture data-testid="profiles-picture-misc" />
            <Profiles.Name>Steven Webster</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText("Who's watching?")).toBeTruthy();
    expect(getByTestId("profiles-picture-misc")).toBeTruthy();
    expect(getByText("Steven Webster")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
