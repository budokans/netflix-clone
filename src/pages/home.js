import React from "react";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";
import { FAQsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <JumbotronContainer />
      <FAQsContainer />
      <FooterContainer />
    </>
  );
}
