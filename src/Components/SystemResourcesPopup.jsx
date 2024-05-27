import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

const SystemResourcesPopup = ({ onClose }) => {
  const DiskDate = [
    {
      Filesystem: "/dev/mapper/ubuntu--vg-ubuntu--lv",
      Size: "97G",
      Used: "71G",
      Avail: "21G",
      UseMountedonl: "1% /dev/shm",
    },
    {
      Filesystem: "/dev/mapper/ubuntu--vg-ubuntu--lv",
      Size: "97G",
      Used: "71G",
      Avail: "21G",
      UseMountedonl: "1% /dev/shm",
    },
    {
      Filesystem: "/dev/mapper/ubuntu--vg-ubuntu--lv",
      Size: "97G",
      Used: "71G",
      Avail: "21G",
      UseMountedonl: "1% /dev/shm",
    },
  ];
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[80%] h-[90%] p-5 rounded shadow-lg overflow-y-scroll">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-bold">System Resources </h2>
          <button onClick={onClose} className="text-[24px]">
            <IoIosClose />
          </button>
        </div>
        <h2 className="text-[18px] mt-4  font-bold">Services</h2>
        <div className="flex items-center border-b pb-2 justify-between mt-2">
          <span>FastNetMon Commit</span>
          <button className="text-[#007BFF] bg-[#E6F2FF] rounded h-10 w-32">
            Commit
          </button>
        </div>
        <div className="flex items-center border-b pb-2 justify-between mt-2">
          <span>FastNetMon API Service</span>
          <button className="text-[#C4183C] bg-[#FAE8EC] rounded h-10 w-32">
            Restart
          </button>
        </div>
        <div className="flex items-center border-b pb-2 justify-between mt-2">
          <span>FastNetMon GoBGP Daemon</span>
          <button className="text-[#C4183C] bg-[#FAE8EC] rounded h-10 w-32">
            Restart
          </button>
        </div>
        <div className="flex items-center border-b pb-2 justify-between mt-2">
          <span>FastNetMon GoBGP Daemon</span>
          <button className="text-[#17C671] bg-[#E8FAF1] rounded h-10 w-32">
            Restart
          </button>
        </div>
        <div className="flex items-center border-b pb-2 justify-between mt-2">
          <span>MongoDB Database</span>
          <button className="text-[#17C671] bg-[#E8FAF1] rounded h-10 w-32">
            Start
          </button>
        </div>
        <div className="flex items-center border-b pb-2 justify-between mt-2">
          <span>Traffic History Daemon </span>
          <button className="text-[#5A6169] bg-[#EFF0F0] rounded h-10 w-32">
            Start
          </button>
        </div>
        <div className="border-b pb-4">
          <h2 className="text-[18px] mt-4  font-bold">Up Time</h2>
          <p className="text-[#667085] ">
            13:56:37 up 48 days, 1:27, 0 users, load average: 0.63, 0.94, 1.02
          </p>
        </div>
        <h2 className="text-[18px] mt-4  font-bold">Disk</h2>
        <table className="table-auto w-full mt-3">
          <thead>
            <tr className="bg-[#F0F1F3]">
              <th className="py-3 px-3 text-[14px] capitalize text-start ">
                Filesystem
              </th>
              <th className="py-3 px-3 text-[14px] capitalize text-start ">
                Size
              </th>
              <th className="py-3 px-3 text-[14px] capitalize text-start ">
                Used
              </th>
              <th className="py-3 px-3 text-[14px] capitalize text-start ">
                Avail
              </th>
              <th className="py-3 px-3 text-[14px] capitalize text-start ">
                Use% Mounted onl
              </th>
            </tr>
          </thead>
          <tbody>
            {DiskDate.map((disk, index) => (
              <tr key={index}>
                <td className="py-3 px-3 text-[14px] capitalize text-start border">
                  {disk.Filesystem}
                </td>
                <td className="py-3 px-3 text-[14px] capitalize text-start border">
                  {disk.Size}
                </td>
                <td className="py-3 px-3 text-[14px] capitalize text-start border">
                  {disk.Used}
                </td>
                <td className="py-3 px-3 text-[14px] capitalize text-start border">
                  {disk.Avail}
                </td>
                <td className="py-3 px-3 text-[14px] capitalize text-start border">
                  {disk.UseMountedonl}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="text-[18px] mt-4  font-bold">MEM</h2>
        <table className="table-auto w-full mt-3">
          <thead>
            <tr>
              <th className="py-3 px-3  text-[14px] capitalize text-start"></th>
              <th className="py-3 px-3 bg-[#F0F1F3] text-[14px] capitalize text-start ">
                Total
              </th>
              <th className="py-3 px-3 bg-[#F0F1F3] text-[14px] capitalize text-start ">
                Used
              </th>
              <th className="py-3 px-3 bg-[#F0F1F3] text-[14px] capitalize text-start ">
                Free
              </th>
              <th className="py-3 px-3 bg-[#F0F1F3] text-[14px] capitalize text-start ">
                Shared
              </th>
              <th className="py-3 px-3 bg-[#F0F1F3] text-[14px] capitalize text-start ">
                buff/cache
              </th>
              <th className="py-3 px-3 bg-[#F0F1F3] text-[14px] capitalize text-start ">
                buff/cache
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="py-3 px-3 bg-[#F0F1F3] text-[14px] capitalize text-start ">
                Mem
              </th>
              <td className="py-3 px-3 border text-[14px] capitalize text-start ">
                49Gi
              </td>
              <td className="py-3 px-3 border text-[14px] capitalize text-start ">
                4.6Gi
              </td>
              <td className="py-3 px-3 border text-[14px] capitalize text-start ">
                2.5Gi
              </td>
              <td className="py-3 px-3 border text-[14px] capitalize text-start ">
                16Mi
              </td>
              <td className="py-3 px-3 border text-[14px] capitalize text-start ">
                16Mi
              </td>
              <td className="py-3 px-3 border text-[14px] capitalize text-start ">
                44Gi
              </td>
            </tr>
            <tr>
              <th className="py-3 px-3 bg-[#F0F1F3] text-[14px] capitalize text-start ">
                Swap
              </th>
              <td className="py-3 px-3 border text-[14px] capitalize text-start ">
                49Gi
              </td>
              <td className="py-3 px-3 border text-[14px] capitalize text-start ">
                4.6Gi
              </td>
              <td className="py-3 px-3 border text-[14px] capitalize text-start ">
                2.5Gi
              </td>
              <td className="py-3 px-3 border text-[14px] capitalize text-start ">
                16Mi
              </td>
              <td className="py-3 px-3 border text-[14px] capitalize text-start ">
                16Mi
              </td>
              <td className="py-3 px-3 border text-[14px] capitalize text-start ">
                44Gi
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SystemResourcesPopup;
