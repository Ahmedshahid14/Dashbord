import React from "react";
import icon from "../images/icon/emty.svg"; // Ensure this path to the icon is correct

export default function AdvanceSettings() {
  const licenseInfo = {
    clientName: "xFiber.be PRODUCTION",
    serialID: "A11B9766-4C41-4838-95CF-B17D1417E29E",
    version: "2.0.362",
    ipv4: "185.44.119.182",
    memorySize: "50271",
    cpus: "50271",
    cpuModel: "Intel(R) Xeon(R) Gold 5218 CPU @ 2.30GHz",
    expirationDate: "2024-04-30",
    validationDate: "2024-05-17",
    bandwidth: "10000",
  };

  return (
    <div className="bg-white shadow-sm rounded-lg">
      <div className="flex items-center p-4 border-b justify-between">
        <div className="flex items-center gap-2">
        <h1 className="text-[18px] font-bold ">

          License: FastNetMon Advanced v4.2.7
        </h1>
        <div className="bg-[#FEF0EC] text-[14px] py-1 px-2 rounded font-bold text-[#F56B3F]">FNM Manager</div>
        </div>
        <div className="flex items-center justify-end gap-4">
          <button className="bg-white border p-2 rounded text-sm">Renew License</button>
          <button className="bg-[#F56B3F] text-white border p-2 rounded text-sm">Visit Site</button>
        </div>
      </div>
      <div className="p-4">
        {Object.entries(licenseInfo).map(([key, value]) => (
          <div key={key} className="flex items-center gap-2 border-b py-2">
            <div className="flex-shrink-0">
              <div className="p-1 bg-[#FDF1E8] rounded-full">
              <div className="p-2 bg-[#FAE1CF] rounded-full">
                <img src={icon} className="h-5 w-5" alt="icon" />
              </div>
              </div>
            </div>
            <div className="flex-grow">
              <div className="text-sm capitalize font-semibold">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .toLowerCase()
                  .replace("ipv4", "IP Address")}
              </div>
              <div className="text-sm">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
