import React, { useState } from "react";

interface CodeContainerProps {
  tabs: string[]; // List of tab names
  components: React.ReactNode[]; // List of corresponding components for each tab
}

const CodeContainer: React.FC<CodeContainerProps> = ({ tabs, components }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]); // Set default active tab to first tab

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
          {tabs.map((tab, index) => (
            <div
              id={String(index)}
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center font-semibold text-sm gap-2 px-5 py-2.5 rounded-lg ${
                activeTab === tab ? "bg-zinc-800" : ""
              } cursor-pointer`}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      <div id="container">
        {/* Render the component corresponding to the active tab */}
        {components[tabs.indexOf(activeTab)]}
      </div>
    </div>
  );
};

export default CodeContainer;
