import React, { useState } from "react";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { MdSlideshow } from "react-icons/md";
import { BiPaste } from "react-icons/bi";
import PreviewContainer from "../container/PreviewContainer";
import CodeContainer from "../container/CodeContainer";
import PasteContainer from "../container/PasteContainer";
import TabContainer from "../shared/TabContainer";
import buttonSections from "../utils/buttonSections";

const Button: React.FC = () => {
  return (
    <div className="min-h-screen px-3">
      <div id="intro">
        <h1 className="mb-2 text-3xl font-bold">Button</h1>
        <p className="text-zinc-400">
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
