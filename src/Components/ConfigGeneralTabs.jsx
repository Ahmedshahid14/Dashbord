import React from "react";
import ConfigGeneralFlows from "./ConfigGeneralFlows";
import ConfigGeneralban from "./ConfigGeneralban";
import ConfigGeneralNetflow from "./ConfigGeneralNetflow";

export default function ConfigGeneralTabs() {
  const General = [
    {
      TotalPackets: "682.1 Thsnd",
      ipv4: "682.1 Thsnd",
      ipv6: "0",
      nonip: "0",
      speedrecalctime: "14923",
      totalhosts: "15.1 Thsnd ",
      hostshashsize: "1.4 Thsnd",
    },
    {
      TotalPackets: "682.1 Thsnd",
      ipv4: "682.1 Thsnd",
      ipv6: "0",
      nonip: "0",
      speedrecalctime: "14923",
      totalhosts: "15.1 Thsnd ",
      hostshashsize: "1.4 Thsnd",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-4 bg-white rounded-[10px]  shadow">
          <div className="w-[15%] bg-gradient-to-tl relative right-[10px] my-5 py-4 rounded from-[#A5869F] to-[#8D6185]">
            <h2 className="text-[20px] text-center text-white">General</h2>
          </div>
          <table className="w-full table-auto mt-4">
            <thead>
              <tr className="bg-[#F0F1F3]">
                <th className="py-4 px-2 text-[14px] capitalize text-start">
                  total packets
                </th>
                <th className="py-4 px-2 text-[14px] capitalize text-start">
                  ipv4
                </th>
                <th className="py-4 px-2 text-[14px] capitalize text-start">
                  ipv6
                </th>
                <th className="py-4 px-2 text-[14px] capitalize text-start">
                  non ip
                </th>
                <th className="py-4 px-2 text-[14px] capitalize text-start">
                  speed recalc time
                </th>
                <th className="py-4 px-2 text-[14px] capitalize text-start">
                  total hosts
                </th>
                <th className="py-4 px-2 text-[14px] capitalize text-start">
                  hosts hash size
                </th>
              </tr>
            </thead>
            <tbody>
              {General.map((general, index) => (
                <tr key={index}>
                  <td className="py-4 px-2 text-[14px] border text-start">
                    {general.TotalPackets}
                  </td>
                  <td className="py-4 px-2 text-[14px] border text-start">
                    {general.ipv4}
                  </td>
                  <td className="py-4 px-2 text-[14px] border text-start">
                    {general.ipv6}
                  </td>
                  <td className="py-4 px-2 text-[14px] border text-start">
                    {general.nonip}
                  </td>
                  <td className="py-4 px-2 text-[14px] border text-start">
                    {general.speedrecalctime}
                  </td>
                  <td className="py-4 px-2 text-[14px] border text-start">
                    {general.totalhosts}
                  </td>
                  <td className="py-4 px-2 text-[14px] border text-start">
                    {general.hostshashsize}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-span-3 bg-white rounded-[10px]  shadow">
          <div className="w-[30%] bg-gradient-to-tl relative right-[10px] my-5 py-4 px-3 rounded from-[#A5869F] to-[#8D6185]">
            <h2 className="text-[20px] text-center text-white">Fastnetmon</h2>
          </div>
          <div className="flex items-center border-b bg-[#F0F1F3]">
            <span className="py-4 px-2 text-[14px] font-bold capitalize text-start ">
              Fastnetmon Version:
            </span>
            <p className="text-[#667085] text-[14px]">
              v2.0.362 c118e3f0771f595f87cf475ca2ec27ae8abab86
            </p>
          </div>
          <div className="flex items-center border-b">
            <span className="py-4 px-2 text-[14px] font-bold capitalize text-start ">
              FNM Manager version:
            </span>
            <p className="text-[#667085] text-[14px]">v4.2.7</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <ConfigGeneralFlows />
      </div>
      <div className="mt-4">
        <ConfigGeneralban />
      </div>
      <div className="mt-4">
        <ConfigGeneralNetflow />
      </div>
    </>
  );
}
