import React from "react";
import { iconCssCode } from "../../../data/css/button/iconcssCode";
import Css from "../../../code/Css";
import ContentSection from "../../../shared/ContentSection";

const IconCssBtn: React.FC = () => {
  return (
    <div>
      <div id="code-container">
        <Css btnCss={iconCssCode} />
      </div>
      <ContentSection />
    </div>
  );
};

export default IconCssBtn;
