import React, { useState } from "react";
import TrafficChart from "./TrafficChart";
import { HiMiniXMark } from "react-icons/hi2";

export default function GeneralTab() {
  const Hostgroup = [
    {
      Host: "82.129.21.233",
      HostgroupValue: "351Mbps",
    },
    {
      Host: "82.129.21.233",
      HostgroupValue: "351Mbps",
    },
    {
      Host: "82.129.21.233",
      HostgroupValue: "351Mbps",
    },
    {
      Host: "82.129.21.233",
      HostgroupValue: "351Mbps",
    },
    {
      Host: "82.129.21.233",
      HostgroupValue: "351Mbps",
    },
    {
      Host: "82.129.21.233",
      HostgroupValue: "351Mbps",
    },
    {
      Host: "82.129.21.233",
      HostgroupValue: "351Mbps",
    },
    {
      Host: "82.129.21.233",
      HostgroupValue: "351Mbps",
    },
  ];
  const [showPopup, setShowPopup] = useState(false);
  const [selectedHost, setSelectedHost] = useState(null);

  const handleViewClick = (host) => {
    setSelectedHost(host);
    setShowPopup(true);
  };

  const closeModal = () => {
    setShowPopup(false);
    setSelectedHost(null);
  };
  return (
    <>
      <div className="mt-5">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white shadow rounded  w-full mt-5">
            <h2 className="text-lg font-bold my-5 px-3">
              Top by Hostgroup bits_incoming
            </h2>
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-[#F9F9FC]">
                  <th className="py-3">Host</th>
                  <th className="py-3">Hostgroup Value</th>
                  <th className="py-3">Action</th>
                </tr>
              </thead>
            </table>
            <div className="overflow-y-auto" style={{ maxHeight: "300px" }}>
              <table className="table-auto w-full">
                <tbody>
                  {Hostgroup.map((Host, index) => (
                    <tr key={index}>
                      <td className="py-2 px-3 text-center">{Host.Host}</td>
                      <td className="py-2 px-3 text-center">{Host.HostgroupValue}</td>
                      <td className="py-2 px-3 text-center flex justify-end gap-2">
                        <button
                          className="py-2 px-4 bg-[#E6F1FC] rounded text-[#016FE3]"
                          onClick={() => handleViewClick(Host)}
                        >
                          View
                        </button>
                        <button className="py-2 px-4 bg-[#ffebeb] rounded text-[#FF3333]">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white shadow rounded  w-full mt-5">
            <h2 className="text-lg font-bold my-5 px-3">
              Top by Hostgroup bits_incoming
            </h2>
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-[#F9F9FC]">
                  <th className="py-3">Host</th>
                  <th className="py-3">Hostgroup Value</th>
                  <th className="py-3">Action</th>
                </tr>
              </thead>
            </table>
            <div className="overflow-y-auto" style={{ maxHeight: "300px" }}>
              <table className="table-auto w-full">
                <tbody>
                  {Hostgroup.map((Host, index) => (
                    <tr key={index}>
                      <td className="py-2 px-3 text-center">{Host.Host}</td>
                      <td className="py-2 px-3 text-center">{Host.HostgroupValue}</td>
                      <td className="py-2 px-3 text-center flex justify-end gap-2">
                        <button
                          className="py-2 px-4 bg-[#E6F1FC] rounded text-[#016FE3]"
                          onClick={() => handleViewClick(Host)}
                        >
                          View
                        </button>
                        <button className="py-2 px-4 bg-[#ffebeb] rounded text-[#FF3333]">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white shadow rounded  w-full mt-5">
            <h2 className="text-lg font-bold my-5 px-3">
              Top by Hostgroup bits_incoming
            </h2>
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-[#F9F9FC]">
                  <th className="py-3">Host</th>
                  <th className="py-3">Hostgroup Value</th>
                  <th className="py-3">Action</th>
                </tr>
              </thead>
            </table>
            <div className="overflow-y-auto" style={{ maxHeight: "300px" }}>
              <table className="table-auto w-full">
                <tbody>
                  {Hostgroup.map((Host, index) => (
                    <tr key={index}>
                      <td className="py-2 px-3 text-center">{Host.Host}</td>
                      <td className="py-2 px-3 text-center">{Host.HostgroupValue}</td>
                      <td className="py-2 px-3 text-center flex justify-end gap-2">
                        <button
                          className="py-2 px-4 bg-[#E6F1FC] rounded text-[#016FE3]"
                          onClick={() => handleViewClick(Host)}
                        >
                          View
                        </button>
                        <button className="py-2 px-4 bg-[#ffebeb] rounded text-[#FF3333]">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white shadow rounded  w-full mt-5">
            <h2 className="text-lg font-bold my-5 px-3">
              Top by Hostgroup bits_incoming
            </h2>
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-[#F9F9FC]">
                  <th className="py-3">Host</th>
                  <th className="py-3">Hostgroup Value</th>
                  <th className="py-3">Action</th>
                </tr>
              </thead>
            </table>
            <div className="overflow-y-auto" style={{ maxHeight: "300px" }}>
              <table className="table-auto w-full">
                <tbody>
                  {Hostgroup.map((Host, index) => (
                    <tr key={index}>
                      <td className="py-2 px-3 text-center">{Host.Host}</td>
                      <td className="py-2 px-3 text-center">{Host.HostgroupValue}</td>
                      <td className="py-2 px-3 text-center flex justify-end gap-2">
                        <button
                          className="py-2 px-4 bg-[#E6F1FC] rounded text-[#016FE3]"
                          onClick={() => handleViewClick(Host)}
                        >
                          View
                        </button>
                        <button className="py-2 px-4 bg-[#ffebeb] rounded text-[#FF3333]">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {showPopup && selectedHost && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-5 w-[50%] rounded shadow">
                <div className="grid grid-cols-2 border-b mb-3 pb-3 border-[#E0E2E7]">
                  <div>
                    <h2 className="text-2xl font-bold">FNM Backups </h2>
                  </div>
                  <div className="flex items-center justify-end">
                    <button className="text-[28px]" onClick={closeModal}>
                      <HiMiniXMark />
                    </button>
                  </div>
                </div>
                <TrafficChart />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
