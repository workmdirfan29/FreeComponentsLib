import React from "react";
import Html from "../../../code/Html";
import { btnhtmlCode } from "../../../data/Html/button/btnhtmlCode";
import ContentSection from "../../../shared/ContentSection";

const HtmlBtn: React.FC = () => {
  return (
    <div>
      <section id="code-container">
        <Html codeHtml={btnhtmlCode} />
      </section>
      <ContentSection />
    </div>
  );
};

export default HtmlBtn;
