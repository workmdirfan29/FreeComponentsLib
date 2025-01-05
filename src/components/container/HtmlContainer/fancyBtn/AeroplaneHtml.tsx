import React from "react";
import Html from "../../../code/Html";
import ContentSection from "../../../shared/ContentSection";
import { aeroplaneBtnHtml } from "../../../data/Html/fancyBtn/aeroplaneBtnHtml";

const AeroplaneHtml: React.FC = () => {
  return (
    <div>
      <section id="container">
        <Html codeHtml={aeroplaneBtnHtml} />
      </section>
      <ContentSection />
    </div>
  );
};

export default AeroplaneHtml;
