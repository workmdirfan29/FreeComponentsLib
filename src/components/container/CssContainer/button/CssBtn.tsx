import React from "react";
import { btnCss } from "../../../data/css/button/btnCssCode";
import Css from "../../../code/Css";
import ContentSection from "../../../shared/ContentSection";

const CssBtn: React.FC = () => {
  return (
    <div>
      <div id="code-container">
        <Css btnCss={btnCss} />
      </div>
      <ContentSection />
    </div>
  );
};

export default CssBtn;
