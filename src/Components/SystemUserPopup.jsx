import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

const UsersDate = [
  {
    Status: "Active",
    Name: "Aimd",
    Email: "demo@xfiber.be",
  },
  {
    Status: "Disable",
    Name: "Abrar",
    Email: "demo@xfiber.be",
  },
  {
    Status: "Active",
    Name: "Aimd",
    Email: "demo@xfiber.be",
  },
];

const SystemUserPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[70%]  p-5 rounded shadow-lg ">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-bold">System User</h2>
          <button onClick={onClose} className="text-[24px]">
            <IoIosClose />
          </button>
        </div>
        <div className="w-full mt-10">
          <div className="overflow-hidden">
            <table className="table-auto w-full">
              <thead className="bg-[#F9F9FC]">
                <tr>
                  <th className="text-sm font-bold py-2 text-left px-4">
                    Status
                  </th>
                  <th className="text-sm font-bold py-2 text-left px-4">
                    Name
                  </th>
                  <th className="text-sm font-bold py-2 text-left px-4">
                    Email
                  </th>
                  <th className="text-sm font-bold py-2 text-center px-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="overflow-y-auto max-h-60">
                {UsersDate.map((users, index) => (
                  <tr key={index}>
                    <td
                      className={
                        users.Status === "Active"
                          ? "text-green-600 text-[14px] font-bold py-2 text-left px-4"
                          : "text-red-500 text-[14px] font-bold py-2 text-left px-4"
                      }
                    >
                      {users.Status}
                    </td>
                    <td className="text-[14px] py-2 text-left px-4">
                      {users.Name}
                    </td>
                    <td className="text-[14px] py-2 text-left px-4">
                      {users.Email}
                    </td>
                    <td className="flex items-center justify-center gap-2">
                      <button className="text-[16px] py-2 px-4 rounded text-[#016FE3] bg-[#E6F1FC]">Edit</button>
                      <button className="text-[16px] py-2 px-4 rounded text-[#FF3333] bg-[#FFEBEB]">Remove</button>
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

export default SystemUserPopup;
