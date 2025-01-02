import React from "react";
import Html from "../../../code/Html";
import { destHtmlCode } from "../../../data/Html/button/destHtmlCode";
import ContentSection from "../../../shared/ContentSection";

const HtmlBtnDest: React.FC = () => {
  return (
    <div>
      <section id="code-container">
        <Html codeHtml={destHtmlCode} />
      </section>
      <ContentSection />
    </div>
  );
};

export default HtmlBtnDest;
