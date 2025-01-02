import React from "react";
import ReactCode from "../code/ReactCode";
import InstallationStep from "./InstallationStep";

interface InstallationGuideProps {
  pageTitle: string;
  btnReactCode: string;
  steps: { title: string; code: string }[];
}

const InstallationGuide: React.FC<InstallationGuideProps> = ({
  pageTitle,
  btnReactCode,
  steps,
}) => {
  return (
    <div className="min-h-screen">
      <div id="code-container">
        <ReactCode btnReactCode={btnReactCode} />
      </div>
      <div id="content-container" className="mt-10">
        <h1 className="text-2xl font-semibold">{pageTitle}</h1>
        <hr className="my-3 opacity-50 bg-zinc-800" />

        {steps.map((step, index) => (
          <InstallationStep key={index} title={step.title} code={step.code} />
        ))}
        <div id="space" className="my-5 text-zinc-950">
          .
        </div>
      </div>
    </div>
  );
};

export default InstallationGuide;
