import React from "react";
import Html from "../../../code/Html";
import { OutHtmlCode } from "../../../data/Html/button/OutHtmlCode";
import ContentSection from "../../../shared/ContentSection";

const HtmlBtnOutline: React.FC = () => {
  return (
    <div>
      <section id="code-container">
        <Html codeHtml={OutHtmlCode} />
      </section>
      <ContentSection />
    </div>
  );
};

export default HtmlBtnOutline;
