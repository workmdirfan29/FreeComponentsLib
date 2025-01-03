import React from "react";
import { ghostCssCode } from "../../../data/css/button/ghostCssCode";
import Css from "../../../code/Css";
import ContentSection from "../../../shared/ContentSection";

const GhostCssBtn: React.FC = () => {
  return (
    <div>
      <div id="code-container">
        <Css btnCss={ghostCssCode} />
      </div>
      <ContentSection />
    </div>
  );
};

export default GhostCssBtn;
