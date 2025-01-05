import React from "react";
import Html from "../../../code/Html";
import ContentSection from "../../../shared/ContentSection";
import { iconhtmlCode } from "../../../data/Html/button/iconhtmlCode";

const HtmlBtnIcon: React.FC = () => {
  return (
    <div>
      <section id="container">
        <Html codeHtml={iconhtmlCode} />
      </section>
      <ContentSection />
    </div>
  );
};

export default HtmlBtnIcon;
