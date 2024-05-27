import React from "react";
import PPS from "../images/icon/pps.svg";

const MetricCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-5">
      {/* First Main Column */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:col-span-2 lg:col-span-5">
        <div className="flex flex-col items-center justify-center p-4 bg-white shadow rounded-lg">
          <div className="flex items-center gap-2">
            <img src={PPS} alt="PPS" />
            <span className="text-xl font-semibold">0 bps</span>
          </div>
          <span className="text-sm text-gray-500">Internal Traffic (MBPS)</span>
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-white shadow rounded-lg">
          <div className="flex items-center gap-2">
            <img src={PPS} alt="PPS" />
            <span className="text-xl font-semibold">1.1 Thsnd pps</span>
          </div>
          <span className="text-sm text-gray-500">Internal Traffic (PPS)</span>
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-white shadow rounded-lg">
          <div className="flex items-center gap-2">
            <img src={PPS} alt="PPS" />
            <span className="text-xl font-semibold">5.34 Mbps</span>
          </div>
          <span className="text-sm text-gray-500">Other Traffic (MBPS)</span>
        </div>
        <div className="flex flex-col items-center justify-center p-4 bg-white shadow rounded-lg">
          <div className="flex items-center gap-2">
            <img src={PPS} alt="PPS" />
            <span className="text-xl font-semibold">5 Thsnd pps</span>
          </div>
          <span className="text-sm text-gray-500">Other Traffic (PPS)</span>
        </div>
      </div>
      {/* Second Main Column */}
      <div className="md:col-span-1 lg:col-span-1 flex flex-col items-start justify-center p-4 bg-white shadow rounded-lg">
        <span className="text-xl font-semibold">Blackhole</span>
        <div className="w-full border-b-[1px] border-t-[1px] border-[#F0F1F3] py-2">
          <span className="text-sm text-red-500">No IP Banned</span>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
