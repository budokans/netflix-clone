import React from "react";
import { Accordion, OptForm } from "../components";
import faqsData from "../fixtures/faqs.json";
import parse from "html-react-parser";

export function FAQsContainer() {
  return (
    <>
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqsData.map((faq) => (
          <Accordion.Item key={faq.id}>
            <Accordion.Header>{faq.header}</Accordion.Header>
            <Accordion.Body>{parse(faq.body)}</Accordion.Body>
          </Accordion.Item>
        ))}

        <OptForm>
          <OptForm.Text>
            Ready to watch Netflix? Enter your email to create or restart your
            membership.
          </OptForm.Text>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Get started</OptForm.Button>
        </OptForm>
      </Accordion>
    </>
  );
}
