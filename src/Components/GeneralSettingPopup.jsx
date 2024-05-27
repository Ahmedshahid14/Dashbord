import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { AiOutlineSearch } from "react-icons/ai";

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

const GeneralSettingPopup = ({ onClose }) => {
  const [isCheckedGeneralBan, setIsCheckedGeneralBan] = useState(false);
  const [isCheckedASN, setIsCheckedASN] = useState(false);
  const [isCheckedGeneralBan2, setIsCheckedGeneralBan2] = useState(false);
  const [isCheckedGeneralBan3, setIsCheckedGeneralBan3] = useState(false);
  const [isCheckedGeneralBan4, setIsCheckedGeneralBan4] = useState(false);
  const [isCheckedRemoteHost, setIsCheckedRemoteHost] = useState(false);

  const handleToggleGeneralBan = () =>
    setIsCheckedGeneralBan(!isCheckedGeneralBan);
  const handleToggleASN = () => setIsCheckedASN(!isCheckedASN);
  const handleToggleGeneralBan2 = () =>
    setIsCheckedGeneralBan2(!isCheckedGeneralBan2);
  const handleToggleGeneralBan3 = () =>
    setIsCheckedGeneralBan3(!isCheckedGeneralBan3);
  const handleToggleGeneralBan4 = () =>
    setIsCheckedGeneralBan4(!isCheckedGeneralBan4);
  const handleToggleRemoteHost = () =>
    setIsCheckedRemoteHost(!isCheckedRemoteHost);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[80%] h-[90%] p-5 rounded shadow-lg overflow-y-scroll">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-bold">General Setting</h2>
          <button onClick={onClose} className="text-[24px]">
            <IoIosClose />
          </button>
        </div>
        <h2 className="text-[18px] font-bold mt-3">General Services</h2>

        <div className="grid grid-cols-2 mt-3 items-center">
          <div className="flex gap-2 items-center">
            <span className="text-[18px]">Enable General Ban</span>
            <p className="text-[18px] text-[#F56B3F]">(set main enable_ban)</p>
          </div>
          <div className="flex items-center justify-end">
            <ToggleSwitch
              isChecked={isCheckedGeneralBan}
              onChange={handleToggleGeneralBan}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 mt-3 items-center">
          <div className="flex gap-2 items-center">
            <span className="text-[18px]">Enable ASN Counter</span>
            <p className="text-[18px] text-[#F56B3F]">
              (set main enable_asn_counters)
            </p>
          </div>
          <div className="flex items-center justify-end">
            <ToggleSwitch isChecked={isCheckedASN} onChange={handleToggleASN} />
          </div>
        </div>

        <div className="grid grid-cols-2 mt-3 items-center">
          <div className="flex gap-2 items-center">
            <span className="text-[18px]">Enable General Ban</span>
            <p className="text-[18px] text-[#F56B3F]">(set main enable_ban)</p>
          </div>
          <div className="flex items-center justify-end">
            <ToggleSwitch
              isChecked={isCheckedGeneralBan2}
              onChange={handleToggleGeneralBan2}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 mt-3 items-center">
          <div className="flex gap-2 items-center">
            <span className="text-[18px]">Enable Remote Host Tracking</span>
            <p className="text-[18px] text-[#F56B3F]">
              (set main remote_host_tracking)
            </p>
          </div>
          <div className="flex items-center justify-end">
            <ToggleSwitch
              isChecked={isCheckedRemoteHost}
              onChange={handleToggleRemoteHost}
            />
          </div>
          <div className="flex flex-col mt-4">
            <div className="relative">
              <input
                type="number"
                className="border border-gray-300 rounded p-2 pr-10 focus:outline-none focus:ring-2"
                defaultValue="1000"
              />
              <input
                type="checkbox"
                className="absolute left-[38%] top-[50%] transform -translate-y-1/2 h-4 w-4 bg-[#F9F5FF] text-red-500 focus:ring-red-500 border-gray-300 rounded"
              />
            </div>
            <label className="mt-1 text-sm text-gray-600">
              Ban time in seconds
            </label>
          </div>
        </div>
        <h2 className="text-[18px] font-bold mt-3 border-b py-3">
          Traffic Reports
        </h2>
        <div className="grid grid-cols-2 mt-3 items-center">
          <div className="flex gap-2 items-center">
            <span className="text-[18px]">
              Enable Auto Calculate Thresholds Daemon
            </span>
          </div>
          <div className="flex items-center justify-end">
            <ToggleSwitch
              isChecked={isCheckedGeneralBan3}
              onChange={handleToggleGeneralBan3}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 mt-3 items-center">
          <div className="flex gap-2 items-center">
            <span className="text-[18px]">
              Enable Auto Calculate Thresholds Daemon
            </span>
          </div>
          <div className="flex items-center justify-end">
            <ToggleSwitch
              isChecked={isCheckedGeneralBan4}
              onChange={handleToggleGeneralBan4}
            />
          </div>
        </div>
        <h2 className="text-[18px] font-bold mt-3 border-b py-3">Networks</h2>
        <div className="grid grid-cols-2 gap-x-32 mt-3  items-start">
          <div className="flex flex-col mt-4">
            <div className="relative flex flex-col w-full">
              <label htmlFor="">Add Network</label>
              <input
                type="number"
                className="border border-gray-300 rounded p-2 pr-12 focus:outline-none focus:ring-2"
                defaultValue="1000"
              />
              <button className="absolute right-2 top-[68%] transform -translate-y-1/2 bg-[#F56B3F] rounded text-white p-1">
                <GoPlus />
              </button>
            </div>
            <label className="mt-1 text-[14px] text-gray-600">
              Entry Network with CIDR. Add more network separate with commas
              (like csv)
            </label>
          </div>
          <div className="flex flex-col mt-4">
            <div className="relative flex flex-col w-full">
              <label htmlFor="">Get Network</label>
              <input
                type="search"
                className="border border-gray-300 rounded p-2 pr-12 focus:outline-none focus:ring-2"
                defaultValue="Get Network"
              />
              <button className="absolute right-2 top-[68%] transform -translate-y-1/2 text-[#F56B3F] p-1">
                <AiOutlineSearch />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span>37.205.112.0/24</span>
          <button className="text-[#FF3333] bg-[#FFEBEB] rounded py-2 px-4">Remove</button>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span>37.205.112.0/24</span>
          <button className="text-[#FF3333] bg-[#FFEBEB] rounded py-2 px-4">Remove</button>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span>37.205.112.0/24</span>
          <button className="text-[#FF3333] bg-[#FFEBEB] rounded py-2 px-4">Remove</button>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span>37.205.112.0/24</span>
          <button className="text-[#FF3333] bg-[#FFEBEB] rounded py-2 px-4">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettingPopup;
