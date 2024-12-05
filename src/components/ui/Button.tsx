import React, { useState } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { MdSlideshow } from "react-icons/md";
import PreviewContainer from "../container/PreviewContainer";
import CodeContainer from "../container/CodeContainer";
import Btn from "../Design/Button";
import { BiPaste } from "react-icons/bi";
import PasteContainer from "../container/PasteContainer";

const Button: React.FC = () => {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <div className="min-h-screen px-3">
      <div id="intro">
        <h1 className="mb-1.5 text-3xl font-bold">Button</h1>
        <p className="text-zinc-300">
          An interactive element for triggering actions.
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
          <PreviewContainer className={"h-[50vh]"}>
            <Btn />
          </PreviewContainer>
        )}

        {activeTab === "code" && <CodeContainer />}
        {activeTab === "paste" && <PasteContainer />}
      </div>
    </div>
  );
};

export default Button;
