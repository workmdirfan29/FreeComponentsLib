import React from "react";
import Css from "../../../code/Css";
import ContentSection from "../../../shared/ContentSection";
import { loadingBtnCss } from "../../../data/css/button/loadingBtnCss";

const LoadingCssBtn: React.FC = () => {
  return (
    <div>
      <div id="code-container">
        <Css btnCss={loadingBtnCss} />
      </div>
      <ContentSection />
    </div>
  );
};

export default LoadingCssBtn;
