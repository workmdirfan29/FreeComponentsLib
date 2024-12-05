import React, { useState } from "react";
import HtmlBtn from "./HtmlContainer/HtmlBtn";
import CssBtn from "./CssContainer/CssBtn";
import ReactBtn from "./ReactContainer/ReactBtn";

const CodeContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState("html");

  return (
    <div
      id="preview-container"
      className="relative w-full h-screen p-2 mt-2 rounded-lg"
    >
      <div
        id="tabs-container"
        className="flex items-center justify-center gap-5 border-b-2 border-zinc-900"
      >
        <div id="tab-wrapper" className="flex gap-2 mb-2">
          <div
            id="tab-1"
            onClick={() => setActiveTab("html")}
            className={`flex items-center font-semibold text-sm gap-2 px-5 py-2.5 rounded-lg ${
              activeTab === "html" ? "bg-zinc-800" : ""
            } cursor-pointer`}
          >
            Html
          </div>
          <div
            id="tab-2"
            onClick={() => setActiveTab("css")}
            className={`flex items-center font-semibold text-sm gap-2 px-5 py-2.5 rounded-lg ${
              activeTab === "css" ? "bg-zinc-800" : ""
            } cursor-pointer`}
          >
            CSS
          </div>
          <div
            id="tab-3"
            onClick={() => setActiveTab("reactjs")}
            className={`flex items-center font-semibold text-sm gap-2 px-5 py-2.5 rounded-lg ${
              activeTab === "reactjs" ? "bg-zinc-800" : ""
            } cursor-pointer`}
          >
            React
          </div>
        </div>
      </div>

      <div id="container">
        {activeTab === "html" && <HtmlBtn />}
        {activeTab === "css" && <CssBtn />}
        {activeTab === "reactjs" && <ReactBtn />}
      </div>
    </div>
  );
};

export default CodeContainer;
