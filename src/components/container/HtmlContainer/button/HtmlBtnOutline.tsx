import React from "react";
import Html from "../../../code/Html";
import ContentSection from "../../../shared/ContentSection";
import { OutHtmlCode } from "../../../data/Html/button/OutHtmlCode";

const HtmlBtnOutline: React.FC = () => {
  return (
    <div>
      <section id="container">
        <Html codeHtml={OutHtmlCode} />
      </section>
      <ContentSection />
    </div>
  );
};

export default HtmlBtnOutline;
