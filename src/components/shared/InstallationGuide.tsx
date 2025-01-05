import React from "react";
import ReactCode from "../code/ReactCode";
import ContentSection from "./ContentSection";

interface InstallationGuideProps {
  btnReactCode: string;
}

const InstallationGuide: React.FC<InstallationGuideProps> = ({
  btnReactCode,
}) => {
  return (
    <div className="min-h-screen">
      <div id="code-container">
        <ReactCode btnReactCode={btnReactCode} />
      </div>
      <div id="content-container" className="mt-10">
        <ContentSection
          contentText="Installation Step Guide"
          redirectLink="/installation-steps"
        />
      </div>
    </div>
  );
};

export default InstallationGuide;
