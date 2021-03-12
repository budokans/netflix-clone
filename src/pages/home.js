import React from "react";
import { OptForm, Feature } from "../components";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";
import { FAQsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <OptForm>
          <Feature>
            <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
            <Feature.Subtitle>
              Watch anywhere. Cancel at any time.
            </Feature.Subtitle>
            <OptForm.Text>
              Ready to watch Netflix? Enter your email to create or restart your
              membership.
            </OptForm.Text>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Get started</OptForm.Button>
          </Feature>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FAQsContainer />
      <FooterContainer />
    </>
  );
}
