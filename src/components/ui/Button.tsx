import React, { useState } from "react";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { MdSlideshow } from "react-icons/md";
import { BiPaste } from "react-icons/bi";
import PreviewContainer from "../container/PreviewContainer";
import CodeContainer from "../container/CodeContainer";
import PasteContainer from "../container/PasteContainer";
import TabContainer from "../shared/TabContainer";

import Btn from "../Design/Button";
import ShadowButton from "../Design/ShadowButton";
import DestructiveButton from "../Design/DestructiveButton";
import OutlineButton from "../Design/OutlineButton";

import HtmlBtn from "../container/HtmlContainer/HtmlBtn";
import CssBtn from "../container/CssContainer/CssBtn";
import ReactBtn from "../container/ReactContainer/ReactBtn";

import HtmlBtn2 from "../container/HtmlContainer/HtmlBtn2";
import CssBtn2 from "../container/CssContainer/CssBtn2";
import ReactBtn2 from "../container/ReactContainer/ReactBtn2";

import HtmlBtnDest from "../container/HtmlContainer/HtmlBtnDest";
import CssDestBtn from "../container/CssContainer/CssDestBtn";
import ReactDestBtn from "../container/ReactContainer/ReactDestBtn";

import HtmlBtnOutline from "../container/HtmlContainer/button/HtmlBtnOutline";
import CssBtnOutline from "../container/CssContainer/button/CssBtnOutline";
import ReactBtnOutline from "../container/ReactContainer/button/ReactBtnOutline";
import GhostButton from "../Design/GhostButton";
import GhostCssBtn from "../container/CssContainer/button/GhostCssBtn";
import HtmlBtnGhost from "../container/HtmlContainer/button/HtmlBtnGhost";
import ReactBtnGhost from "../container/ReactContainer/button/ReactBtnGhost";

const Button: React.FC = () => {
  const buttonSections = [
    {
      title: "",
      copyCode: `import React from "react";
                const Button = () => {
                     return (
                        <button className="px-3.5 text-sm font-semibold rounded-md hover:bg-zinc-200 py-2.5 text-black bg-white">
                            Button
                        </button>
                    );
                  };

export default Button;`,
      PreviewComponent: Btn,
      codeComponents: [<HtmlBtn />, <CssBtn />, <ReactBtn />],
    },
    {
      title: "Secondary",
      copyCode: `import React from "react";

const ShadowButton = () => {
  return (
      <button className="px-3.5 text-sm font-semibold rounded-md hover:bg-zinc-900 py-2.5 text-white bg-zinc-800">
        Secondary
      </button>
  );
};

export default ShadowButton;`,
      PreviewComponent: ShadowButton,
      codeComponents: [<HtmlBtn2 />, <CssBtn2 />, <ReactBtn2 />],
    },
    {
      title: "Destructive",
      copyCode: `import React from "react";
  
const Button = () => {
  return (
      <button className="px-3.5 text-sm font-semibold rounded-md hover:bg-red-800 py-2.5 text-white bg-red-900">
        Destructive
      </button>
  );
};
  
export default Button;`,
      PreviewComponent: DestructiveButton,
      codeComponents: [<HtmlBtnDest />, <CssDestBtn />, <ReactDestBtn />],
    },
    {
      title: "Outline",
      copyCode: `import React from "react";
              const Button = () => {
                return (
                    <button className="px-3.5 border text-sm font-semibold rounded-md hover:bg-zinc-900 border-zinc-800 py-2.5 text-white ">
                      Outline
                    </button>
                );
              };
  
export default Button;`,
      PreviewComponent: OutlineButton,
      codeComponents: [
        <HtmlBtnOutline />,
        <CssBtnOutline />,
        <ReactBtnOutline />,
      ],
    },
    {
      title: "Ghost",
      copyCode: `import React from "react";
      
      const Button = () => {
        return (
          <button className="px-3.5 outline-none text-sm font-semibold rounded-md hover:bg-zinc-900 border-none py-2.5 text-white ">
            Ghost
          </button>
        );
      };
      
      export default Button;
      `,
      PreviewComponent: GhostButton,
      codeComponents: [<HtmlBtnGhost />, <GhostCssBtn />, <ReactBtnGhost />],
    },
  ];

  return (
    <div className="min-h-screen px-3">
      <div id="intro">
        <h1 className="mb-1.5 text-3xl font-bold">Button</h1>
        <p className="text-zinc-300">
          An interactive element for triggering actions.
        </p>
      </div>

      {buttonSections.map((section, index) => {
        const [activeTab, setActiveTab] = useState("preview");
        const tabs = [
          { id: "preview", label: "Preview", icon: <MdSlideshow size={15} /> },
          {
            id: "code",
            label: "Code",
            icon: <HiOutlineCommandLine size={15} />,
          },
          { id: "paste", label: "Paste to check", icon: <BiPaste size={15} /> },
        ];

        return (
          <div key={index}>
            <div id="example">
              <h1 className="my-2 text-2xl font-bold text-zinc-200">
                {section.title}
              </h1>
            </div>
            <TabContainer
              key={activeTab}
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              styleCss="mt-5"
            />
            <div id={`container-${index}`}>
              {activeTab === "preview" && (
                <PreviewContainer
                  copyCode={section.copyCode}
                  btnZidx={"z-20 top-5"}
                  className={"h-[50vh]"}
                >
                  <section.PreviewComponent />
                </PreviewContainer>
              )}
              {activeTab === "code" && (
                <CodeContainer
                  tabs={["html", "css", "jsx"]}
                  components={section.codeComponents}
                />
              )}
              {activeTab === "paste" && <PasteContainer />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Button;
