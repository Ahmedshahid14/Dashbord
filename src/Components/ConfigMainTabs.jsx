import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Modal from './Modal';

const data = [
  { id: 1, name: "mirror_afpacket", isActive: true },
  { id: 2, name: "mirror_afpacket", isActive: true },
  { id: 3, name: "mirror_afpacket", isActive: true },
  { id: 4, name: "mirror_afpacket", isActive: true },
  { id: 5, name: "mirror_afpacket", isActive: true },
  { id: 6, name: "mirror_afpacket", isActive: true },
];

const itemsPerPage = 5; // Number of items per page

const ConfigMainTabs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [configData, setConfigData] = useState(data);

  const filteredData = configData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const toggleModal = (item) => {
    setCurrentItem(item);
    setShowModal(!showModal);
  };

  const updateItemStatus = (updatedItem) => {
    const updatedData = configData.map(item =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setConfigData(updatedData);
  };

  return (
    <div className="mt-5">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <h1 className="text-lg font-semibold p-5 border-b text-gray-700">
          Main
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
                <button
                  className="bg-[#E6F1FC] text-[#016FE3] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => toggleModal(item)}
                >
                  Edit
                </button>
                <span
                  className={`ml-4 inline-block py-2 px-4 w-[90px] text-center rounded text-sm font-semibold ${
                    item.isActive
                      ? "bg-[#E8F9F1] text-[#17C671]"
                      : "bg-[#ffebeb] text-[#FF3333]"
                  }`}
                >
                  {item.isActive ? "Active" : "Inactive"}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center px-5 py-3">
          <span className="text-[#667085]">
            Showing {indexOfFirstItem + 1}-
            {Math.min(indexOfLastItem, filteredData.length)} from{" "}
            {filteredData.length}
          </span>
          <div className="flex items-center space-x-1">
            <button
              className="px-3 py-1 rounded bg-[#FEF1EC] text-[#F56B3F]"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
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
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="px-3 py-1 rounded bg-[#FEF1EC] text-[#F56B3F]"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal onClose={toggleModal} currentItem={currentItem} updateItemStatus={updateItemStatus} />
      )}
    </div>
  );
};

export default ConfigMainTabs;
