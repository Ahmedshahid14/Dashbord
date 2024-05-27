import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

export default function ConfigGeneralFlows() {
  const FlowsData = [
    {
      version: "v5",
      Src: "0",
      Packets: "0",
      Flows: "0",
      IPv4: "0",
      s5: "0",
      s15: "0",
      s30: "0",
      s90: "0",
      s180: "0",
    },
    {
      version: "v5",
      Src: "0",
      Packets: "0",
      Flows: "0",
      IPv4: "0",
      s5: "0",
      s15: "0",
      s30: "0",
      s90: "0",
      s180: "0",
    },
    {
      version: "v5",
      Src: "0",
      Packets: "0",
      Flows: "0",
      IPv4: "0",
      s5: "0",
      s15: "0",
      s30: "0",
      s90: "0",
      s180: "0",
    },
    {
      version: "v5",
      Src: "0",
      Packets: "0",
      Flows: "0",
      IPv4: "0",
      s5: "0",
      s15: "0",
      s30: "0",
      s90: "0",
      s180: "0",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-4 bg-white rounded-[10px]  shadow">
          <div className="w-[15%] bg-gradient-to-tl relative right-[10px] my-5 py-4 rounded from-[#A5869F] to-[#8D6185]">
            <h2 className="text-[20px] text-center text-white">Flows</h2>
          </div>
          <table className="w-full table-auto mt-4">
            <thead>
              <tr className="bg-[#F0F1F3]">
                <th className="py-4 px-2 text-[14px] capitalize text-start">
                  version
                </th>
                <th className="py-4 px-2 text-[14px] capitalize text-start">
                  Src
                </th>
                <th className="py-4 px-2 text-[14px] capitalize text-start">
                  Packets
                </th>
                <th className="py-4 px-2 text-[14px] capitalize text-start">
                  Flows
                </th>
                <th className="py-4 px-2 text-[14px] capitalize text-start">
                  IPv4
                </th>
                <th className="py-4 px-2 text-[14px] capitalize text-start">
                  5s
                </th>
                <th className="py-4 px-2 text-[14px] capitalize text-start">
                  15s
                </th>
                <th className="py-4 px-2 text-[14px] capitalize text-start">
                  30s
                </th>
                <th className="py-4 px-2 text-[14px] capitalize text-start">
                  90s
                </th>
                <th className="py-4 px-2 text-[14px] capitalize text-start">
                  180s
                </th>
                <th className="py-4 px-2 text-[14px] capitalize text-start"></th>
              </tr>
            </thead>
            <tbody>
              {FlowsData.map((flow, index) => (
                <tr key={index}>
                  <td className="py-4 px-2 text-[14px] border text-start">
                    {flow.version}
                  </td>
                  <td className="py-4 px-2 text-[14px] border text-start">
                    {flow.Src}
                  </td>
                  <td className="py-4 px-2 text-[14px] border text-start">
                    {flow.Packets}
                  </td>
                  <td className="py-4 px-2 text-[14px] border text-start">
                    {flow.Flows}
                  </td>
                  <td className="py-4 px-2 text-[14px] border text-start">
                    {flow.IPv4}
                  </td>
                  <td className="py-4 px-2 text-[14px] border text-start">
                    {flow.s5}
                  </td>
                  <td className="py-4 px-2 text-[14px] border text-start">
                    {flow.s15}
                  </td>
                  <td className="py-4 px-2 text-[14px] border text-start">
                    {flow.s30}
                  </td>
                  <td className="py-4 px-2 text-[14px] border text-start">
                    {flow.s90}
                  </td>
                  <td className="py-4 px-2 text-[14px] border text-start">
                    {flow.s180}
                  </td>
                  <td className="py-4 px-2 text-[14px] border text-start"><HiOutlineDotsVertical /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-span-3 bg-white rounded-[10px]  shadow">
          <div className="w-[30%] bg-gradient-to-tl relative right-[10px] my-5 py-4 px-3 rounded from-[#A5869F] to-[#8D6185]">
            <h2 className="text-[20px] text-center text-white">Database</h2>
          </div>
          <div className="flex items-center border-b pb-3 justify-between pr-3">
            <span className="py-4 px-2 text-[14px] font-bold capitalize text-start ">
              enable_api
            </span>
            <div className="flex items-center gap-2">
                <button className="rounded-[10px] text-sm font-bold text-[#17C671] py-2 px-4 bg-[#E8F9F1]">On</button>
                <button className="rounded-[10px] text-sm font-bold text-[#FF3333] py-2 px-4 bg-[#FFEBEB]">off</button>
            </div>
          </div>
          <div className="flex items-center border-b pb-3 justify-between pr-3">
            <span className="py-4 px-2 text-[14px] font-bold capitalize text-start ">
              enable_api
            </span>
            <div className="flex items-center gap-2">
                <button className="rounded-[10px] text-sm font-bold text-[#17C671] py-2 px-4 bg-[#E8F9F1]">On</button>
                <button className="rounded-[10px] text-sm font-bold text-[#FF3333] py-2 px-4 bg-[#FFEBEB]">off</button>
            </div>
          </div>
          <div className="flex items-center border-b pb-3 justify-between pr-3">
            <span className="py-4 px-2 text-[14px] font-bold capitalize text-start ">
              enable_api
            </span>
            <div className="flex items-center gap-2">
                <button className="rounded-[10px] text-sm font-bold text-[#17C671] py-2 px-4 bg-[#E8F9F1]">On</button>
                <button className="rounded-[10px] text-sm font-bold text-[#FF3333] py-2 px-4 bg-[#FFEBEB]">off</button>
            </div>
          </div>
          <div className="flex items-center border-b pb-3 justify-between pr-3">
            <span className="py-4 px-2 text-[14px] font-bold capitalize text-start ">
              enable_api
            </span>
            <div className="flex items-center gap-2">
                <button className="rounded-[10px] text-sm font-bold text-[#17C671] py-2 px-4 bg-[#E8F9F1]">On</button>
                <button className="rounded-[10px] text-sm font-bold text-[#FF3333] py-2 px-4 bg-[#FFEBEB]">off</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
