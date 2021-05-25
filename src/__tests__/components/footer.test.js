import React from "react";
import { render } from "@testing-library/react";
import Footer from "../../components/footer";

describe("<Footer />", () => {
  it("renders the <Footer /> with populated data", () => {
    const { container, getByText } = render(
      <Footer>
        <Footer.Title>Questions? Phone 0800 472 310</Footer.Title>

        <Footer.Break />

        <Footer.Row>
          <Footer.Column>
            <Footer.Link href="#">FAQs</Footer.Link>
            <Footer.Link href="#">Investor Relations</Footer.Link>
            <Footer.Link href="#">Privacy</Footer.Link>
            <Footer.Link href="#">Speed test</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Help Center</Footer.Link>
            <Footer.Link href="#">Jobs</Footer.Link>
            <Footer.Link href="#">Cookie preferences</Footer.Link>
            <Footer.Link href="#">Legal notices</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Account</Footer.Link>
            <Footer.Link href="#">Ways to watch</Footer.Link>
            <Footer.Link href="#">Corporate Information</Footer.Link>
            <Footer.Link href="#">Netflix Originals</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Media Centre</Footer.Link>
            <Footer.Link href="#">Terms of Use</Footer.Link>
            <Footer.Link href="#">Contact us</Footer.Link>
          </Footer.Column>
        </Footer.Row>

        <Footer.Break />

        <Footer.Text>Netflix New Zealand</Footer.Text>
      </Footer>
    );

    expect(getByText("Questions? Phone 0800 472 310")).toBeTruthy();
    expect(getByText("FAQs")).toBeTruthy();
    expect(getByText("Help Center")).toBeTruthy();
    expect(getByText("Account")).toBeTruthy();
    expect(getByText("Media Centre")).toBeTruthy();
    expect(getByText("Netflix New Zealand")).toBeTruthy();

    const footerChildrenCount = container.firstChild.children.length;

    expect(footerChildrenCount).toBe(5);
    expect(container.firstChild).toMatchSnapshot();
  });
});
