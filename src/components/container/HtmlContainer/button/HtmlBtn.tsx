import React from "react";
import Html from "../../../code/Html";
import ContentSection from "../../../shared/ContentSection";
import { btnhtmlCode } from "../../../data/Html/button/btnhtmlCode";

const HtmlBtn: React.FC = () => {
  return (
    <div>
      <section id="container">
        <Html codeHtml={btnhtmlCode} />
      </section>
      <ContentSection />
    </div>
  );
};

export default HtmlBtn;
