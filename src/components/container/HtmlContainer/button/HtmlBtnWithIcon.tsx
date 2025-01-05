import React from "react";
import Html from "../../../code/Html";
import { WithIconBtnHtmlCode } from "../../../data/Html/button/WithIconbtnHtmlCode";
import ContentSection from "../../../shared/ContentSection";

const HtmlBtnWithIcon: React.FC = () => {
  return (
    <div>
      <section id="container">
        <Html codeHtml={WithIconBtnHtmlCode} />
      </section>
      <ContentSection />
    </div>
  );
};

export default HtmlBtnWithIcon;
