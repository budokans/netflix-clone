import React from "react";
import { Accordion } from "../components";
import faqsData from "../fixtures/faqs.json";
import parse from "html-react-parser";

export function FAQsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((faq) => (
        <Accordion.Item key={faq.id}>
          <Accordion.Header>{faq.header}</Accordion.Header>
          <Accordion.Body>{parse(faq.body)}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
