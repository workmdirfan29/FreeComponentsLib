import React from "react";
import Css from "../../../code/Css";
import { ghostCssCode } from "../../../data/css/button/ghostCssCode";
import ContentSection from "../../../shared/ContentSection";

const GhostCssBtn: React.FC = () => {
  return (
    <div>
      <div id="container">
        <Css btnCss={ghostCssCode} />
      </div>
      <ContentSection />
    </div>
  );
};

export default GhostCssBtn;
