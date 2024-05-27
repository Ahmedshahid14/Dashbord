import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function AttacksTarget() {
  const target = [
    {
      Date: "#99/19:24:30",
      Direction: "Incoming",
      Target: "194.31.199.6",
      Powermbps: "483.6 MB/s",
      PowerPPS: "50 Thsnd pps",
    },
    {
      Date: "#99/19:24:30",
      Direction: "Incoming",
      Target: "194.31.199.6",
      Powermbps: "483.6 MB/s",
      PowerPPS: "50 Thsnd pps",
    },
    {
      Date: "#99/19:24:30",
      Direction: "Incoming",
      Target: "194.31.199.6",
      Powermbps: "483.6 MB/s",
      PowerPPS: "50 Thsnd pps",
    },
    {
      Date: "#99/19:24:30",
      Direction: "Incoming",
      Target: "194.31.199.6",
      Powermbps: "483.6 MB/s",
      PowerPPS: "50 Thsnd pps",
    },
    {
      Date: "#99/19:24:30",
      Direction: "Incoming",
      Target: "194.31.199.6",
      Powermbps: "483.6 MB/s",
      PowerPPS: "50 Thsnd pps",
    },
  ];
  return (
    <>
      <div className="bg-white shadow rounded mt-5">
        <h2 className="text-[18px] font-bold p-5">
          Another Attacks to this Target{" "}
        </h2>
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-[#F9F9FC]">
              <th className="p-2 py-4 text-start text-[14px]">ID/Date</th>
              <th className="p-2 py-4 text-start text-[14px]">Direction</th>
              <th className="p-2 py-4 text-start text-[14px]">Target</th>
              <th className="p-2 py-4 text-start text-[14px]">Power mbps</th>
              <th className="p-2 py-4  text-start text-[14px]">Power PPS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {target.map((target, index) => (
              <tr key={index}>
                <td className="p-2 py-4 text-start border text-[14px]">
                  {target.Date}
                </td>
                <td className="p-2 py-4 text-[14px] border text-start ">
                  <span className="bg-[#f3eff3] font-bold w-[110px] rounded text-[#8B5E83] p-2 py-4 gap-1 flex items-center">
                    <BsArrowDownRight />
                    {target.Direction}
                  </span>
                </td>
                <td className="p-2 py-4 text-start border text-[14px]">
                  {target.Target}
                </td>
                <td className="p-2 py-4 text-start border text-[14px]">
                  {target.Powermbps}
                </td>
                <td className="p-2 py-4 text-start border text-[14px]">
                  {target.PowerPPS}
                </td>
                <td className="p-2 py-4 text-start border text-[14px]">
                  <button className="bg-[#FEF0EC] text-[#F56B3F] text-[14px] p-2 rounded">
                    <MdOutlineKeyboardArrowRight />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
