import React from "react";
import Css from "../../../code/Css";
import { destBtnCode } from "../../../data/css/button/destBtnCode";
import ContentSection from "../../../shared/ContentSection";

const CssDestBtn: React.FC = () => {
  return (
    <div>
      <div id="container">
        <Css btnCss={destBtnCode} />
      </div>
      <ContentSection />
    </div>
  );
};

export default CssDestBtn;
