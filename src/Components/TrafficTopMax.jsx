import React, { useState, useRef, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import GeneralTab from "./GeneralTab";
import AdvanceTab from "./AdvanceTab";
import BaselineTab from "./BaselineTab";
import { FaArrowRight, FaCaretDown, FaCaretUp } from "react-icons/fa";

const Dropdown = ({ label, options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col relative" ref={ref}>
      <label className="flex items-center text-sm font-medium text-gray-700">
        <FaInfoCircle className="mr-2" />
        {label}
      </label>
      <div
        className="mt-1  border w-full pl-3 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md cursor-pointer flex justify-between items-center"
        onClick={toggleDropdown}
      >
        {selected}
        {isOpen ? <FaCaretUp /> : <FaCaretDown />}
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 top-[100%] w-full bg-white shadow-lg border border-gray-300 rounded-md">
          {options.map((option, index) => (
            <div
              key={index}
              className={`px-3 py-2 cursor-pointer ${selected === option ? 'bg-orange-200' : 'hover:bg-gray-100'}`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const TrafficTopMax = () => {
  const timeRanges = ["Last 1hr", "Last 2hr", "Last 6hr", "Yesterday", "Today", "Week", "Month", "Year"];
  const incomingOptions = ["Incoming"];

  const Hostgroup = [
    { Host: "82.129.21.233", HostgroupValue: "351Mbps" },
  ];

  const [selectedTimeRange, setSelectedTimeRange] = useState(timeRanges[0]);
  const [selectedIncoming, setSelectedIncoming] = useState(incomingOptions[0]);
  const [selectedTab, setSelectedTab] = useState("General");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedHost, setSelectedHost] = useState(null);

  const handleViewClick = (host) => {
    setSelectedHost(host);
    setShowPopup(true);
  };

  const closeModal = () => {
    setShowPopup(false);
    setSelectedHost(null);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <div className="flex justify-end my-3">
        <div className="grid grid-cols-3 gap-2">
          {["General", "Advance", "Baseline"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`p-2 text-[14px] font-bold rounded ${
                selectedTab === tab ? "bg-[#F56B3F] text-white" : "bg-[#fff] text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white shadow rounded p-3">
        <h2 className="text-[18px] font-bold">Top Max History</h2>
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-2 gap-10 mt-5">
            <Dropdown
              label="Time Range"
              options={timeRanges}
              selected={selectedTimeRange}
              onChange={setSelectedTimeRange}
            />
            <Dropdown
              label="Incoming"
              options={incomingOptions}
              selected={selectedIncoming}
              onChange={setSelectedIncoming}
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <button className="text-[#FF3333] flex justify-center rounded items-center px-3 py-2 bg-[#ffebeb]">
            <FaRegTrashCan />
            Clear old
          </button>
          <button className="text-white flex justify-center rounded items-center px-3 py-2 bg-[#FF3333]">
            <FaRegTrashCan />
            Flush history
          </button>
        </div>
      </div>
      <div className="mt-5">
        {selectedTab === "General" && <GeneralTab />}
        {selectedTab === "Advance" && <AdvanceTab />}
        {selectedTab === "Baseline" && <BaselineTab />}
      </div>
    </>
  );
};

export default TrafficTopMax;
