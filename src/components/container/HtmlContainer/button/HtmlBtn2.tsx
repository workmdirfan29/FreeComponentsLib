import React from "react";
import Html from "../../../code/Html";
import ContentSection from "../../../shared/ContentSection";
import { btnhtmlCode2 } from "../../../data/Html/button/btnhtmlCode2";

const HtmlBtn2: React.FC = () => {
  return (
    <div>
      <section id="code-container">
        <Html codeHtml={btnhtmlCode2} />
      </section>
      <ContentSection />
    </div>
  );
};

export default HtmlBtn2;
