import React from "react";
import Html from "../../../code/Html";
import { iconhtmlCode } from "../../../data/Html/button/iconhtmlCode";
import ContentSection from "../../../shared/ContentSection";

const HtmlBtnIcon: React.FC = () => {
  return (
    <div>
      <section id="code-container">
        <Html codeHtml={iconhtmlCode} />
      </section>
      <ContentSection />
    </div>
  );
};

export default HtmlBtnIcon;
