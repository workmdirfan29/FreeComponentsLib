import CssBtn from "../container/CssContainer/button/CssBtn";
import CssBtn2 from "../container/CssContainer/button/CssBtn2";
import CssBtnOutline from "../container/CssContainer/button/CssBtnOutline";
import CssDestBtn from "../container/CssContainer/button/CssDestBtn";
import GhostCssBtn from "../container/CssContainer/button/GhostCssBtn";
import IconCssBtn from "../container/CssContainer/button/IconCssBtn";
import LinkCssBtn from "../container/CssContainer/button/LinkCssBtn ";
import HtmlBtnGhost from "../container/HtmlContainer/button/HtmlBtnGhost";
import HtmlBtnIcon from "../container/HtmlContainer/button/HtmlBtnIcon";
import HtmlBtnOutline from "../container/HtmlContainer/button/HtmlBtnOutline";
import HtmlLinkBtn from "../container/HtmlContainer/button/HtmlLinkBtn";
import HtmlBtn from "../container/HtmlContainer/button/HtmlBtn";
import HtmlBtn2 from "../container/HtmlContainer/button/HtmlBtn2";
import HtmlBtnDest from "../container/HtmlContainer/button/HtmlBtnDest";
import ReactBtn from "../container/ReactContainer/button/ReactBtn";
import ReactBtn2 from "../container/ReactContainer/button/ReactBtn2";
import ReactBtnGhost from "../container/ReactContainer/button/ReactBtnGhost";
import ReactBtnLink from "../container/ReactContainer/button/ReactBtnLink";
import ReactBtnOutline from "../container/ReactContainer/button/ReactBtnOutline";
import ReactDestBtn from "../container/ReactContainer/button/ReactDestBtn";
import ReactIconBtn from "../container/ReactContainer/button/ReactIconBtn";
import Button from "../Design/Button";
import DestructiveButton from "../Design/DestructiveButton";
import GhostButton from "../Design/GhostButton";
import IconButton from "../Design/IconButton";
import LinkButton from "../Design/LinkButton";
import OutlineButton from "../Design/OutlineButton";
import ShadowButton from "../Design/ShadowButton";
import WithIconButton from "../Design/WithIconButton";
import HtmlBtnWithIcon from "../container/HtmlContainer/button/HtmlBtnWithIcon";
import CssWithIconBtn from "../container/CssContainer/button/CssWithIconbtn";
import ReactWithIconBtn from "../container/ReactContainer/button/ReactWithIconBtn";

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
    PreviewComponent: Button,
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
  {
    title: "With Icon",
    copyCode: `import React from "react";
    
    const WithIconButton = () => {
      return (
        <button className="flex items-center px-3 py-2 space-x-3 transition duration-300 ease-in-out transform rounded-lg shadow-md text-black/90 bg-gray-50 hover:bg-gray-300 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
    
          <span className="font-semibold">Add Item</span>
        </button>
      );
    };
    
    export default WithIconButton;
    
        `,
    PreviewComponent: WithIconButton,
    codeComponents: [
      <HtmlBtnWithIcon />,
      <CssWithIconBtn />,
      <ReactWithIconBtn />,
    ],
  },
];

export default buttonSections;
