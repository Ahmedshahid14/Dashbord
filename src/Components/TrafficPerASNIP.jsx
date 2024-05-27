import React, { useState, useRef, useEffect } from "react";
import { FaInfoCircle, FaArrowRight, FaCaretDown, FaCaretUp } from "react-icons/fa";
import TrafficChart from "./TrafficChart";

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
        className="mt-1 border w-full pl-3 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md cursor-pointer flex justify-between items-center"
        onClick={toggleDropdown}
      >
        {selected}
        {isOpen ? <FaCaretUp /> : <FaCaretDown />}
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full top-[100%] bg-white shadow-lg border border-gray-300 rounded-md">
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

const TrafficPerASNIP = ({ goToNextTab }) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("Last 1hr");
  const [selectedMode, setSelectedMode] = useState("Mbps");
  const [selectedGroupBy, setSelectedGroupBy] = useState("General Traffic");
  const [selectedRequest, setSelectedRequest] = useState("General Traffic");

  const timeRanges = ["Last 1hr", "Last 2hr", "Last 6hr", "Yesterday", "Today", "Week", "Month", "Year"];
  const modes = ["Mbps", "Gbps"];
  const groupBys = ["General Traffic", "Specific Traffic"];
  const requests = ["General Traffic", "Specific Request"];

  return (
    <>
      <div className="bg-white shadow rounded py-5 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Dropdown
            label="Time Range"
            options={timeRanges}
            selected={selectedTimeRange}
            onChange={setSelectedTimeRange}
          />
          <Dropdown
            label="Mode"
            options={modes}
            selected={selectedMode}
            onChange={setSelectedMode}
          />
          <Dropdown
            label="Group by"
            options={groupBys}
            selected={selectedGroupBy}
            onChange={setSelectedGroupBy}
          />
          <Dropdown
            label="Request"
            options={requests}
            selected={selectedRequest}
            onChange={setSelectedRequest}
          />
        </div>
        <div className="mt-4 flex justify-end">
          <button onClick={goToNextTab} className="bg-[#F56B3F] hover:bg-[#fef0ec] hover:text-[#F56B3F] border-2 hover:border-[#F56B3F] flex items-center text-white gap-2 px-5 py-2 rounded">
            Next <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="py-5" style={{ maxWidth: '100%', maxHeight: '100px' }}>
        <TrafficChart />
      </div>
    </>
  );
};

export default TrafficPerASNIP;
