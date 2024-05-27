import React from "react";

export default function TopAttacks() {
    const TopAttacks =[
        {
            TargetIPAddress:'194.31.199.218',
            Total:'29',
        },
        {
            TargetIPAddress:'194.31.199.218',
            Total:'29',
        },
        {
            TargetIPAddress:'194.31.199.218',
            Total:'29',
        },
        {
            TargetIPAddress:'194.31.199.218',
            Total:'29',
        },
    ] 
  return (
    <>
      <div className="bg-white shadow w-full rounded-lg">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold p-4">Top Attacks</h2>
          <span className="text-[#F56B3F] bg-[#fef0ec] rounded p-2">
            Total 04
          </span>
        </div>
        <table className="table-auto w-full">
            <thead>
                <tr className="bg-[#F9F9FC]">
                    <th className="text-[14px] p-4 text-start">Target IP Address</th>
                    <th className="text-[14px] p-4 text-start">Total</th>
                </tr>
            </thead>
            <tbody>
                {TopAttacks.map((attacks, index)=>(
                <tr key={index}>
                    <td className="mx-3 p-4 my-2 border">{attacks.TargetIPAddress}</td>
                    <td className="mx-3 p-4 my-2 border">{attacks.Total}</td>
                </tr>
                ))}
            </tbody>
        </table>
      </div>
    </>
  );
}
