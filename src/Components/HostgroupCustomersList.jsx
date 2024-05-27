import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import icon from "../images/icon/tick.svg";
import icon2 from "../images/icon/cancle.svg";

const HostgroupCustomersList = () => {
  const customersList = [
    {
      Enable_ban: "Disable",
      Enable_ban_Incoming: "Disable",
      Name: "Global",
      Threshold_Maps: 1000,
      Threshold_PPS: 1000,
      Threshold_Flows: 3500,
      Networks: 0,
    },
    {
      Enable_ban: "Active",
      Enable_ban_Incoming: "Active",
      Name: "SCRPX",
      Threshold_Maps: 1000,
      Threshold_PPS: 1000,
      Threshold_Flows: 3500,
      Networks: 0,
    },

    {
      Enable_ban: "Active",
      Enable_ban_Incoming: "Disable",
      Name: "Local",
      Threshold_Maps: 950,
      Threshold_PPS: 1200,
      Threshold_Flows: 3300,
      Networks: 2,
    },
    {
      Enable_ban: "Disable",
      Enable_ban_Incoming: "Active",
      Name: "Regional",
      Threshold_Maps: 800,
      Threshold_PPS: 1100,
      Threshold_Flows: 3000,
      Networks: 1,
    },
    {
      Enable_ban: "Active",
      Enable_ban_Incoming: "Disable",
      Name: "Metro",
      Threshold_Maps: 1000,
      Threshold_PPS: 1000,
      Threshold_Flows: 3500,
      Networks: 0,
    },
    {
      Enable_ban: "Active",
      Enable_ban_Incoming: "Active",
      Name: "Urban",
      Threshold_Maps: 1000,
      Threshold_PPS: 900,
      Threshold_Flows: 2500,
      Networks: 3,
    },
  ];

  const [date, setDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 5;

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const filteredCustomers = customersList.filter((customer) =>
    customer.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = filteredCustomers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  return (
    <>
      <div className="my-3">
        <h1 className="text-2xl">Hostgroup Customers</h1>
      </div>
      <div className="bg-white shadow px-4 py-5 rounded">
        <div className="my-5 flex items-center">
          <select className="border w-72 rounded px-6 py-2">
            <option defaultValue>Select Categories</option>
          </select>
          &nbsp;&nbsp;
          <div className="relative">
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              className="border rounded px-6 py-2 appearance-none"
              style={{ color: date ? "inherit" : "transparent" }}
            />
            {date === "" && (
              <div className="absolute top-0 left-0 px-6 py-2 pointer-events-none">
                <span className="text-gray-500">Select Date</span>
              </div>
            )}
          </div>
          &nbsp;&nbsp;
          <button className="flex items-center px-6 py-2 border border-gray-300 rounded hover:bg-gray-100">
            <FaFilter className="mr-2" />
            <span>Filters</span>
          </button>
        </div>
        <div className="grid grid-cols-2 mb-5">
          <div className="place-content-center">
            <h2 className="text-2xl">Hostgroup Customers List</h2>
          </div>
          <div className="flex justify-end">
            <input
              type="search"
              className="border w-80 px-2"
              placeholder="Search Products"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="bg-[#F56B3F] text-white px-6 py-2">
              Search
            </button>
          </div>
        </div>
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-[#F9F9FC]">
              <th className="px-9 py-3 text-[14px]">Enable_ban</th>
              <th className="px-9 py-3 text-[14px]">Enable_ban_Incoming</th>
              <th className="px-9 py-3 text-[14px]">Name</th>
              <th className="px-9 py-3 text-[14px]">Threshold Maps</th>
              <th className="px-9 py-3 text-[14px]">Threshold PPS</th>
              <th className="px-9 py-3 text-[14px]">Threshold Flows</th>
              <th className="px-9 py-3 text-[14px]">Networks</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer, index) => (
              <tr key={index}>
                <td
                  style={{
                    color:
                      customer.Enable_ban === "Disable"
                        ? "red"
                        : customer.Enable_ban === "Active"
                        ? "green"
                        : "black",
                  }}
                  className="px-9 py-2 border"
                >
                  {customer.Enable_ban}
                </td>
                <td
                  style={{
                    color:
                      customer.Enable_ban_Incoming === "Disable"
                        ? "red"
                        : customer.Enable_ban_Incoming === "Active"
                        ? "green"
                        : "black",
                  }}
                  className="px-9 py-2 text-[14px] text-center border"
                >
                  {customer.Enable_ban_Incoming}
                </td>
                <td className="px-9 py-2 text-[14px] text-center border">
                  {customer.Name}
                </td>
                <td className="px-9 py-2 text-[14px] text-center  border">
                  <div className="flex items-center gap-2 justify-center">
                    <img src={icon} className="h-4" alt="" />
                    {customer.Threshold_Maps}
                  </div>
                </td>
                <td className="px-9 py-2 text-[14px]  text-center border">
                  <div className="flex items-center gap-2 justify-center">
                    <img src={icon2} className="h-3" alt="" />
                    {customer.Threshold_PPS}
                  </div>
                </td>
                <td className="px-9 py-2 text-[14px] text-center border">
                  <div className="flex items-center gap-2 justify-center">
                    <img src={icon2} className="h-3" alt="" />
                    {customer.Threshold_Flows}
                  </div>
                </td>
                <td className="px-9 py-2 text-[14px] text-center border">
                  {customer.Networks}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-5">
          <span className="text-[#667085]">
            Showing {indexOfFirstCustomer + 1}-
            {Math.min(indexOfLastCustomer, filteredCustomers.length)} from{" "}
            {filteredCustomers.length}
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
    </>
  );
};

export default HostgroupCustomersList;
