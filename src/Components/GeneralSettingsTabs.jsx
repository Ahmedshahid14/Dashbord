import React, { useState } from "react";
import GeneralSettings from "./GeneralSettings";
import AdvanceSettings from "./AdvanceSettings";

const GeneralSettingsTabs = () => {
  const [activeTab, setActiveTab] = useState("General Settings");

  const tabs = [
    "General Settings",
    "Advance Settings",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "General Settings":
        return <GeneralSettings/>;
      case "Advance Settings":
        return <AdvanceSettings />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex">
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

export default GeneralSettingsTabs;
