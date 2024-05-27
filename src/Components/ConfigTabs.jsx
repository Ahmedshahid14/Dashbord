import React, { useState } from "react";
import ConfigGeneralTabs from "./ConfigGeneralTabs";
import ConfigMainTabs from "./ConfigMainTabs";
import ConfigCountersTabs from "./ConfigCountersTabs";
import ConfigBGPTabs from "./ConfigBGPTabs";


const ConfigTabs = () => {
  const [activeTab, setActiveTab] = useState("General");

  const tabs = [
    "General",
    "Main",
    "Counters",
    "BGP",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "General":
        return <ConfigGeneralTabs/>;
      case "Main":
        return <ConfigMainTabs/>;
      case "Counters":
        return <ConfigCountersTabs />;
      case "BGP":
        return <ConfigBGPTabs />;
      default:
        return null;
    }
  };

  return (
    <div>
        <h2 className="font-bold text-[18px]">Config View</h2>
      <div className="flex mt-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 -mb-px border-b border-gray-300 transition-colors duration-200 focus:outline-none ${
              activeTab === tab
                ? "text-orange-500 bg-[#f2e5e0] border-orange-500 border-b-2"
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-5">{renderContent()}</div>
    </div>
  );
};

export default ConfigTabs;
