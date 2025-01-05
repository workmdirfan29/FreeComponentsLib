import React from "react";
import Html from "../../code/Html";
import ContentSection from "../../shared/ContentSection";
import { sliderHtmlCode } from "../../data/Html/sliderHtmlCode";

const HtmlSlider: React.FC = () => {
  return (
    <div>
      <section id="code-container">
        <Html codeHtml={sliderHtmlCode} />
      </section>
      <ContentSection />
    </div>
  );
};

export default HtmlSlider;
