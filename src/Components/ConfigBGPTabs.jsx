import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const data = [
  { name: "Name", isActive: "SCBGP" },
  { name: "Description", isActive: "" },
  { name: "local_asn", isActive: "65001" },
  { name: "local_address", isActive: "185.44.119.182" },
  { name: "subnet_learning", isActive: "" },
  { name: "remote_asn", isActive: "207811" },
  { name: "remote_address", isActive: "89.221.39.11" },
  { name: "multihop", isActive: "Active (1)" },
  { name: "ipv4_unicast", isActive: "Active (1)" },
  { name: "ipv4_unicast_announces_limit", isActive: "0" },
  { name: "ipv6_flowspec_announces_limit", isActive: "0" },
  { name: "ipv4_unicast", isActive: "Active (1)" }
];

const ConfigBGPTabs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (item.isActive && item.isActive.toString().toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="mt-5">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <h1 className="text-lg font-semibold p-5 border-b text-gray-700">
          BGP Configurations
        </h1>
        <div className="flex justify-end items-center p-5 border-b">
          <div className="relative">
            <input
              type="search"
              className="border border-gray-300 rounded py-2 px-3 w-80 pr-10 focus:outline-none focus:ring-2 focus:ring-[#F56B3F] focus:border-transparent"
              placeholder="Search Config..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#F56B3F]">
              <AiOutlineSearch />
            </button>
          </div>
        </div>
        <ul>
          {filteredData.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center px-5 py-3 border-b last:border-b-0"
            >
              <span className="text-gray-700 font-semibold">{item.name}</span>
              <div className="flex items-center">
                <span className={`ml-4 inline-block py-2 px-4 rounded text-sm  ${
                    item.isActive === "Active (1)" ? "bg-[#E8F9F1] text-[#17C671]" : "bg-[#F2F2F2]"
                  }`}>
                  {item.isActive || "Not Specified"}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ConfigBGPTabs;
