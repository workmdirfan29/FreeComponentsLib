import React from "react";
import { sliderCssCode } from "../../data/css/sliderCssCode";
import Css from "../../code/Css";
import ContentSection from "../../shared/ContentSection";
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
