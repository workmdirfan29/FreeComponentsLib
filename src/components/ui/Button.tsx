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
import HtmlBtn2 from "../container/HtmlContainer/HtmlBtn2";
import HtmlBtnDest from "../container/HtmlContainer/HtmlBtnDest";

import HtmlBtnOutline from "../container/HtmlContainer/button/HtmlBtnOutline";
import CssBtnOutline from "../container/CssContainer/button/CssBtnOutline";
import ReactBtnOutline from "../container/ReactContainer/button/ReactBtnOutline";
import GhostButton from "../Design/GhostButton";
import GhostCssBtn from "../container/CssContainer/button/GhostCssBtn";
import HtmlBtnGhost from "../container/HtmlContainer/button/HtmlBtnGhost";
import ReactBtnGhost from "../container/ReactContainer/button/ReactBtnGhost";
import LinkButton from "../Design/LinkButton";
import HtmlLinkBtn from "../container/HtmlContainer/button/HtmlLinkBtn";
import CssBtn from "../container/CssContainer/button/CssBtn";
import CssBtn2 from "../container/CssContainer/button/CssBtn2";
import CssDestBtn from "../container/CssContainer/button/CssDestBtn";
import ReactBtn from "../container/ReactContainer/button/ReactBtn";
import ReactBtn2 from "../container/ReactContainer/button/ReactBtn2";
import ReactDestBtn from "../container/ReactContainer/button/ReactDestBtn";
import ReactBtnLink from "../container/ReactContainer/button/ReactBtnLink";
import LinkCssBtn from "../container/CssContainer/button/LinkCssBtn ";
import IconButton from "../Design/IconButton";
import HtmlBtnIcon from "../container/HtmlContainer/button/HtmlBtnIcon";
import IconCssBtn from "../container/CssContainer/button/IconCssBtn";
import ReactIconBtn from "../container/ReactContainer/button/ReactIconBtn";

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
    {
      title: "Link",
      copyCode: `import React from "react";
      
      const LinkButton = () => {
        return (
          <button className="text-base font-medium text-white border-none rounded-md outline-none hover:text-sky-500 hover:underline ">
            Link
          </button>
        );
      };
      
      export default LinkButton;
      `,
      PreviewComponent: LinkButton,
      codeComponents: [<HtmlLinkBtn />, <LinkCssBtn />, <ReactBtnLink />],
    },
    {
      title: "Icon",
      copyCode: `import React from "react";
      
      const Button = () => {
        return (
          <button className="p-2 border rounded-md outline-none hover:bg-zinc-900 border-zinc-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        );
      };
      
      export default Button;
      `,
      PreviewComponent: IconButton,
      codeComponents: [<HtmlBtnIcon />, <IconCssBtn />, <ReactIconBtn />],
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
