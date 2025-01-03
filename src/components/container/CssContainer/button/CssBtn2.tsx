import React from "react";
import { btnCss2 } from "../../../data/css/button/btnCssCode2";
import Css from "../../../code/Css";
import ContentSection from "../../../shared/ContentSection";

const CssBtn2: React.FC = () => {
  return (
    <div>
      <div id="code-container">
        <Css btnCss={btnCss2} />
      </div>
      <ContentSection />
    </div>
  );
};

export default CssBtn2;
