import React from "react";
import Html from "../../../code/Html";
import ContentSection from "../../../shared/ContentSection";
import { linkhtmlCode } from "../../../data/Html/button/linkhtmlCode";

const HtmlLinkBtn: React.FC = () => {
  return (
    <div>
      <section id="container">
        <Html codeHtml={linkhtmlCode} />
      </section>
      <ContentSection />
    </div>
  );
};

export default HtmlLinkBtn;
