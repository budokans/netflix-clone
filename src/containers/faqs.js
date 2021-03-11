import React from "react";
import { Accordion } from "../components";
import faqsData from "../fixtures/faqs.json";

export function FAQsContainer({ children, restProps }) {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((faq) => {
        return (
          <Accordion.Item key={faq.id}>
            <Accordion.Header>{faq.header}</Accordion.Header>
            <Accordion.Body>{faq.body}</Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}
