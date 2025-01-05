import React from "react";
import Css from "../../../code/Css";
import { btnCssOutline } from "../../../data/css/button/btnCssOutline";
import ContentSection from "../../../shared/ContentSection";

const CssBtnOutline: React.FC = () => {
  return (
    <div>
      <div id="container">
        <Css btnCss={btnCssOutline} />
      </div>
      <ContentSection />
    </div>
  );
};

export default CssBtnOutline;
