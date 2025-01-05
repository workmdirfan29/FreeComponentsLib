import React from "react";
import Css from "../../../code/Css";
import { iconCssCode } from "../../../data/css/button/iconcssCode";
import ContentSection from "../../../shared/ContentSection";

const IconCssBtn: React.FC = () => {
  return (
    <div>
      <div id="container">
        <Css btnCss={iconCssCode} />
      </div>
      <ContentSection />
    </div>
  );
};

export default IconCssBtn;
