import React from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FAQsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <FAQsContainer />
      <FooterContainer />
    </>
  );
}
