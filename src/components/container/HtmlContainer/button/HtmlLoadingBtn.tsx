import React from "react";
import Html from "../../../code/Html";
import { loadingBtnHtml } from "../../../data/Html/button/loadingBtnHtml";
import ContentSection from "../../../shared/ContentSection";

const HtmlLoadingBtn: React.FC = () => {
  return (
    <div>
      <section id="container">
        <Html codeHtml={loadingBtnHtml} />
      </section>
      <ContentSection />
    </div>
  );
};

export default HtmlLoadingBtn;
