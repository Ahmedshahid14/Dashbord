import React from "react";
import { FaArrowRight } from "react-icons/fa";
export default function ReportTable() {
  return (
    <>
      <div className="bg-white shadow mt-5 rounded p-2">
        <div className="flex items-center">
          <h2 className="text-[18px] p-5 font-bold flex items-center gap-1">
            Attack Report Details <FaArrowRight />
          </h2>
          <span className="text-[#F56B3F]">
            af317cd8-b027-4a7f-9770-d9c8fef17442{" "}
          </span>
        </div>
          <div className="grid grid-cols-2 w-[50%] bg-[#8E6286] rounded relative left-[-15px]">
            <div className="flex flex-col p-4">
              <h2 className="text-[28px] text-white">Date</h2>
              <span className="text-[18px] text-white">02-05-2024</span>
            </div>
            <div className="flex flex-col p-4">
              <h2 className="text-[28px] text-white">Time</h2>
              <span className="text-[18px] text-white">19:56:34</span>
            </div>
          </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="flex border flex-col rounded p-5">
            <span className=" text-[#667085] text-[16px]">Severity</span>
            <span className=" text-[16px]">Middle</span>
          </div>
          <div className="flex border flex-col rounded p-5">
            <span className=" text-[#667085] text-[16px]">Attack Type</span>
            <span className=" text-[16px]">UDP_Flood</span>
          </div>
          <div className="flex border flex-col rounded p-5">
            <span className="text-[#667085] text-[16px]">Proto</span>
            <span className="text-[16px]">UDP</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="flex border flex-col rounded p-5">
            <span className=" text-[#667085] text-[16px]">Direction</span>
            <span className=" text-[16px]">Incoming</span>
          </div>
          <div className="flex border flex-col rounded p-5">
            <span className=" text-[#667085] text-[16px]">Host Group</span>
            <span className=" text-[16px]">194.31.199.0/24</span>
          </div>
          <div className="flex border flex-col rounded p-5">
            <span className="text-[#667085] text-[16px]">Target IP</span>
            <span className="text-[16px]">194.31.199.6</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="flex border flex-col rounded p-5">
            <span className=" text-[#667085] text-[16px]">incoming traffic</span>
            <span className=" text-[16px]">483.6 MB/s</span>
          </div>
          <div className="flex border flex-col rounded p-5">
            <span className=" text-[#667085] text-[14px]">Packets Per Seconds</span>
            <span className=" text-[16px]">49989 pps</span>
          </div>
          <div className="flex border flex-col rounded p-5">
            <span className="text-[#667085] text-[16px]">Flows Per Seconds</span>
            <span className="text-[16px]">0 pps</span>
          </div>
        </div>
      </div>
    </>
  );
}
