import React from "react";
import { sliderCssCode } from "../../data/css/sliderCssCode";
import ContentSection from "../../shared/ContentSection";
import Css from "../../code/Css";

const CssSlider: React.FC = () => {
  return (
    <div>
      <div id="code-container">
        <Css btnCss={sliderCssCode} />
      </div>
      <ContentSection />
    </div>
  );
};

export default CssSlider;
