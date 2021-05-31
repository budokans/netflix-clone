import React from "react";
import { render } from "@testing-library/react";
import { Jumbotron } from "../../components";
import jumboData from "../../fixtures/jumbo";

const tree = (
  <Jumbotron.Container>
    {jumboData.map((item) => {
      return (
        <Jumbotron key={item.id}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{item.subtitle}</Jumbotron.Subtitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image
              src={item.image}
              alt={item.alt}
              data-testid={`${item.id}-jumbo-image`}
            />
          </Jumbotron.Pane>
        </Jumbotron>
      );
    })}
  </Jumbotron.Container>
);

describe("<Jumbotron />", () => {
  it("renders the <Jumbotron /> with populated data", () => {
    const { container, getByText, getByAltText, getByTestId } = render(tree);

    expect(getByText("Enjoy Netflix on your TV.")).toBeTruthy();
    expect(
      getByText(
        "Save your favourites easily and always have something to watch."
      )
    ).toBeTruthy();
    expect(getByAltText("Tiger King on Netflix")).toBeTruthy();
    expect(getByTestId("3-jumbo-image")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
