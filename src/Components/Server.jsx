import React from "react";
import { HiArrowDownRight } from "react-icons/hi2";
import { FaBan } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

const attackInfo = [
  { label: "Packet Processed", value: "10 Thsnd" },
  { label: "Net Flow", value: "227" },
  { label: "Total Hosts", value: "13 Thsnd" },
  { label: "Hosts Size Hash IPv4", value: "1320" },
  { label: "Remote Hosts Size Hash IPv4", value: "8 Thsnd" },
];

const lastAttackBlocked = [
  {
    when: "0d 9m 36h",
    direction: "Incoming",
    ip: "93.191.112.1",
    mbps: "24.8 MB/s",
    pps: "50.9 Thsnd",
  },
  {
    when: "0d 9m 36h",
    direction: "Incoming",
    ip: "93.191.112.1",
    mbps: "24.8 MB/s",
    pps: "50.9 Thsnd",
  },
  {
    when: "0d 9m 36h",
    direction: "Incoming",
    ip: "93.191.112.1",
    mbps: "24.8 MB/s",
    pps: "50.9 Thsnd",
  },
  {
    when: "0d 9m 36h",
    direction: "Incoming",
    ip: "93.191.112.1",
    mbps: "24.8 MB/s",
    pps: "50.9 Thsnd",
  },
  {
    when: "0d 9m 36h",
    direction: "Incoming",
    ip: "93.191.112.1",
    mbps: "24.8 MB/s",
    pps: "50.9 Thsnd",
  },
  {
    when: "0d 9m 36h",
    direction: "Incoming",
    ip: "93.191.112.1",
    mbps: "24.8 MB/s",
    pps: "50.9 Thsnd",
  },
  {
    when: "0d 9m 36h",
    direction: "Incoming",
    ip: "93.191.112.1",
    mbps: "24.8 MB/s",
    pps: "50.9 Thsnd",
  },
];

const serverInfo = [
  {
    Server: "No Enclosure Intel (R) Xeon (R) ",
    Server2: "Gold 5218 CPU @ 2.30 GHz",
    Memory: "46.04 GB of 49.09 GB",
    Memory2: "(94.22%)",
    Disk: "74 of 97G",
    Disk2: "(81%)",
    License: "10 G",
    License2: "VALID_LICENSE",
    Expire_in: "3 Days",
  },
];

const ServerInfo = () => (
  <div className="bg-white shadow rounded-lg p-4 mb-4">
    <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="text-[14px] text-start">Server</th>
          <th className="text-[14px] text-start">Memory</th>
          <th className="text-[14px] text-start">Disk</th>
          <th className="text-[14px] text-start">License</th>
          <th className="text-[14px] text-start">Expire_in</th>
        </tr>
      </thead>
      <tbody>
        {serverInfo.map((info, index) => (
          <tr key={index}>
            <td className="text-start text-[14px] pt-10">
              <b>{info.Server}</b>
              <br />
              {info.Server2}
            </td>
            <td className="text-start text-[14px] pt-10">
              <b>{info.Memory}</b>
              <br />
              {info.Memory2}
            </td>
            <td className="text-start text-[14px] pt-10">
              <b>{info.Disk}</b>
              <br />
              {info.Disk2}
            </td>
            <td className="text-start text-[14px] pt-10">
              <b> {info.License}</b>
              <br />
              <span className="text-[#17C671]">{info.License2}</span>
            </td>
            <td className="text-start text-[14px] pt-10">
              {info.Expire_in}
              <br />
            </td>
          </tr>
        ))}
        <tr>
          <td className="pt-10">
            <button className="bg-[#fef0ec] text-[#F56B3F] font-bold px-4 py-2 rounded">
              MongoDB
            </button>
          </td>
          <td className="pt-10">
            <button className="bg-[#fef0ec] text-[#F56B3F] font-bold px-4 py-2 rounded">
              Click House
            </button>
          </td>
          <td className="pt-10">
            <button className="bg-[#fef0ec] text-[#F56B3F] font-bold px-4 py-2 rounded">
              Influx DB
            </button>
          </td>
          <td className="pt-10">
            <button className="bg-[#fef0ec] text-[#F56B3F] font-bold px-4 py-2 rounded">
              Traffic DB
            </button>
          </td>
          <td className="pt-10">
            <button className="bg-[#fef0ec] text-[#F56B3F] font-bold px-4 py-2 rounded">
              FNM
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
);

const AttackInfo = () => (
  <div className="bg-white shadow rounded-lg p-4">
    <div className="flex justify-between items-center border-b pb-4 mb-4">
      <h3 className="text-lg font-semibold text-gray-700">
        Attack Info: No DDOS Attack
      </h3>
      <p className="text-sm text-gray-500">
        FNM Manager: v4.2.7 / Fastnetmon: v2.0.362
      </p>
    </div>
    <div className="grid grid-cols-5 gap-4 border-b overflow-x-auto pb-4 mb-4">
      {attackInfo.map((info, index) => (
        <div key={index}>
          <p className="text-sm font-semibold text-gray-700">{info.label}</p>
          <p className="text-lg font-bold">{info.value}</p>
        </div>
      ))}
    </div>
    <div className="flex flex-wrap space-x-1">
      <button className="bg-[#fef0ec] text-[#F56B3F] font-bold  px-2 py-1 rounded mt-2">
        Net Flow
      </button>
      <button className="bg-[#fef0ec] text-[#F56B3F] font-bold  px-2 py-1 rounded mt-2">
        SFlow
      </button>
      <button className="bg-[#fef0ec] text-[#F56B3F] font-bold  px-2 py-1 rounded mt-2">
        BGP
      </button>
      <button className="bg-[#fef0ec] text-[#F56B3F] font-bold  px-2 py-1 rounded mt-2">
        Scrubbing
      </button>
      <button className="bg-[#fef0ec] text-[#F56B3F] font-bold  px-2 py-1 rounded mt-2">
        Mikrotik
      </button>
      <button className="bg-[#fef0ec] text-[#F56B3F] font-bold  px-2 py-1 rounded mt-2">
        Email Notification
      </button>
      <button className="bg-[#fef0ec] text-[#F56B3F] font-bold  px-2 py-1 rounded mt-2">
        BAN Attack
      </button>
      <button className="bg-[#fef0ec] text-[#F56B3F] font-bold  px-2 py-1 rounded mt-2">
        Remote Tracing
      </button>
      <button className="bg-[#fef0ec] text-[#F56B3F] font-bold  px-2 py-1 rounded mt-2">
        Connection Tracking
      </button>
    </div>
  </div>
);

const LastAttackBlockedTable = () => (
  <div className="bg-white shadow rounded-lg p-4">
    <h3 className="text-lg font-semibold text-gray-700 mb-4">
      Last Attack Blocked
    </h3>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-center text-[14px] whitespace-nowrap text-gray-500 uppercase tracking-wider">
              When
            </th>
            <th className="px-4 py-2 text-center text-[14px] whitespace-nowrap text-gray-500 uppercase tracking-wider">
              Data Direction
            </th>
            <th className="px-4 py-2 text-center text-[14px] whitespace-nowrap text-gray-500 uppercase tracking-wider">
              IP Address
            </th>
            <th className="px-4 py-2 text-center text-[14px] whitespace-nowrap text-gray-500 uppercase tracking-wider">
              MBPS
            </th>
            <th className="px-4 py-2 text-center text-[14px] whitespace-nowrap text-gray-500 uppercase tracking-wider">
              PPS
            </th>
            <th className="px-4 py-2 text-center text-[14px] whitespace-nowrap text-gray-500 uppercase tracking-wider">
              Action
            </th>
            <th className="px-4 py-2 text-center text-xs whitespace-nowrap text-gray-500 uppercase tracking-wider">
              View
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {lastAttackBlocked.map((attack, index) => (
            <tr key={index}>
              <td className="px-4 py-2 text-center text-[14px] whitespace-nowrap">
                {attack.when}
              </td>
              <td className="px-4 py-2 text-center text-[14px] whitespace-nowrap">
                {" "}
                <span className="flex px-4 py-2 items-center gap-1 bg-[#F3EFF3] text-[#8B5E83]">
                  <HiArrowDownRight />
                  {attack.direction}
                </span>
              </td>
              <td className="px-4 py-2 text-center text-[14px] whitespace-nowrap">
                {attack.ip}
              </td>
              <td className="px-4 py-2 text-center text-[14px] whitespace-nowrap">
                {attack.mbps}
              </td>
              <td className="px-4 py-2 text-center text-[14px] whitespace-nowrap">
                {attack.pps}
              </td>
              <td className="px-4 py-2 text-center text-[14px] whitespace-nowrap">
                <button className="bg-[#ffd6d6] text-[#FF3333] px-2 py-1 rounded flex  items-center gap-1">
                  <FaBan /> Ban
                </button>
              </td>
              <td className="px-4 py-2 text-center text-[14px] whitespace-nowrap">
                <button className="bg-[#E7F3ED] text-[#0D894F] px-2 py-1 rounded flex items-center gap-1">
                  <FaRegEye /> View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Dashboard = () => (
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <ServerInfo />
        <AttackInfo />
      </div>
      <LastAttackBlockedTable />
    </div>
  </div>
);

export default Dashboard;
