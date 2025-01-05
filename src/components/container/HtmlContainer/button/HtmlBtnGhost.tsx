import React from "react";
import Html from "../../../code/Html";
import ContentSection from "../../../shared/ContentSection";
import { ghostHtmlCode } from "../../../data/Html/button/ghostHtmlCode";

const HtmlBtnGhost: React.FC = () => {
  return (
    <div>
      <section id="container">
        <Html codeHtml={ghostHtmlCode} />
      </section>
      <ContentSection />
    </div>
  );
};

export default HtmlBtnGhost;
