import React from "react";
import { OptForm } from "../components";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";
import { FAQsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <OptForm>
          <OptForm.Text>
            Ready to watch Netflix? Enter your email to create or restart your
            membership.
          </OptForm.Text>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Get started</OptForm.Button>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FAQsContainer />
      <FooterContainer />
    </>
  );
}
