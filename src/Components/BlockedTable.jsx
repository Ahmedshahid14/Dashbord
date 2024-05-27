import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BsArrowDownRight } from "react-icons/bs";

export default function BlockedTable() {
    const AttackBlocked =[
        {
            When: 'od 6h 39m',
            DataDirection: 'Incoming',
            IPAddress: '194.31.199.6',
            MBPS:'483.6 MB/s',
            pps:'50 Thsnd',
        },
        {
            When: 'od 6h 39m',
            DataDirection: 'Incoming',
            IPAddress: '194.31.199.6',
            MBPS:'483.6 MB/s',
            pps:'50 Thsnd',
        },
        {
            When: 'od 6h 39m',
            DataDirection: 'Incoming',
            IPAddress: '194.31.199.6',
            MBPS:'483.6 MB/s',
            pps:'50 Thsnd',
        },
        {
            When: 'od 6h 39m',
            DataDirection: 'Incoming',
            IPAddress: '194.31.199.6',
            MBPS:'483.6 MB/s',
            pps:'50 Thsnd',
        },
    ]
  return (
    <>
    <div className="bg-white shadow">
        <h2 className='text-2xl font-bold p-4'>Last Attack Blocked</h2>
     <table className='table-auto w-full'>
        <thead>
            <tr className='bg-[#F9F9FC]'>
                <th className='py-3 px-4 text-start'>When</th>
                <th className='py-3 px-4 text-start'>Data Direction</th>
                <th className='py-3 px-4 text-start'>IP Address</th>
                <th className='py-3 px-4 text-start'>MBPS</th>
                <th className='py-3 px-4 text-start'>pps</th>
                <th className='py-3 px-4 text-start'>Action</th>
                <th className='py-3 px-4 text-start'>View</th>
            </tr>
        </thead>    
        <tbody>
            {AttackBlocked.map((Blocked, index)=>(
            <tr key={index}>
                <td className='py-3 px-4 text-[14px] border text-start'>{Blocked.When}</td>
                <td className='py-3 px-4 text-[14px] border text-start '><span className='bg-[#f3eff3] font-bold w-[110px] rounded text-[#8B5E83] p-2 gap-1 flex items-center'><BsArrowDownRight />{Blocked.DataDirection}</span></td>
                <td className='py-3 px-4 text-[14px] border text-start'>{Blocked.IPAddress}</td>
                <td className='py-3 px-4 text-[14px] border text-start'>{Blocked.MBPS}</td>
                <td className='py-3 px-4 text-[14px] border text-start'>{Blocked.pps}</td>
                <td className='py-3 px-4 text-[14px] border text-start'><button className='p-2 bg-[#FFEBEB] gap-1 text-[#FF3333] text-[14px] flex items-center rounded '><RiDeleteBin6Line />Delete</button></td>
                <td className='py-3 px-4 border text-start'><button className='p-2 bg-[#E7F3ED] gap-1 text-[#0D894F] text-[14px] flex items-center rounded '><MdOutlineRemoveRedEye />view</button></td>
            </tr>
            ))}
        </tbody>
    </table> 
    </div>
    </>
  )
}
