import React from "react";
import Html from "../../../code/Html";
import { btnhtmlCode2 } from "../../../data/Html/button/btnhtmlCode2";
import ContentSection from "../../../shared/ContentSection";

const HtmlBtn2: React.FC = () => {
  return (
    <div>
      <section id="container">
        <Html codeHtml={btnhtmlCode2} />
      </section>
      <ContentSection />
    </div>
  );
};

export default HtmlBtn2;
