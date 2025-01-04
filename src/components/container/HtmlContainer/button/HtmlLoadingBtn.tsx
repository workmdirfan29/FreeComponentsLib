import React from "react";
import Html from "../../../code/Html";
import ContentSection from "../../../shared/ContentSection";
import { loadingBtnHtml } from "../../../data/Html/button/loadingBtnHtml";

const HtmlLoadingBtn: React.FC = () => {
  return (
    <div>
      <section id="code-container">
        <Html codeHtml={loadingBtnHtml} />
      </section>
      <ContentSection />
    </div>
  );
};

export default HtmlLoadingBtn;
