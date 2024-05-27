import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

const FNMLicensePopup = ({ onClose }) => {
  const Client =[
    {
      name:'Client Name:',
      title:'FNM: xFiber.be PRODUCTION',
    },
    {
      name:'Client Name:',
      title:'FNM: xFiber.be PRODUCTION',
    },
    {
      name:'Client Name:',
      title:'FNM: xFiber.be PRODUCTION',
    },
    {
      name:'Client Name:',
      title:'FNM: xFiber.be PRODUCTION',
    },
    {
      name:'Client Name:',
      title:'FNM: xFiber.be PRODUCTION',
    },
    {
      name:'Client Name:',
      title:'FNM: xFiber.be PRODUCTION',
    },
  ]
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[70%]  p-5 rounded shadow-lg ">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">License: FastNetMon Advanced v4.2.7</h2>
          <button onClick={onClose} className="text-[24px]">
            <IoIosClose />
          </button>
        </div>
          <h2 className="text-xl font-bold my-3">FNM Manager </h2>
          <div className="flex items-center gap-4 border-b pb-4">
            <button className="h-8 w-32 text-[14px] rounded text-white bg-[#F56B3F] ">
            Review License
            </button>
            <button className="h-8 w-32 text-[14px] rounded text-[#F56B3F] border-[1px] border-[#F56B3F] bg-white ">
            Review License
            </button>
          </div>
          {Client.map((Client, index)=>(
          <div className="flex items-center mt-4 border-b pb-4">
            <b className="text-[18px]">{Client.name}</b>
            <span className="text-[18px] text-[#667085]">{Client.title}</span>
          </div>
          ))}
      </div>
    </div>
  );
};

export default FNMLicensePopup;
