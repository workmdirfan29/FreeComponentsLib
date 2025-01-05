import React from "react";
import Css from "../../../code/Css";
import { linkCssCode } from "../../../data/css/button/linkCssCode";
import ContentSection from "../../../shared/ContentSection";

const LinkCssBtn: React.FC = () => {
  return (
    <div>
      <div id="container">
        <Css btnCss={linkCssCode} />
      </div>
      <ContentSection />
    </div>
  );
};

export default LinkCssBtn;
