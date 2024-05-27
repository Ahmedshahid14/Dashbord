import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import TrafficSummary from "./TrafficSummary";
import TrafficPerASNIP from "./TrafficPerASNIP";
import TrafficPerPort from "./TrafficPerPort";
import TrafficSnapshot from "./TrafficSnapshot";
import TrafficTopMax from "./TrafficTopMax";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Traffic Summary");

  const tabs = [
    "Traffic Summary",
    "Traffic Per ASN / IP",
    "Traffic Per Port",
    "Traffic Snapshot",
    "Traffic Top Max",
  ];

  const nextTab = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Traffic Summary":
        return <TrafficSummary goToNextTab={nextTab} />;
      case "Traffic Per ASN / IP":
        return <TrafficPerASNIP goToNextTab={nextTab}/>;
      case "Traffic Per Port":
        return <TrafficPerPort goToNextTab={nextTab}/>;
      case "Traffic Snapshot":
        return <TrafficSnapshot />;
      case "Traffic Top Max":
        return <TrafficTopMax />;
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

export default Tabs;
