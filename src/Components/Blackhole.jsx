import React from "react";
import ErrorIcon from "../images/icon/error.svg";
import ErrorIcon2 from "../images/icon/brownerror.svg";
import ErrorIcon3 from "../images/icon/Greencheck.svg";
import ErrorIcon4 from "../images/icon/ruondarrow.svg";

export default function Blackhole({ onWhiteListClick }) {
  return (
    <>
      <h2 className="text-lg font-bold">Block Manager</h2>
      <div className="bg-white shadow round mt-4">
        <div className="flex items-center gap-2 p-2 border-b border-[#E0E2E7]">
          <div className="bg-[#feedec] p-1 rounded-full shadow">
            <div className="bg-[#fcdad7] p-2 rounded-full shadow">
              <img src={ErrorIcon} alt="" />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[18px] font-bold">IP Blackhole</h2>
            <span className="text-[#667085] text-[18px]">Add to blackhole an IP/32.</span>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 border-b border-[#E0E2E7]">
          <div className="bg-[#fdf1e8] p-1 rounded-full shadow">
            <div className="bg-[#fae1cf] p-2 rounded-full shadow">
              <img src={ErrorIcon2} alt="" />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[18px] font-bold">Network Blackhole</h2>
            <span className="text-[#667085] text-[18px]">Add to blackhole an IP/32.</span>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 border-b border-[#E0E2E7]">
          <div className="bg-[#E7F4EE] p-1 rounded-full shadow">
            <div className="bg-[#CFE7DC] p-2 rounded-full shadow">
              <img src={ErrorIcon3} alt="" />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[18px] font-bold">Network Blackhole</h2>
            <span className="text-[#667085] text-[18px]">Add to whitelist an IP Address or Network.</span>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2" onClick={onWhiteListClick}>
          <div className="bg-[#e8f8fd] p-1 rounded-full shadow">
            <div className="bg-[#D0F0FA] p-2 rounded-full shadow">
              <img src={ErrorIcon4} alt="" />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[18px] font-bold">White List</h2>
            <span className="text-[#667085] text-[18px]">View history of Attacks.</span>
          </div>
        </div>
      </div>
    </>
  );
}
