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

const ScrubbingModePopup = ({ onClose }) => {
  const [isCheckedGeneralBan, setIsCheckedGeneralBan] = useState(false);
  const [isCheckedASN, setIsCheckedASN] = useState(false);
  const [isCheckedGeneralBan2, setIsCheckedGeneralBan2] = useState(false);
  const [isCheckedGeneralBan3, setIsCheckedGeneralBan3] = useState(false);
  const [isCheckedRemoteHost, setIsCheckedRemoteHost] = useState(false);

  const handleToggleGeneralBan = () =>
    setIsCheckedGeneralBan(!isCheckedGeneralBan);
  const handleToggleASN = () => setIsCheckedASN(!isCheckedASN);
  const handleToggleGeneralBan2 = () =>
    setIsCheckedGeneralBan2(!isCheckedGeneralBan2);
  const handleToggleGeneralBan3 = () =>
    setIsCheckedGeneralBan3(!isCheckedGeneralBan3);
  const handleToggleRemoteHost = () =>
    setIsCheckedRemoteHost(!isCheckedRemoteHost);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[80%]  p-5 rounded shadow-lg ">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-bold">Scrubbing Mode</h2>
          <button onClick={onClose} className="text-[24px]">
            <IoIosClose />
          </button>
        </div>
        <h2 className="text-[18px] font-bold mt-3">General Settings: </h2>
        <p className="text-[18px] text-[#667085]">
          In order to use Scrubbing mode, BGP Peers must be configured and
          working
        </p>
        <h2 className="text-[18px] font-bold mt-3">BGP Settings</h2>
        <div className="grid grid-cols-2 mt-3 items-center">
          <div className="flex gap-2 items-center">
            <span className="text-[18px]">Enable General BGP Support</span>
            <p className="text-[18px] text-[#F56B3F]">(set main gobgp)</p>
          </div>
          <div className="flex items-center justify-end">
            <ToggleSwitch
              isChecked={isCheckedGeneralBan}
              onChange={handleToggleGeneralBan}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 mt-3 items-center">
          <div className="flex gap-2 col-span-2 items-center">
            <span className="text-[18px]">
              Enable announces attacked host IPv4
            </span>
            <p className="text-[18px] text-[#F56B3F]">
              (set main gobgp_announce_host)
            </p>
          </div>
          <div className="flex items-center justify-end">
            <ToggleSwitch isChecked={isCheckedASN} onChange={handleToggleASN} />
          </div>
        </div>

        <div className="grid grid-cols-3 mt-3 items-center">
          <div className="flex gap-2 col-span-2 items-center">
            <span className="text-[18px]">
              Enable announces attacked host IPv6
            </span>
            <p className="text-[18px] text-[#F56B3F]">
               (set main gobgp_announce_host_ipv6)
            </p>
          </div>
          <div className="flex items-center justify-end">
            <ToggleSwitch
              isChecked={isCheckedGeneralBan2}
              onChange={handleToggleGeneralBan2}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 mt-3 items-center">
          <div className="flex gap-2 col-span-2 items-center">
            <span className="text-[18px]">
              Enable announces whole subnet IPv4
            </span>
            <p className="text-[18px] text-[#F56B3F]">
              (set main gobgp_announce_whole_subnet)
            </p>
          </div>
          <div className="flex items-center justify-end">
            <ToggleSwitch
              isChecked={isCheckedRemoteHost}
              onChange={handleToggleRemoteHost}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 mt-3 border-b pb-5 items-center">
          <div className="flex gap-2 col-span-2 items-center">
            <span className="text-[18px]">
              Enable announces whole subnet IPv6
            </span>
            <p className="text-[18px] text-[#F56B3F]">
              (set main gobgp_announce_whole_subnet_ipv6)
            </p>
          </div>
          <div className="flex items-center justify-end">
            <ToggleSwitch
              isChecked={isCheckedGeneralBan3}
              onChange={handleToggleGeneralBan3}
            />
          </div>
        </div>
        <h2 className="text-[18px] font-bold mt-3">
          Blackhole Scrubbing Center Community IPv4:
        </h2>
        <div className="grid grid-cols-1 gap-x-32  items-start">
          <div className="flex flex-col mt-2">
            <div className="relative flex flex-col w-full">
              <label className="text[#667085]">
                Blackhole Scrubbing Center Community
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded p-2 pr-12 focus:outline-none focus:ring-2"
                defaultValue="65535:666"
              />
              <button className="absolute right-2 top-[52%] transform -translate-y-1/2 bg-[#F56B3F] rounded text-white p-1">
                <GoPlus />
              </button>
              <span className="text-[#F80202] text-[14px]">Please use only 16 bit ASN numbers (65535) for communities her</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrubbingModePopup;
