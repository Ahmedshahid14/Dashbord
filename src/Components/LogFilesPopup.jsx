import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

const LogFilesPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[70%]  p-5 rounded shadow-lg ">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-bold">Log Files </h2>
          <button onClick={onClose} className="text-[24px]">
            <IoIosClose />
          </button>
        </div>
        <form action="">
          <div className="flex flex-col">
            <label htmlFor="" className="text-[18px] font-bold">
              Choose File
            </label>
            <input
              type="file"
              name="Token"
              className="border py-3 px-2 rounded "
              id=""
              placeholder="Choose file..."
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogFilesPopup;
