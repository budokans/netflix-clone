import React from "react";
import jumboData from "../fixtures/jumbo.json";
import Jumbotron from "../components/jumbotron";

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => {
        return (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{item.subtitle}</Jumbotron.Subtitle>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron>
        );
      })}
    </Jumbotron.Container>
  );
}
