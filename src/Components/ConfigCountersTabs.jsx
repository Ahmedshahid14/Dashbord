import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const data = [
  { name: "total_simple_packets_processed", isActive: 0 },
  { name: "total_simple_packets_processed", isActive: 0 },
  { name: "total_simple_packets_processed", isActive: 0 },
  { name: "total_simple_packets_processed", isActive: 0 },
  { name: "total_simple_packets_processed", isActive: 0 },
  { name: "total_simple_packets_processed", isActive: 0 },
];

const itemsPerPage = 5;

const ConfigCountersTabs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="mt-5">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <h1 className="text-lg font-semibold p-5 border-b text-gray-700">
          System Counters
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
          {currentItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center px-5 py-3 border-b last:border-b-0"
            >
              <span className="text-gray-700">{item.name}</span>
              <div className="flex items-center">
                <span className="ml-4 inline-block py-2 bg-[#F2F2F2] px-4 rounded text-sm font-semibold">
                  {item.isActive}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center px-5 py-3">
          <span className="text-[#667085]">
            Showing {indexOfFirstItem + 1}-
            {Math.min(indexOfLastItem, filteredData.length)} from
            {filteredData.length}
          </span>
          <div className="flex items-center space-x-1">
            <button
              className="px-3 py-1 rounded bg-[#FEF1EC] text-[#F56B3F]"
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
            >
              {"<"}
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-[#F56B3F] text-white"
                    : "bg-[#fef1ec] text-[#F56B3F]"
                }`}
                onClick={() => goToPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="px-3 py-1 rounded bg-[#FEF1EC] text-[#F56B3F]"
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigCountersTabs;
