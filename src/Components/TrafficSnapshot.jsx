import React, { useState } from "react";
import Garmany from '../images/icon/germany.svg';
import Usa from '../images/icon/Usa.svg';
const TrafficSnapshot = () => {
  const [activeButton, setActiveButton] = useState("Incoming"); 
  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  const TrafficSnapshot = [
    {
      Date: "13-05-2024",
      Time: "11:37:17",
      Agent: "89:221.39.11",
      Source: 3,
      Direction: "Incoming",
      IPVer: 4,
      SrcAsn: 6008,
      SrcIp: "162.159.192.4",
      SrcPort: 2408,
      DstAsn: 2009,
      dstIp: "123.123.123",
      dstPort: 5931,
    },
    {
      Date: "13-05-2024",
      Time: "11:37:17",
      Agent: "89:221.39.11",
      Source: 3,
      Direction: "Incoming",
      IPVer: 4,
      SrcAsn: 6008,
      SrcIp: "162.159.192.4",
      SrcPort: 2408,
      DstAsn: 2009,
      dstIp: "123.123.123",
      dstPort: 5931,
    },
    {
      Date: "13-05-2024",
      Time: "11:37:17",
      Agent: "89:221.39.11",
      Source: 3,
      Direction: "Incoming",
      IPVer: 4,
      SrcAsn: 6008,
      SrcIp: "162.159.192.4",
      SrcPort: 2408,
      DstAsn: 2009,
      dstIp: "123.123.123",
      dstPort: 5931,
    },
    {
      Date: "13-05-2024",
      Time: "11:37:17",
      Agent: "89:221.39.11",
      Source: 3,
      Direction: "Incoming",
      IPVer: 4,
      SrcAsn: 6008,
      SrcIp: "162.159.192.4",
      SrcPort: 2408,
      DstAsn: 2009,
      dstIp: "123.123.123",
      dstPort: 5931,
    },
    {
      Date: "13-05-2024",
      Time: "11:37:17",
      Agent: "89:221.39.11",
      Source: 3,
      Direction: "Incoming",
      IPVer: 4,
      SrcAsn: 6008,
      SrcIp: "162.159.192.4",
      SrcPort: 2408,
      DstAsn: 2009,
      dstIp: "123.123.123",
      dstPort: 5931,
    },
    {
      Date: "13-05-2024",
      Time: "11:37:17",
      Agent: "89:221.39.11",
      Source: 3,
      Direction: "Incoming",
      IPVer: 4,
      SrcAsn: 6008,
      SrcIp: "162.159.192.4",
      SrcPort: 2408,
      DstAsn: 2009,
      dstIp: "123.123.123",
      dstPort: 5931,
    },
    {
      Date: "13-05-2024",
      Time: "11:37:17",
      Agent: "89:221.39.11",
      Source: 3,
      Direction: "Incoming",
      IPVer: 4,
      SrcAsn: 6008,
      SrcIp: "162.159.192.4",
      SrcPort: 2408,
      DstAsn: 2009,
      dstIp: "123.123.123",
      dstPort: 5931,
    },
    {
      Date: "13-05-2024",
      Time: "11:37:17",
      Agent: "89:221.39.11",
      Source: 3,
      Direction: "Incoming",
      IPVer: 4,
      SrcAsn: 6008,
      SrcIp: "162.159.192.4",
      SrcPort: 2408,
      DstAsn: 2009,
      dstIp: "123.123.123",
      dstPort: 5931,
    },
    {
      Date: "13-05-2024",
      Time: "11:37:17",
      Agent: "89:221.39.11",
      Source: 3,
      Direction: "Incoming",
      IPVer: 4,
      SrcAsn: 6008,
      SrcIp: "162.159.192.4",
      SrcPort: 2408,
      DstAsn: 2009,
      dstIp: "123.123.123",
      dstPort: 5931,
    },
    {
      Date: "13-05-2024",
      Time: "11:37:17",
      Agent: "89:221.39.11",
      Source: 3,
      Direction: "Incoming",
      IPVer: 4,
      SrcAsn: 6008,
      SrcIp: "162.159.192.4",
      SrcPort: 2408,
      DstAsn: 2009,
      dstIp: "123.123.123",
      dstPort: 5931,
    },
    {
      Date: "13-05-2024",
      Time: "11:37:17",
      Agent: "89:221.39.11",
      Source: 3,
      Direction: "Incoming",
      IPVer: 4,
      SrcAsn: 6008,
      SrcIp: "162.159.192.4",
      SrcPort: 2408,
      DstAsn: 2009,
      dstIp: "123.123.123",
      dstPort: 5931,
    },
    {
      Date: "13-05-2024",
      Time: "11:37:17",
      Agent: "89:221.39.11",
      Source: 3,
      Direction: "Incoming",
      IPVer: 4,
      SrcAsn: 6008,
      SrcIp: "162.159.192.4",
      SrcPort: 2408,
      DstAsn: 2009,
      dstIp: "123.123.123",
      dstPort: 5931,
    },
  ];

  return (
    <>
      <div className="bg-white rounded shadow px-5 py-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2">
          <div className="div">
            <h2 className="text-[18px] font-bold">Traffic Snapshot </h2>
          </div>
          <div className="hidden lg:block"></div>
          <div className="grid grid-cols-4 gap-2">
            {["Incoming", "Outgoing", "Internal", "Other"].map((index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`p-2 text-[14px] font-bold rounded ${
                  activeButton === index
                    ? "bg-[#F56B3F] text-white"
                    : "bg-[#F2F2F2] text-black"
                }`}
              >
                {index}
              </button>
            ))}
          </div>
        </div>
        <table className="table-auto w-full mt-5">
          <thead>
            <tr className="bg-[#F9F9FC]">
              <th className="text-[14px] py-2 capitalize">Date</th>
              <th className="text-[14px] py-2 capitalize">Time</th>
              <th className="text-[14px] py-2 capitalize">Agent</th>
              <th className="text-[14px] py-2 capitalize">Source</th>
              <th className="text-[14px] py-2 capitalize">Direction</th>
              <th className="text-[14px] py-2 capitalize">IP Ver</th>
              <th className="text-[14px] py-2 capitalize">Src Asn</th>
              <th className="text-[14px] py-2 capitalize">Src Ip</th>
              <th className="text-[14px] py-2 capitalize">Src Port</th>
              <th className="text-[14px] py-2 capitalize">Dst Asn</th>
              <th className="text-[14px] py-2 capitalize">dst Ip</th>
              <th className="text-[14px] py-2 capitalize">dst Port</th>
            </tr>
          </thead>
          <tbody>
            {TrafficSnapshot.map((traffic, index) => (
              <tr key={index}>
                <td className="text-[14px] py-2 capitalize text-center">{traffic.Date}</td>
                <td className="text-[14px] py-2 capitalize text-center">{traffic.Time}</td>
                <td className="text-[14px] py-2 capitalize text-center">{traffic.Agent}</td>
                <td className="text-[14px] py-2 capitalize text-center">{traffic.Source}</td>
                <td className="text-[14px] py-2 capitalize text-center">{traffic.Direction}</td>
                <td className="text-[14px] py-2 capitalize text-center">{traffic.IPVer}</td>
                <td className="text-[14px] py-2 capitalize flex items-center justify-center gap-1"><img src={Garmany} alt="Garmany" />{traffic.SrcAsn}</td>
                <td className="text-[14px] py-2 capitalize text-center">{traffic.SrcIp}</td>
                <td className="text-[14px] py-2 capitalize text-center">{traffic.SrcPort}</td>
                <td className="text-[14px] py-2 capitalize flex items-center justify-center gap-2"><img src={Usa} alt="Usa" />{traffic.DstAsn}</td>
                <td className="text-[14px] py-2 capitalize text-center">{traffic.dstIp}</td>
                <td className="text-[14px] py-2 capitalize text-center">{traffic.dstPort}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TrafficSnapshot;
