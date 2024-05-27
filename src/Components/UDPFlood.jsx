import React from 'react'

export default function UDPFlood() {
  return (
    <>
      <div className="bg-[#F8F8F9] rounded shadow p-2">
        <div className="bg-white p-5">
          <div className="grid grid-cols-4">
            <div className="flex flex-col p-5 justify-center text-start ">
              <h2 className="text-[28px] font-bold">Middle</h2>
              <span className="text-[#667085] text-[18px]">Severity</span>
            </div>
            <div className="flex flex-col p-5 justify-center text-start border-l  border-r ">
              <h2 className="text-[28px] font-bold">UDP_Flood</h2>
              <span className="text-[#667085] text-[18px]">Traffic attack</span>
            </div>
            <div className="flex flex-col p-5 justify-center text-start border-r">
              <h2 className="text-[28px] font-bold">49989 PPS</h2>
              <span className="text-[#667085] text-[18px]">
                Packet Per seconds
              </span>
            </div>
            <div className="flex flex-col p-5 justify-center text-start ">
              <h2 className="text-[28px] font-bold">194.31.199.6</h2>
              <span className="text-[#667085] text-[18px]">Attack IP</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
