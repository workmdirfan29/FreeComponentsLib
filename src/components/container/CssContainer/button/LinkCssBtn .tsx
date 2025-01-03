import React from "react";
import { linkCssCode } from "../../../data/css/button/linkCssCode";
import Css from "../../../code/Css";
import ContentSection from "../../../shared/ContentSection";

const LinkCssBtn: React.FC = () => {
  return (
    <div>
      <div id="code-container">
        <Css btnCss={linkCssCode} />
      </div>
      <ContentSection />
    </div>
  );
};

export default LinkCssBtn;
