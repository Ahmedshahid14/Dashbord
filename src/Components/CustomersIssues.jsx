import React from "react";

export default function CustomersIssues() {
  const Issues = [
    {
      Customers: "Value",
      Total: "Value",
      TotalAmply: "Value",
      TotalRelay: "Value",
    },
    {
      Customers: "Value",
      Total: "Value",
      TotalAmply: "Value",
      TotalRelay: "Value",
    },
  ];
  return (
    <>
    <div className="bg-white shadow px-4 py-5 rounded">
      <h2 className="text-2xl my-3">Customers with Issues</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-[#F9F9FC]">
            <th className="px-9 text-center text-[14px] py-4" >Customers</th>
            <th className="px-9 text-center text-[14px] py-4" >Total IP w/issues</th>
            <th className="px-9 text-center text-[14px] py-4" >Total Amply</th>
            <th className="px-9 text-center text-[14px] py-4" >Total Relay</th>
          </tr>
        </thead>
        <tbody>
        {Issues.map((issue, index) => (
          <tr key={index}>
            <td className="border px-4 text-center text-[14px] py-2">{issue.Customers}</td>
            <td className="border px-4 text-center text-[14px] py-2">{issue.Total}</td>
            <td className="border px-4 text-center text-[14px] py-2">{issue.TotalAmply}</td>
            <td className="border px-4 text-center text-[14px] py-2">{issue.TotalRelay}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
