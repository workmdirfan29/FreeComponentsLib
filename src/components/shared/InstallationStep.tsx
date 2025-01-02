import React from "react";
import Installation from "./Installation";

interface InstallationStepProps {
  title: string;
  code: string;
}

const InstallationStep: React.FC<InstallationStepProps> = ({ title, code }) => {
  return (
    <div className="my-3">
      <h1
        className="inline-block my-3 border-b border-sky-500"
        style={{
          borderImageSource: "linear-gradient(to right, #38bdf8, transparent)",
          borderImageSlice: 1,
        }}
      >
        {title}
      </h1>
      <Installation codeString={code} />
    </div>
  );
};

export default InstallationStep;
