import React from "react";
import Html from "../../../code/Html";
import { ghostHtmlCode } from "../../../data/Html/button/ghostHtmlCode";
import ContentSection from "../../../shared/ContentSection";

const HtmlBtnGhost: React.FC = () => {
  return (
    <div>
      <section id="code-container">
        <Html codeHtml={ghostHtmlCode} />
      </section>
      <ContentSection />
    </div>
  );
};

export default HtmlBtnGhost;
