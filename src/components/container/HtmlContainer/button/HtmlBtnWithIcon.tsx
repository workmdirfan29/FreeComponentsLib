import React from "react";
import Html from "../../../code/Html";
import ContentSection from "../../../shared/ContentSection";
import { WithIconBtnHtmlCode } from "../../../data/Html/button/WithIconbtnHtmlCode";

const HtmlBtnWithIcon: React.FC = () => {
  return (
    <div>
      <section id="code-container">
        <Html codeHtml={WithIconBtnHtmlCode} />
      </section>
      <ContentSection />
    </div>
  );
};

export default HtmlBtnWithIcon;
