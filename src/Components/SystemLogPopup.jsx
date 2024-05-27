import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

const FNMData = [
  {
    When: "0d 0h 27m",
    Type: "Info",
    Who: "demo@xfiber.be",
    Action:
      "Report Email Changed CMD: set email_api_notifications_enabled disable",
  },
  {
    When: "0d 0h 27m",
    Type: "Info",
    Who: "demo@xfiber.be",
    Action:
      "Report Email Changed CMD: set email_api_notifications_enabled disable",
  },
  {
    When: "0d 0h 27m",
    Type: "Info",
    Who: "demo@xfiber.be",
    Action:
      "Report Email Changed CMD: set email_api_notifications_enabled disable",
  },
  {
    When: "0d 0h 27m",
    Type: "Info",
    Who: "demo@xfiber.be",
    Action:
      "Report Email Changed CMD: set email_api_notifications_enabled disable",
  },
  {
    When: "0d 0h 27m",
    Type: "Info",
    Who: "demo@xfiber.be",
    Action:
      "Report Email Changed CMD: set email_api_notifications_enabled disable",
  },
];

const SystemLogPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[70%]  p-5 rounded shadow-lg ">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-bold">FNM Manager Logs</h2>
          <button onClick={onClose} className="text-[24px]">
            <IoIosClose />
          </button>
        </div>
        <form action="">
          <div className="grid grid-cols-2">
            <div className="flex flex-col mt-4">
              <div className="relative flex flex-col w-full">
                <input
                  type="search"
                  className="border border-gray-300 rounded p-2 pr-12 focus:outline-none focus:ring-2"
                  placeholder="Search..."
                />
                <button className="absolute right-2 top-[52%] transform -translate-y-1/2 text-[#F56B3F] p-1">
                  <AiOutlineSearch />
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="w-full mt-5">
          <div className="overflow-hidden">
            <table className="table-auto w-full">
              <thead className="bg-[#F9F9FC]">
                <tr>
                  <th className="text-sm font-bold py-2 text-left px-4">
                    When
                  </th>
                  <th className="text-sm font-bold py-2 text-left px-4">
                    Type
                  </th>
                  <th className="text-sm font-bold py-2 text-left px-4">Who</th>
                  <th className="text-sm font-bold py-2 text-left px-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="overflow-y-auto max-h-60">
                {FNMData.map((FNM, index) => (
                  <tr key={index}>
                    <td className="text-sm font-bold py-2 text-left px-4">
                      {FNM.When}
                    </td>
                    <td className="text-sm font-bold py-2 text-left px-4">
                      {FNM.Type}
                    </td>
                    <td className="text-sm font-bold py-2 text-left px-4">
                      {FNM.Who}
                    </td>
                    <td className="text-sm font-bold py-2 text-left px-4">
                      {FNM.Action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemLogPopup;
