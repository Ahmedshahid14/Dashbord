import React, { useState, useEffect, useRef } from 'react';
import { IoIosClose } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaEdit, FaNetworkWired, FaTrashAlt } from "react-icons/fa";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center  bg-[#FBFBFC] py-3 px-4 text-[18px] w-full rounded-md "
        >
          <FiSettings />
          <IoMdArrowDropdown />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute z-10 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              <FaEdit className="mr-3 h-5 w-5 text-[#F56B3F] group-hover:text-gray-500" />
              Edit
            </a>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              <FaNetworkWired className="mr-3 h-5 w-5 text-gray-500 group-hover:text-gray-900" />
              Network
            </a>
            <a
              href="#"
              className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              <FaTrashAlt className="mr-3 h-5 w-5 text-gray-500 group-hover:text-gray-900" />
              Remove
            </a>
          </div>
        </div>
      )}
    </div>
  );
};


const ToggleSwitch = ({ isChecked, onChange }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="sr-only peer"
      />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-[#F2F4F7] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
    </label>
  );
};

const HostGroupTable = [
  {
    Enable_ban: "Disable",
    Calc_Method: "Per_host",
    Name: "Global",
    Thresholdmbps: "1000",
    Thresholdpps: "1000",
    ThresholdFlows: "3500",
    Networks: "0",
  },
  {
    Enable_ban: "Active",
    Calc_Method: "Per_host",
    Name: "Global",
    Thresholdmbps: "1000",
    Thresholdpps: "1000",
    ThresholdFlows: "3500",
    Networks: "0",
  },
  {
    Enable_ban: "Disable",
    Calc_Method: "Per_host",
    Name: "Global",
    Thresholdmbps: "1000",
    Thresholdpps: "1000",
    ThresholdFlows: "3500",
    Networks: "0",
  },
  {
    Enable_ban: "Active",
    Calc_Method: "Per_host",
    Name: "Global",
    Thresholdmbps: "1000",
    Thresholdpps: "1000",
    ThresholdFlows: "3500",
    Networks: "0",
  },
];
const HostGroupPopup = ({ onClose }) => {
  const [isCheckedGeneralBan3, setIsCheckedGeneralBan3] = useState(false);
  const [isCheckedRemoteHost, setIsCheckedRemoteHost] = useState(false);

  const handleToggleGeneralBan3 = () =>
    setIsCheckedGeneralBan3(!isCheckedGeneralBan3);
  const handleToggleRemoteHost = () =>
    setIsCheckedRemoteHost(!isCheckedRemoteHost);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[80%] h-[90%] p-5 rounded shadow-lg overflow-y-scroll">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-bold">Host Group</h2>
          <button onClick={onClose} className="text-[24px]">
            <IoIosClose />
          </button>
        </div>
        <div className="grid grid-cols-3 mt-3 items-center">
          <div className="flex gap-3 col-span-2 items-center">
            <span className="text-[18px]">
              Enable Total Hostgroup Mode(set main
              enable_total_hostgroup_counters)
            </span>
          </div>
          <div className="flex items-center justify-end">
            <ToggleSwitch
              isChecked={isCheckedRemoteHost}
              onChange={handleToggleRemoteHost}
            />
          </div>
        </div>
        <div className="grid grid-cols-1  border-b  mt-3 items-center">
          <div className="flex items-center">
            <span className="text-[18px] py-4">
              Scan Mode Scheduler Settings
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-3 items-center">
          <div className="flex gap-2 items-center">
            <span className="text-[18px]">Enable Scanning Mode</span>
          </div>
          <div className="flex items-center justify-end">
            <ToggleSwitch
              isChecked={isCheckedGeneralBan3}
              onChange={handleToggleGeneralBan3}
            />
          </div>
        </div>
        <h2 className="text-[18px] font-bold mt-3 border-b py-4">
          Host Groups in RAW{" "}
        </h2>
        <table className="w-full table-auto mt-4">
          <thead>
            <tr className="bg-[#F9F9FC]">
              <th className="py-4 px-4 text-[14px] text-start">Enable_ban</th>
              <th className="py-4 px-4 text-[14px] text-start">Calc. Method</th>
              <th className="py-4 px-4 text-[14px] text-start">Name</th>
              <th className="py-4 px-4 text-[14px] text-start">
                Threshold mbps
              </th>
              <th className="py-4 px-4 text-[14px] text-start">
                Threshold pps
              </th>
              <th className="py-4 px-4 text-[14px] text-start">
                Threshold Flows
              </th>
              <th className="py-4 px-4 text-[14px] text-start">Networks</th>
              <th className="py-4 px-4 text-[14px] text-start">Networks</th>
            </tr>
          </thead>
          <tbody>
            {HostGroupTable.map((host, index) => (
              <tr key={index}>
                <td
                  className={
                    host.Enable_ban === "Disable"
                      ? "text-[#FF3333] py-4 px-4 text-[14px] text-start"
                      : "text-[#0D894F] py-4 px-4 text-[14px] text-start"
                  }
                >
                  {host.Enable_ban}
                </td>
                <td className="py-4 px-4 text-[14px] text-start">
                  {host.Calc_Method}
                </td>
                <td className="py-4 px-4 text-[14px] text-start">
                  {host.Name}
                </td>
                <td className="py-4 px-4 text-[14px] text-start">
                  {host.Thresholdmbps}
                </td>
                <td className="py-4 px-4 text-[14px] text-start">
                  {host.Thresholdpps}
                </td>
                <td className="py-4 px-4 text-[14px] text-start">
                  {host.ThresholdFlows}
                </td>
                <td className="py-4 px-4 text-[14px] text-start">
                  {host.Networks}
                </td>
                <td className="py-4 px-4 text-[14px] text-start">
                  <DropdownMenu />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HostGroupPopup;
