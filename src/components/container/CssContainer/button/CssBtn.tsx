import React from "react";
import Css from "../../../code/Css";
import { btnCss } from "../../../data/css/button/btnCssCode";
import ContentSection from "../../../shared/ContentSection";

const CssBtn: React.FC = () => {
  return (
    <div>
      <div id="container">
        <Css btnCss={btnCss} />
      </div>
      <ContentSection />
    </div>
  );
};

export default CssBtn;
