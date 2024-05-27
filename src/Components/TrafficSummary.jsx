import React, { useState, useRef, useEffect } from "react";
import { FaArrowRight, FaCaretDown, FaCaretUp } from "react-icons/fa";

const TrafficSummary = ({ goToNextTab }) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("Last 1hr");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const timeRanges = [
    "Last 1hr",
    "Last 2hr",
    "Last 6hr",
    "Yesterday",
    "Today",
    "Week",
    "Month",
    "Year",
  ];

  const handleSelect = (option) => {
    setSelectedTimeRange(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 place-content-center shadow rounded bg-white py-5 px-3">
        <div className="flex justify-start flex-col" ref={dropdownRef}>
          <div
            className="mt-1 custom-select  border w-72 pl-3 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md cursor-pointer flex justify-between items-center"
            onClick={toggleDropdown}
          >
            {selectedTimeRange}
            {isOpen ? <FaCaretUp /> : <FaCaretDown />}
          </div>
          {isOpen && (
            <div className="absolute top-[27%] z-10 mt-1 w-72 bg-white shadow-lg border border-gray-300 rounded-md">
              {timeRanges.map((option, index) => (
                <div
                  key={index}
                  className={`px-3 py-2 cursor-pointer ${
                    selectedTimeRange === option
                      ? "bg-orange-200"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-end justify-end">
          <button
            className="bg-[#F56B3F] hover:bg-[#fef0ec] hover:text-[#F56B3F] border-2 hover:border-[#F56B3F] flex items-center text-white gap-2 px-5 py-2 rounded"
            onClick={goToNextTab}
          >
            Next <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-1 mt-5 lg:grid-cols-2 gap-5 place-content-center">
        <div className="bg-white h-80 shadow rounded">
          <div className="border py-3 px-3">
            <h2 className="font-bold">Top Traffic by Incoming</h2>
          </div>
          <div className="contant flex items-center py-3 mt-3 px-3 justify-between bg-[#F0F1F3]">
            <p className="text-start">Total Traffic</p>
            <p className="text-end">0 byte</p>
          </div>
        </div>
        <div className="bg-white h-80 shadow rounded">
          <div className="border py-3 px-3">
            <h2 className="font-bold">Top Traffic by Outgoing</h2>
          </div>
          <div className="contant flex items-center py-3 mt-3 px-3 justify-between bg-[#F0F1F3]">
            <p className="text-start">Total Traffic</p>
            <p className="text-end">0 byte</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrafficSummary;
