import React from "react";
import Css from "../../../code/Css";
import ContentSection from "../../../shared/ContentSection";
import { aeroplaneBtnCss } from "../../../data/css/facnyBtn/aeroplaneBtnCss";

const AeroplaneCss: React.FC = () => {
  return (
    <div>
      <div id="container">
        <Css btnCss={aeroplaneBtnCss} />
      </div>
      <ContentSection />
    </div>
  );
};

export default AeroplaneCss;
