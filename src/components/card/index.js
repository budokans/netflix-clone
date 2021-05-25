import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Group,
  Title,
  Subtitle,
  Text,
  Entities,
  Meta,
  Item,
  Image,
  Feature,
  Content,
  FeatureTitle,
  FeatureClose,
  Maturity,
  FeatureText,
} from "./styles/card";

const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Card.Group = function CardGroup({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState(false);
  const [activeContainerIndex, setActiveContainerIndex] = useState(false);
  return (
    <FeatureContext.Provider
      value={{
        showFeature,
        setShowFeature,
        itemFeature,
        setItemFeature,
        activeContainerIndex,
        setActiveContainerIndex,
      }}
    >
      <Group {...restProps}>{children}</Group>
    </FeatureContext.Provider>
  );
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.Subtitle = function CardSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.Item = function CardItem({
  item,
  containerIndex,
  children,
  ...restProps
}) {
  const {
    setShowFeature,
    setItemFeature,
    activeContainerIndex,
    setActiveContainerIndex,
  } = useContext(FeatureContext);

  const isActiveContainer = containerIndex === activeContainerIndex;

  return (
    <Item
      onClick={() => {
        if (!isActiveContainer) {
          setActiveContainerIndex(containerIndex);
        }
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Card.Feature = function CardFeature({
  category,
  containerIndex,
  children,
  ...restProps
}) {
  const { itemFeature, showFeature, setShowFeature, activeContainerIndex } =
    useContext(FeatureContext);

  const isActiveContainer = containerIndex === activeContainerIndex;

  return showFeature && isActiveContainer ? (
    <Feature
      {...restProps}
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose
          onClick={() => {
            setShowFeature(false);
          }}
        >
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}{" "}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
};
