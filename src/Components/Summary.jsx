import React from 'react'

export default function Summary() {
  return (
    <>
      <div className="bg-[#F3F3F3] shadow rounded p-2">
        <div className='bg-white shadow p-5 rounded'>
            <h2 className='#F56B3F text-[18px] text-[#F56B3F] font-bold'>Summary</h2>
            <ul>
                <li><b>Report Name:</b></li>
                <li><b>Created:</b> 2024-04-29 13:38:25</li>
                <li><b>At the range date from 2024-03-30 to 2024-04-29:</b></li>
                <li>There was <span className="text-[#F56B3F]">356 attacks</span> &nbsp;The top attack was to <span className="text-[#F56B3F]"> 194.31.199.218</span> &nbsp; with <span className="text-[#F56B3F]"> 29 attacks.</span></li>
            </ul>
        </div>
      </div>
    </>
  )
}
