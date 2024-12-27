import React, { useState } from "react";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { MdSlideshow } from "react-icons/md";
import PreviewContainer from "../container/PreviewContainer";
import CodeContainer from "../container/CodeContainer";
import Btn from "../Design/Button";
import { BiPaste } from "react-icons/bi";
import PasteContainer from "../container/PasteContainer";
import HtmlBtn from "../container/HtmlContainer/HtmlBtn";
import CssBtn from "../container/CssContainer/CssBtn";
import ReactBtn from "../container/ReactContainer/ReactBtn";
import TabContainer from "../shared/TabContainer";
import ShadowButton from "../Design/ShadowButton";
import HtmlBtn2 from "../container/HtmlContainer/HtmlBtn2";
import CssBtn2 from "../container/CssContainer/CssBtn2";
import ReactBtn2 from "../container/ReactContainer/ReactBtn2";

const Button: React.FC = () => {
  const [activeTab, setActiveTab] = useState("preview");
  const [activeTab2, setActiveTab2] = useState("preview2");

  const tabs1 = [
    { id: "preview", label: "Preview", icon: <MdSlideshow size={15} /> },
    { id: "code", label: "Code", icon: <HiOutlineCommandLine size={15} /> },
    { id: "paste", label: "Paste to check", icon: <BiPaste size={15} /> },
  ];

  const tabs2 = [
    { id: "preview2", label: "Preview", icon: <MdSlideshow size={15} /> },
    { id: "code2", label: "Code", icon: <HiOutlineCommandLine size={15} /> },
    { id: "paste2", label: "Paste to check", icon: <BiPaste size={15} /> },
  ];

  const CopyCode = `import React from "react";
    const Button = () => {
    return (
        <button className="px-3.5 text-sm font-semibold rounded-md hover:bg-zinc-200 py-2.5 text-black bg-white">
            Button
        </button>
    );
};

export default Button;
`;

  const CopyCode2 = `import React from "react";

const ShadowButton = () => {
  return (
    <button className="px-3.5 text-sm font-semibold rounded-md hover:bg-zinc-900 py-2.5 text-white bg-zinc-800">
      Secondary
    </button>
  );
};

export default ShadowButton;
`;

  return (
    <div className="min-h-screen px-3">
      <div id="intro">
        <h1 className="mb-1.5 text-3xl font-bold">Button</h1>
        <p className="text-zinc-300">
          An interactive element for triggering actions.
        </p>
      </div>
      {/* For first button */}
      <TabContainer
        key={activeTab}
        tabs={tabs1}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        styleCss="mt-14"
      />
      <div id="container">
        {activeTab === "preview" && (
          <PreviewContainer
            copyCode={CopyCode}
            btnZidx={"z-20 top-5"}
            className={"h-[50vh]"}
          >
            <Btn />
          </PreviewContainer>
        )}

        {activeTab === "code" && (
          <CodeContainer
            tabs={["html", "css", "jsx"]}
            components={[<HtmlBtn />, <CssBtn />, <ReactBtn />]}
          />
        )}

        {activeTab === "paste" && <PasteContainer />}
      </div>
      {/*  example */}
      <div id="example">
        <h1 className="my-2 text-2xl font-bold text-zinc-400">Secondary</h1>
      </div>
      {/* For second button */}
      <TabContainer
        key={activeTab2}
        tabs={tabs2}
        activeTab={activeTab2}
        styleCss="mt-7"
        setActiveTab={setActiveTab2}
      />
      <div id="container-2">
        {activeTab2 === "preview2" && (
          <PreviewContainer
            copyCode={CopyCode2}
            btnZidx={"z-20 top-5"}
            className={"h-[50vh]"}
          >
            <ShadowButton />
          </PreviewContainer>
        )}

        {activeTab2 === "code2" && (
          <CodeContainer
            tabs={["html", "css", "jsx"]}
            components={[<HtmlBtn2 />, <CssBtn2 />, <ReactBtn2 />]}
          />
        )}

        {activeTab2 === "paste2" && <PasteContainer />}
      </div>
    </div>
  );
};

export default Button;
