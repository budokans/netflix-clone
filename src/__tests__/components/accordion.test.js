import React from "react";
import { render, fireEvent } from "@testing-library/react";
import parse from "html-react-parser";
import faqsData from "../../fixtures/faqs.json";
import { Accordion } from "../../components";

const tree = (
  <Accordion>
    <Accordion.Title>Frequently Asked Questions</Accordion.Title>
    {faqsData.map((faq, index) => (
      <Accordion.Item key={faq.id}>
        <Accordion.Header index={index}>{faq.header}</Accordion.Header>
        <Accordion.Body index={index}>{parse(faq.body)}</Accordion.Body>
      </Accordion.Item>
    ))}
  </Accordion>
);

describe("<Accordion />", () => {
  it("renders the <Accordion /> with populated data", () => {
    const { container, getByText } = render(tree);

    expect(getByText("What is Netflix?")).toBeTruthy();
    expect(getByText("How much does Netflix cost?")).toBeTruthy();
    expect(getByText("Where can I watch?")).toBeTruthy();
    expect(getByText("How do I cancel?")).toBeTruthy();
    expect(getByText("What can I watch on Netflix?")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("opens and closes the <Accordion.Body /> when <Accordion.Header /> is clicked", () => {
    const { container, queryByText } = render(tree);
    const howMuchDoesNetflixCostText = parse(faqsData[1].body);

    expect(container.firstChild).toMatchSnapshot();
    expect(queryByText(howMuchDoesNetflixCostText)).toBeFalsy();

    fireEvent.click(queryByText("How much does Netflix cost?"));
    expect(queryByText(howMuchDoesNetflixCostText)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.click(queryByText("How much does Netflix cost?"));
    expect(queryByText(howMuchDoesNetflixCostText)).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
