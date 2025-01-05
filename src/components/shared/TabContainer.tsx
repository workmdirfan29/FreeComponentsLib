import React, { useState } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

type Tab = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

type TabContainerProps = {
  tabs: Tab[];
  activeTab?: string;
  setActiveTab?: (tabId: string) => void;
  styleCss?: string;
};

const TabContainer: React.FC<TabContainerProps> = ({
  tabs,
  activeTab: controlledActiveTab,
  setActiveTab: controlledSetActiveTab,
  styleCss = "",
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(tabs[0]?.id || "");

  const activeTab = controlledActiveTab ?? internalActiveTab;
  const setActiveTab = controlledSetActiveTab ?? setInternalActiveTab;

  const defaultLinks = [
    {
      href: "https://github.com/workmdirfan29/FreeComponentsLib",
      icon: <FaGithub size={20} />,
    },
    {
      href: "https://x.com/mdirfan_23",
      icon: <FaTwitter size={20} />,
    },
  ];

  return (
    <div
      id="tabs-container"
      className={`flex items-start justify-between gap-5 ${styleCss}`}
    >
      <div id="left-tab-container" className="flex gap-2">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`tab-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center font-semibold text-sm gap-2 px-5 py-2.5 rounded-lg ${
              activeTab === tab.id ? "bg-zinc-800" : ""
            } cursor-pointer`}
          >
            {tab.icon}
            {tab.label}
          </div>
        ))}
      </div>
      <div id="right-tab-container">
        <div className="flex items-center gap-4">
          {defaultLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg transition-all hover:underline text-zinc-100 hover:text-sky-500"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabContainer;
