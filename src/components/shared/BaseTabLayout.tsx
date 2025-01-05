import React, { ReactNode, useState } from "react";
import SocialLinks from "./SocialLinks";

interface Tab {
  label: string;
  icon: ReactNode;
  key: string;
}

interface BaseTabLayoutProps {
  title: string;
  description: string;
  tabs: Tab[];
  content: { [key: string]: ReactNode };
}

const BaseTabLayout: React.FC<BaseTabLayoutProps> = ({
  title,
  description,
  tabs,
  content,
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <div id="main-tab-layout" className="min-h-screen px-3">
      <div id="intro">
        <h1 className="mb-1.5 text-3xl font-bold">{title}</h1>
        <p className="text-zinc-300">{description}</p>
      </div>

      <div
        id="tabs-container"
        className="flex items-start justify-between gap-5 mt-14"
      >
        <div id="left-tab-container" className="flex gap-2">
          {tabs.map((tab) => (
            <div
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center font-semibold text-sm gap-2 px-5 py-2.5 rounded-lg ${
                activeTab === tab.key ? "bg-zinc-800" : ""
              } cursor-pointer`}
            >
              {tab.icon} {tab.label}
            </div>
          ))}
        </div>
        <div id="right-tab-container">
          <SocialLinks />
        </div>
      </div>

      <div id="container" className="mt-10">
        {content[activeTab]}
      </div>
    </div>
  );
};

export default BaseTabLayout;
