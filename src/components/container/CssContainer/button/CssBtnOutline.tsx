import React from "react";
import { btnCssOutline } from "../../../data/css/button/btnCssOutline";
import Css from "../../../code/Css";
import ContentSection from "../../../shared/ContentSection";

const CssBtnOutline: React.FC = () => {
  return (
    <div>
      <div id="code-container">
        <Css btnCss={btnCssOutline} />
      </div>
      <ContentSection />
    </div>
  );
};

export default CssBtnOutline;
