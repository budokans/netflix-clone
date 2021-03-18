import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Inner,
  Item,
  Title,
  Header,
  Body,
} from "./styles/accordion";

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  const [activeIndex, setActiveIndex] = useState();

  return (
    <ToggleContext.Provider value={{ activeIndex, setActiveIndex }}>
      <Container {...restProps}>
        <Inner>{children}</Inner>
      </Container>
    </ToggleContext.Provider>
  );
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Header = function AccordionHeader({ index, children, ...restProps }) {
  const { activeIndex, setActiveIndex } = useContext(ToggleContext);
  const isActive = index === activeIndex;

  return (
    <Header
      onClick={() => {
        !isActive ? setActiveIndex(index) : setActiveIndex(null);
      }}
      {...restProps}
    >
      {children}
      {isActive ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ index, children, ...restProps }) {
  const { activeIndex } = useContext(ToggleContext);
  const isActive = index === activeIndex;

  return isActive ? <Body {...restProps}>{children}</Body> : null;
};
