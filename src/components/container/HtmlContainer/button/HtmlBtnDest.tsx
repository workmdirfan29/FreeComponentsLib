import React from "react";
import Html from "../../../code/Html";
import ContentSection from "../../../shared/ContentSection";
import { destHtmlCode } from "../../../data/Html/button/destHtmlCode";

const HtmlBtnDest: React.FC = () => {
  return (
    <div>
      <section id="container">
        <Html codeHtml={destHtmlCode} />
      </section>
      <ContentSection />
    </div>
  );
};

export default HtmlBtnDest;
