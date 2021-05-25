import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Card, Player } from "../../components";

const category = "series";
const slideRows = [
  {
    title: "Documentaries",
    data: [
      {
        title: "Tiger King",
        description:
          "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
        genre: "documentaries",
        maturity: "18",
        slug: "tiger-king",
        id: "94b97c8d-294d-48a1-96c8-9c9ebc0ab8b2",
        docId: "5l2s55wh14Qc3lILmMP8",
      },
    ],
  },
  {
    title: "Comedies",
    data: [
      {
        title: "The Office",
        description:
          "A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.",
        genre: "comedies",
        maturity: "15",
        slug: "the-office",
        id: "89baf512-f2c4-4a23-8838-b4c75c755d98",
        docId: "ULqWURe13fPYZ8FGhO6C",
      },
    ],
  },
];

const tree = (
  <Card.Group>
    {slideRows.map((slideItem, index) => (
      <Card
        key={`${category}-${slideItem.title.toLowerCase()}`}
        containerIndex={index}
      >
        {/* Genre title */}
        <Card.Title>{slideItem.title}</Card.Title>
        {/* Actual titles within genres */}
        <Card.Entities>
          {slideItem.data.map((item) => (
            <Card.Item key={item.docId} item={item} containerIndex={index}>
              <Card.Image
                src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
              />
              <Card.Meta>
                <Card.Subtitle>{item.title}</Card.Subtitle>
                <Card.Text>{item.description}</Card.Text>
              </Card.Meta>
            </Card.Item>
          ))}
        </Card.Entities>

        <Card.Feature category={category} containerIndex={index}>
          <Player>
            <Player.Button />
            <Player.Video />
          </Player>
        </Card.Feature>
      </Card>
    ))}
  </Card.Group>
);

describe("<Card />", () => {
  it("renders the <Card /> with populated data", () => {
    const { container, getByText } = render(tree);

    expect(getByText("Documentaries")).toBeTruthy();
    expect(getByText("Tiger King")).toBeTruthy();
    expect(getByText(/An exploration of big cat breeding/)).toBeTruthy();

    expect(getByText("Comedies")).toBeTruthy();
    expect(getByText("The Office")).toBeTruthy();
    expect(getByText(/A motley group of office workers/)).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
