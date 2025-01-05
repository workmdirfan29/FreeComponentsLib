import React from "react";
import InstallationGuide from "../../../shared/InstallationGuide";
import { destReactCode as destJSXCode } from "../../../data/React/button/destReactCode";

const ReactDestBtn: React.FC = () => {
  return <InstallationGuide btnReactCode={destJSXCode} />;
};

export default ReactDestBtn;
