import React from "react";
import { FaSortDown, FaBan } from "react-icons/fa";
import PPS from "../images/icon/Hosts.svg";
import linkIcon from "../images/icon/external-link.svg";

const RemoteHost = () => {
  const Hosts = [
    {
      Hosts: "82.129.21.234",
      Average1h: "158 Mbps",
      Max: "232 Mbps",
      PPSActual: "10145",
    },
    {
      Hosts: "82.129.21.234",
      Average1h: "158 Mbps",
      Max: "232 Mbps",
      PPSActual: "10145",
    },
    {
      Hosts: "82.129.21.234",
      Average1h: "158 Mbps",
      Max: "232 Mbps",
      PPSActual: "10145",
    },
    {
      Hosts: "82.129.21.234",
      Average1h: "158 Mbps",
      Max: "232 Mbps",
      PPSActual: "10145",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
      <div className="shadow rounded-lg overflow-hidden">
        <div className="p-4 bg-white">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-bold flex gap-2 items-center">
              <img src={PPS} alt="Hosts Incoming Icon" />
              Show Top Remote Hosts
            </h2>
          </div>
          <div className="overflow-y-auto max-h-96">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#F9F9FC]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 capitalize tracking-wider">
                    Hosts
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 capitalize tracking-wider">
                    Average 1h
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 capitalize tracking-wider">
                    Max
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 capitalize tracking-wider">
                    PPS Actual
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Hosts.map((host, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 flex items-center gap-1">
                      {host.Hosts}
                      <img src={linkIcon} alt="Link Icon" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {host.Average1h}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {host.Max}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {host.PPSActual}
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

export default RemoteHost;
