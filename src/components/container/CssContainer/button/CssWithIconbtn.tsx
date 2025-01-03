import React from "react";
import Css from "../../../code/Css";
import ContentSection from "../../../shared/ContentSection";
import { btnCssWithIconCode } from "../../../data/css/button/btnCssWithIconCode";

const CssWithIconBtn: React.FC = () => {
  return (
    <div>
      <div id="code-container">
        <Css btnCss={btnCssWithIconCode} />
      </div>
      <ContentSection />
    </div>
  );
};

export default CssWithIconBtn;
