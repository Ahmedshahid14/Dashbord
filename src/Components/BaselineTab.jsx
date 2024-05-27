import React, { useState } from "react";
import TrafficChart from "./TrafficChart";
import { HiMiniXMark } from "react-icons/hi2";

export default function BaselineTab() {
  const Incoming = [
    {
      Hostgroup: "# SCPRX",
      percentil: "21.6Mbps",
      percentil2: "2331",
    },
    {
      Hostgroup: "# SCPRX",
      percentil: "21.6Mbps",
      percentil2: "2331",
    },
    {
      Hostgroup: "# SCPRX",
      percentil: "21.6Mbps",
      percentil2: "2331",
    },
    {
      Hostgroup: "# SCPRX",
      percentil: "21.6Mbps",
      percentil2: "2331",
    },
    {
      Hostgroup: "# SCPRX",
      percentil: "21.6Mbps",
      percentil2: "2331",
    },
    {
      Hostgroup: "# SCPRX",
      percentil: "21.6Mbps",
      percentil2: "2331",
    },
  ];
  const Outgoing = [
    {
      Hostgroup: "# SCPRX",
      percentil: "21.6Mbps",
      percentil2: "2331",
    },
    {
      Hostgroup: "# SCPRX",
      percentil: "21.6Mbps",
      percentil2: "2331",
    },
    {
      Hostgroup: "# SCPRX",
      percentil: "21.6Mbps",
      percentil2: "2331",
    },
    {
      Hostgroup: "# SCPRX",
      percentil: "21.6Mbps",
      percentil2: "2331",
    },
    {
      Hostgroup: "# SCPRX",
      percentil: "21.6Mbps",
      percentil2: "2331",
    },
    {
      Hostgroup: "# SCPRX",
      percentil: "21.6Mbps",
      percentil2: "2331",
    },
  ];
  const SCPRX = [
    {
      IPAddress: "93.191.112.1",
      incomingmbps: "5.56Gbps",
      incominggpps: "628714",
      outgoing: "146Mbps",
      outgoingpps: "146Mbps",
    },
    {
      IPAddress: "93.191.112.1",
      incomingmbps: "5.56Gbps",
      incominggpps: "628714",
      outgoing: "146Mbps",
      outgoingpps: "146Mbps",
    },
    {
      IPAddress: "93.191.112.1",
      incomingmbps: "5.56Gbps",
      incominggpps: "628714",
      outgoing: "146Mbps",
      outgoingpps: "146Mbps",
    },
    {
      IPAddress: "93.191.112.1",
      incomingmbps: "5.56Gbps",
      incominggpps: "628714",
      outgoing: "146Mbps",
      outgoingpps: "146Mbps",
    },
    {
      IPAddress: "93.191.112.1",
      incomingmbps: "5.56Gbps",
      incominggpps: "628714",
      outgoing: "146Mbps",
      outgoingpps: "146Mbps",
    },
  ];
  const [showPopup, setShowPopup] = useState(false);
  const [selectedHost, setSelectedHost] = useState(null);

  const handleViewClick = (Hostgroup) => {
    setSelectedHost(Hostgroup);
    setShowPopup(true);
  };

  const closeModal = () => {
    setShowPopup(false);
    setSelectedHost(null);
  };

  return (
    <>
      <div className="bg-[#F4F4F4] p-2 rounded shadow">
        <div className="grid grid-cols-1 py-6 px-3 bg-[#fff] rounded shadow">
          <div className="flex items-center justify-start">
            <h2 className="text-[18px] font-bold">
              Traffic Baseline 95 percentil (beta)
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-5">
        <div className="bg-white shadow rounded">
          <h2 className="text-[18px] font-bold border-b border-[#E0E2E7] p-3">
            Incoming
          </h2>
          <div className="max-h-96 overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="bg-[#F9F9FC] py-3 px-2"></th>
                  <th className="bg-[#F0F3FF] py-3 px-2 text-[14px]">mbps</th>
                  <th className="bg-[#F6FEFE] py-3 px-2 text-[14px]">pps</th>
                </tr>
                <tr>
                  <th className="bg-[#F9F9FC] py-3 px-2 text-[14px]">
                    Hostgroup
                  </th>
                  <th className="bg-[#F0F3FF] py-3 px-2 text-[14px]">
                    95 percentil
                  </th>
                  <th className="bg-[#F6FEFE] py-3 px-2 text-[14px]">
                    95 percentil
                  </th>
                </tr>
              </thead>
              <tbody>
                {Incoming.map((incoming, index) => (
                  <tr key={index}>
                    <td className="flex items-center border justify-between py-3 px-2">
                      <span className="text-[14px] px-3">
                        {incoming.Hostgroup}
                      </span>
                      <button
                        className="bg-[#e6f1fc] text-[#016FE3] rounded p-2"
                        onClick={() => handleViewClick(incoming)}
                      >
                        View
                      </button>
                    </td>
                    <td className="py-3 px-2 text-center border text-[14px]">
                      {incoming.percentil}
                    </td>
                    <td className="py-3 px-2 text-center border text-[14px]">
                      {incoming.percentil2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {showPopup && selectedHost && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white w-[70%] rounded shadow">
                <div className="grid grid-cols-2 py-2 px-5 border-b mb-3 pb-3 border-[#E0E2E7]">
                  <div>
                    <h2 className="text-2xl font-bold">SCPRX</h2>
                  </div>
                  <div className="flex items-center justify-end">
                    <button className="text-[28px]" onClick={closeModal}>
                      <HiMiniXMark />
                    </button>
                  </div>
                </div>
                <table className="table-auto w-full">
                  <thead>
                    <tr className="bg-[#F0F1F3]">
                      <th className="text-[14px] text-start py-3 px-2">IP Address</th>
                      <th className="text-[14px] text-start py-3 px-2">max incoming mbps</th>
                      <th className="text-[14px] text-start py-3 px-2">max incoming pps</th>
                      <th className="text-[14px] text-start py-3 px-2">max outgoing mbps</th>
                      <th className="text-[14px] text-start py-3 px-2">max outgoing pps</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SCPRX.map((SCPRX, index) => (
                      <tr key={index}>
                        <td className="text-[14px] border py-3 px-2">{SCPRX.IPAddress}</td>
                        <td className="text-[14px] border py-3 px-2">{SCPRX.incomingmbps}</td>
                        <td className="text-[14px] border py-3 px-2">{SCPRX.incominggpps}</td>
                        <td className="text-[14px] border py-3 px-2">{SCPRX.outgoing}</td>
                        <td className="text-[14px] border py-3 px-2">{SCPRX.outgoingpps}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        <div className="bg-white shadow rounded">
          <h2 className="text-[18px] font-bold border-b border-[#E0E2E7] p-3">
            Outgoing
          </h2>
          <div className="max-h-96 overflow-y-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="bg-[#F9F9FC] py-3 px-2"></th>
                  <th className="bg-[#F0F3FF] py-3 px-2 text-[14px]">mbps</th>
                  <th className="bg-[#F6FEFE] py-3 px-2 text-[14px]">pps</th>
                </tr>
                <tr>
                  <th className="bg-[#F9F9FC] py-3 px-2 text-[14px]">
                    Hostgroup
                  </th>
                  <th className="bg-[#F0F3FF] py-3 px-2 text-[14px]">
                    95 percentil
                  </th>
                  <th className="bg-[#F6FEFE] py-3 px-2 text-[14px]">
                    95 percentil
                  </th>
                </tr>
              </thead>
              <tbody>
                {Outgoing.map((outgoing, index) => (
                  <tr key={index}>
                    <td className="flex items-center border justify-between py-3 px-2">
                      <span className="text-[14px] px-3">
                        {outgoing.Hostgroup}
                      </span>
                      <button
                        className="bg-[#e6f1fc] text-[#016FE3] rounded p-2"
                        onClick={() => handleViewClick(outgoing)}
                      >
                        View
                      </button>
                    </td>
                    <td className="py-3 px-2 text-center border text-[14px]">
                      {outgoing.percentil}
                    </td>
                    <td className="py-3 px-2 text-center border text-[14px]">
                      {outgoing.percentil2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
