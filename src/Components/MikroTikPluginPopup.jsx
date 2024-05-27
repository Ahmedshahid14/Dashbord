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

const MikroTikPluginPopup = ({ onClose }) => {
  const BGPTable = [
    {
      Status: "Active",
      Name: "SCBGP",
      local_asn: "65001",
      local_address: "185.44.119.182",
      remote_asn: "207811",
      remote_address: "89.221.39.11",
      multihop: "Active",
    },
  ];
  const [isCheckedRemoteHost, setIsCheckedRemoteHost] = useState(false);

  const handleToggleRemoteHost = () =>
    setIsCheckedRemoteHost(!isCheckedRemoteHost);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[80%]  p-5 rounded shadow-lg ">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-bold">MikroTik Plugin Settings </h2>
          <button onClick={onClose} className="text-[24px]">
            <IoIosClose />
          </button>
        </div>
        <h2 className="text-[18px] font-bold mt-3">BGP Settings</h2>
        <div className="grid grid-cols-3 mt-3 border-b pb-5 items-center">
          <div className="flex gap-2 col-span-2 items-center">
            <span className="text-[18px]">Enable Plugin</span>
            <p className="text-[18px] text-[#F56B3F]">(via API)</p>
          </div>
          <div className="flex items-center justify-end">
            <ToggleSwitch
              isChecked={isCheckedRemoteHost}
              onChange={handleToggleRemoteHost}
            />
          </div>
        </div>
        <div className="flex items-center border-b pb-4 gap-2 mt-3">
          <h2 className="text-[18px] font-bold">MikroTik Routers</h2>
          <div className=" flex items-center gap-2 border rounded p-2">
            <button className="p-1 rounded text-white bg-[#F56B3F]">
              <GoPlus />
            </button>
            <span>Add new User</span>
          </div>
        </div>
        <table className="w-full border-b table-auto mt-5">
          <thead>
            <tr className="bg-[#F9F9FC]">
              <th className="text-[14px] py-4 px-2 text-start">Status</th>
              <th className="text-[14px] py-4 px-2 text-start">Name</th>
              <th className="text-[14px] py-4 px-2 text-start">local_asn</th>
              <th className="text-[14px] py-4 px-2 text-start">
                local_address
              </th>
              <th className="text-[14px] py-4 px-2 text-start">remote_asn</th>
              <th className="text-[14px] py-4 px-2 text-start">
                remote_address
              </th>
              <th className="text-[14px] py-4 px-2 text-start">multihop</th>
              <th className="text-[14px] py-4 px-2 text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            {BGPTable.map((BGP, index) => (
              <tr key={index}>
                <td
                  className={
                    BGP.Status == "Active"
                      ? "text-[#0D894F] text-[14px] border py-4 px-2 text-start"
                      : "text-[#FF3333] text-[14px] border py-4 px-2 text-start"
                  }
                >
                  {BGP.Status}
                </td>
                <td className="text-[14px] py-4 px-2 border  text-start">
                  {BGP.Name}
                </td>
                <td className="text-[14px] py-4 px-2 border  text-start">
                  {BGP.local_asn}
                </td>
                <td className="text-[14px] py-4 px-2 border  text-start">
                  {BGP.local_address}
                </td>
                <td className="text-[14px] py-4 px-2 border  text-start">
                  {BGP.remote_asn}
                </td>
                <td className="text-[14px] py-4 px-2 border  text-start">
                  {BGP.remote_address}
                </td>
                <td
                  className={
                    BGP.multihop === "Active"
                      ? "text-[#0D894F] text-[14px]  border py-4 px-2 text-start"
                      : "text-[#FF3333] text-[14px]  border py-4 px-2 text-start"
                  }
                >
                  {BGP.multihop}
                </td>
                <td className="flex gap-4 items-center border  py-4 px-2 text-start">
                  <button className="text-[#016FE3] bg-[#E6F1FC] px-4 py-2">
                    Edit
                  </button>
                  <button className="text-[#FF3333] bg-[#FFEBEB] px-4 py-2">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MikroTikPluginPopup;
