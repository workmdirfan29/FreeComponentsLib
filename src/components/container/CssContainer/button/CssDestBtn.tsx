import React from "react";
import { destBtnCode } from "../../../data/css/button/destBtnCode";
import Css from "../../../code/Css";
import ContentSection from "../../../shared/ContentSection";

const CssDestBtn: React.FC = () => {
  return (
    <div>
      <div id="code-container">
        <Css btnCss={destBtnCode} />
      </div>
      <ContentSection />
    </div>
  );
};

export default CssDestBtn;
