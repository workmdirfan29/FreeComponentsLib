import React, { useState } from "react";
import { BiPaste } from "react-icons/bi";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { MdSlideshow } from "react-icons/md";
import PreviewContainer from "../container/PreviewContainer";
import CodeContainer from "../container/CodeContainer";
import PasteContainer from "../container/PasteContainer";
import AspRatio from "../Design/AspectRatio";

import HtmlAspect from "../container/HtmlContainer/HtmlAspect";
import CssAspect from "../container/CssContainer/CssAspect";
import ReactAspect from "../container/ReactContainer/ReactAspect";

const AspectRatio: React.FC = () => {
  const [activeTab, setActiveTab] = useState("preview");
  const copyCode = `import React from "react";
import AspRat from "../../assets/AspRat.jpg";

const AspectRatio = () => {
  return (
    <div className="relative w-full h-full p-2 aspect-w-16 aspect-h-9">
      {/* Use url */}
      {/* <img
        className="object-cover w-full h-full rounded-lg"
        src="https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="A computer in a room"
      /> */}

      {/* Use downloaded Image */}

      <img
        className="object-cover w-full h-full rounded-lg"
        src={AspRat}
        alt="A computer in a room"
      />
    </div>
  );
};

export default AspectRatio;

`;

  return (
    <div className="min-h-screen px-3">
      <div id="intro">
        <h1 className="mb-1.5 text-3xl font-bold">Aspect Ratio</h1>
        <p className="text-zinc-300">
          Keeps content in a consistent size ratio.
        </p>
      </div>
      <div
        id="tabs-container"
        className="flex items-start justify-between gap-5 mt-14"
      >
        <div id="left-tab-container" className="flex gap-2">
          <div
            id="tab-1"
            onClick={() => setActiveTab("preview")}
            className={`flex items-center font-semibold text-sm gap-2 px-5 py-2.5 rounded-lg ${
              activeTab === "preview" ? "bg-zinc-800" : ""
            } cursor-pointer`}
          >
            <MdSlideshow size={15} /> Preview
          </div>
          <div
            id="tab-2"
            onClick={() => setActiveTab("code")}
            className={`flex items-center font-semibold text-sm gap-2 px-5 py-2.5 rounded-lg ${
              activeTab === "code" ? "bg-zinc-800" : ""
            } cursor-pointer`}
          >
            <HiOutlineCommandLine size={15} /> Code
          </div>
          <div
            id="tab-2"
            onClick={() => setActiveTab("paste")}
            className={`flex items-center font-semibold text-sm gap-2 px-5 py-2.5 rounded-lg ${
              activeTab === "paste" ? "bg-zinc-800" : ""
            } cursor-pointer`}
          >
            <BiPaste size={15} /> Paste to check
          </div>
        </div>
        <div id="right-tab-container">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/workmdirfan29/FreeComponentsLib"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg transition-all hover:underline text-zinc-100 hover:text-sky-500"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://x.com/mdirfan_23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg transition-all hover:underline text-zinc-100 hover:text-sky-500"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
      <div id="container">
        {activeTab === "preview" && (
          <PreviewContainer
            copyCode={copyCode}
            btnZidx={"z-20 bg-zinc-900 top-5"}
            className={"h-[70vh]"}
          >
            <AspRatio />
          </PreviewContainer>
        )}

        {activeTab === "code" && (
          <CodeContainer
            tabs={["html", "css", "reactjs"]}
            components={[<HtmlAspect />, <CssAspect />, <ReactAspect />]}
          />
        )}
        {activeTab === "paste" && <PasteContainer />}
      </div>
    </div>
  );
};

export default AspectRatio;
