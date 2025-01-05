import React from "react";
import ContentSection from "../../../shared/ContentSection";
import { loadingBtnCss } from "../../../data/css/button/loadingBtnCss";
import Css from "../../../code/Css";

const LoadingCssBtn: React.FC = () => {
  return (
    <div>
      <div id="container">
        <Css btnCss={loadingBtnCss} />
      </div>
      <ContentSection />
    </div>
  );
};

export default LoadingCssBtn;
