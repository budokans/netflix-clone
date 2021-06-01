import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Header } from "../../components";

jest.mock("react-router-dom");

describe("<Header />", () => {
  it("renders the basic <Header /> with a background", () => {
    const { container, getByText, getByTestId } = render(
      <Header>
        <Header.Frame>
          <Header.Logo src="/images/misc/logo.svg" alt="Netflix" />
          <Header.Link active>Hello, I am a link!</Header.Link>
        </Header.Frame>
      </Header>
    );

    expect(getByText("Hello, I am a link!")).toBeTruthy();
    expect(getByTestId("header-bg")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the basic <Header /> without a background", () => {
    const { container, getByText, queryByTestId } = render(
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo src="/images/misc/logo.svg" alt="Netflix" />
          <Header.ButtonLink>Sign In</Header.ButtonLink>
          <Header.Link active>Hello, I am a link!</Header.Link>
        </Header.Frame>
      </Header>
    );

    expect(getByText("Hello, I am a link!")).toBeTruthy();
    expect(queryByTestId("header-bg")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the full <Header /> with a background", () => {
    const { container, getByText, getByTestId } = render(
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo src="/images/misc/logo.svg" alt="Netflix" />

            <Header.Link active={false} onClick={() => {}}>
              TV Shows
            </Header.Link>

            <Header.Link active={false} onClick={() => {}}>
              Films
            </Header.Link>
          </Header.Group>

          <Header.Group>
            <Header.Search
              searchTerm="Joker"
              setSearchTerm={() => {}}
            ></Header.Search>

            <Header.Profile>
              <Header.Picture src="/images/users/1.png" />

              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src="/images/users/1.png" />
                  <Header.Link>Steven Webster</Header.Link>
                </Header.Group>

                <Header.Group>
                  <Header.Link onClick={() => {}}>
                    Sign out of Netflix
                  </Header.Link>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCTA>Watch Joker</Header.FeatureCTA>
          <Header.Text>Forever alone in a crowd...</Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
    );

    expect(getByTestId("search-input")).toBeTruthy();
    expect(getByTestId("search-input").value).toBe("Joker");

    fireEvent.change(getByTestId("search-input"), {
      target: { value: "Simpsons" },
    });
    fireEvent.click(getByTestId("search-click"));

    expect(getByText("TV Shows")).toBeTruthy();
    expect(getByText("Films")).toBeTruthy();
    expect(getByText("Steven Webster")).toBeTruthy();
    expect(getByText("Sign out of Netflix")).toBeTruthy();
    expect(getByText("Watch Joker")).toBeTruthy();
    expect(getByText("Forever alone in a crowd...")).toBeTruthy();
    expect(getByText("Play")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
