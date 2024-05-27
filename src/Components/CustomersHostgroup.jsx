import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import FilterIcon from "../images/icon/filter.svg";

export default function CustomersHostgroup() {
  return (
    <>
      <h2 className="text-[18px] font-bold">Attack Reports</h2>
      <div className="bg-white  shadow rounded py-5 px-5">
        <div className="grid grid-cols-3 border-b pb-5 border-[#E0E2E7]">
          <div className="grid grid-cols-5 gap-3 col-span-2">
            <div className="relative w-full">
              <select
                className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 pl-10 pr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="startDate"
              >
                <option value="" selected>
                  Start Date
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <MdOutlineDateRange className="text-gray-500" />
              </div>
            </div>
            <div className="relative w-full">
              <select
                className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 pl-10 pr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="startDate"
              >
                <option value="" selected>
                  End Date
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <MdOutlineDateRange className="text-gray-500" />
              </div>
            </div>
            <div className="flex col-span-2">
              <select
                name=""
                id=""
                className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="">Select Custome Date Range</option>
              </select>
            </div>
            <div className="relative w-full">
              <select
                className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 pl-10 pr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="startDate"
              >
                <option value="" selected>
                  Filter
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <img src={FilterIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-[#FFEBEB] text-[#FF3333] px-3 py-2 rounded">
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 py-5">
            <div className="flex items-start justify-start flex-col">
                <h2 className="text-[24px] font-bold">356</h2>
                <span className="text-[16px] text-[#667085]">Total Attacks</span>
            </div>
            <div className="flex items-start justify-start flex-col">
                <h2 className="text-[24px] font-bold">355</h2>
                <span className="text-[16px] text-[#667085]">Total Incoming</span>
            </div>
            <div className="flex items-start justify-start flex-col">
                <h2 className="text-[24px] font-bold">0</h2>
                <span className="text-[16px] text-[#667085]">Total Outdoing</span>
            </div>
            <div className="flex items-start justify-start flex-col">
                <h2 className="text-[24px] font-bold">1</h2>
                <span className="text-[16px] text-[#667085]">Total Others</span>
            </div>
        </div>
      </div>
    </>
  );
}
