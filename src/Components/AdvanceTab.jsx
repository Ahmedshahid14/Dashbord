import React from 'react'

export default function AdvanceTab() {
    const Incoming = [
        {
            IPAddress: '# 194.31.199.6',
            Max: '351Mbps',
            Average: '65.6Mbps',
            flowMax: '36336',
            flowAverage: '6238.8',
            Max2: '36336',
            Average2: '36336',
        },
        {
            IPAddress: '# 194.31.199.6',
            Max: '351Mbps',
            Average: '65.6Mbps',
            flowMax: '36336',
            flowAverage: '6238.8',
            Max2: '36336',
            Average2: '36336',
        },
        {
            IPAddress: '# 194.31.199.6',
            Max: '351Mbps',
            Average: '65.6Mbps',
            flowMax: '36336',
            flowAverage: '6238.8',
            Max2: '36336',
            Average2: '36336',
        },
        {
            IPAddress: '# 194.31.199.6',
            Max: '351Mbps',
            Average: '65.6Mbps',
            flowMax: '36336',
            flowAverage: '6238.8',
            Max2: '36336',
            Average2: '36336',
        },
        {
            IPAddress: '# 194.31.199.6',
            Max: '351Mbps',
            Average: '65.6Mbps',
            flowMax: '36336',
            flowAverage: '6238.8',
            Max2: '36336',
            Average2: '36336',
        },
    ]

    const Outgoing = [
        {
            IPAddress: '# 194.31.199.6',
            Max: '351Mbps',
            Average: '65.6Mbps',
            flowMax: '36336',
            flowAverage: '6238.8',
            Max2: '36336',
            Average2: '36336',
        },
        {
            IPAddress: '# 194.31.199.6',
            Max: '351Mbps',
            Average: '65.6Mbps',
            flowMax: '36336',
            flowAverage: '6238.8',
            Max2: '36336',
            Average2: '36336',
        },
        {
            IPAddress: '# 194.31.199.6',
            Max: '351Mbps',
            Average: '65.6Mbps',
            flowMax: '36336',
            flowAverage: '6238.8',
            Max2: '36336',
            Average2: '36336',
        },
        {
            IPAddress: '# 194.31.199.6',
            Max: '351Mbps',
            Average: '65.6Mbps',
            flowMax: '36336',
            flowAverage: '6238.8',
            Max2: '36336',
            Average2: '36336',
        },
        {
            IPAddress: '# 194.31.199.6',
            Max: '351Mbps',
            Average: '65.6Mbps',
            flowMax: '36336',
            flowAverage: '6238.8',
            Max2: '36336',
            Average2: '36336',
        },
    ]
  return (
    <>
    <div className="bg-[#F4F4F4] p-2 rounded shadow">
      <div className="grid grid-cols-2 py-6 px-3 bg-[#fff] rounded shadow">
        <div className="flex items-center justify-start">
          <h2 className="text-[18px] font-bold">Traffic Top Max </h2>
        </div>
        <div className="flex items-center justify-end gap-2">
          <button className="bg-[#F2F2F2] p-2 text-black rounded">Hostgroup</button>
          <button className="bg-[#FF3333] p-2 text-white rounded">
            IP Address
          </button>
        </div>
      </div>
    </div>
    <div className="mt-5">
        <div className="bg-white rounded shadow">
            <h2 className="text-[18px] font-bold px-3 py-5 border-b border-[#E0E2E7]">Incoming</h2>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="bg-[#F9F9FC]"></th>
                        <th className="bg-[#F0F3FF] py-3 px-2 text-[14px]">pps</th>
                        <th className="bg-[#F0F3FF] py-3 px-2 text-[14px]"></th>
                        <th className="bg-[#F6FEFE] py-3 px-2 text-[14px]">flow</th>
                        <th className="bg-[#F6FEFE] py-3 px-2 text-[14px]"></th>
                        <th className="bg-[#EBF8FF] py-3 px-2 text-[14px]">flow</th>
                        <th className="bg-[#EBF8FF] py-3 px-2 text-[14px]"></th>
                    </tr>
                    <tr>
                        <th className="bg-[#E7F0F5] py-3 px-2 text-[14px]">IP Address</th>
                        <th className="bg-[#F0F3FF] py-3 px-2 text-[14px]">Max</th>
                        <th className="bg-[#F0F3FF] py-3 px-2 text-[14px]">Average</th>
                        <th className="bg-[#F6FEFE] py-3 px-2 text-[14px]">Max</th>
                        <th className="bg-[#F6FEFE] py-3 px-2 text-[14px]">Average</th>
                        <th className="bg-[#EBF8FF] py-3 px-2 text-[14px]">Max</th>
                        <th className="bg-[#EBF8FF] py-3 px-2 text-[14px]">Average</th>
                    </tr>
                </thead>
                <tbody>
                    {Incoming.map((incoming, index)=>(
                   <tr key={index}>
                        <td className='text-[14px] py-3 px-2 text-center border'>{incoming.IPAddress}</td>
                        <td className='text-[14px] py-3 px-2 text-center border'>{incoming.Max}</td>
                        <td className='text-[14px] py-3 px-2 text-center border'>{incoming.Average}</td>
                        <td className='text-[14px] py-3 px-2 text-center border'>{incoming.flowMax}</td>
                        <td className='text-[14px] py-3 px-2 text-center border'>{incoming.flowAverage}</td>
                        <td className='text-[14px] py-3 px-2 text-center border'>{incoming.Max2}</td>
                        <td className='text-[14px] py-3 px-2 text-center border'>{incoming.Average2}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    <div className="mt-5">
        <div className="bg-white rounded shadow">
            <h2 className="text-[18px] font-bold px-3 py-5 border-b border-[#E0E2E7]">Outgoing</h2>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="bg-[#F9F9FC]"></th>
                        <th className="bg-[#F0F3FF] py-3 px-2 text-[14px]">pps</th>
                        <th className="bg-[#F0F3FF] py-3 px-2 text-[14px]"></th>
                        <th className="bg-[#F6FEFE] py-3 px-2 text-[14px]">flow</th>
                        <th className="bg-[#F6FEFE] py-3 px-2 text-[14px]"></th>
                        <th className="bg-[#EBF8FF] py-3 px-2 text-[14px]">flow</th>
                        <th className="bg-[#EBF8FF] py-3 px-2 text-[14px]"></th>
                    </tr>
                    <tr>
                        <th className="bg-[#E7F0F5] py-3 px-2 text-[14px]">IP Address</th>
                        <th className="bg-[#F0F3FF] py-3 px-2 text-[14px]">Max</th>
                        <th className="bg-[#F0F3FF] py-3 px-2 text-[14px]">Average</th>
                        <th className="bg-[#F6FEFE] py-3 px-2 text-[14px]">Max</th>
                        <th className="bg-[#F6FEFE] py-3 px-2 text-[14px]">Average</th>
                        <th className="bg-[#EBF8FF] py-3 px-2 text-[14px]">Max</th>
                        <th className="bg-[#EBF8FF] py-3 px-2 text-[14px]">Average</th>
                    </tr>
                </thead>
                <tbody>
                    {Outgoing.map((outgoing, index)=>(
                   <tr key={index}>
                        <td className='text-[14px] py-3 px-2 text-center border'>{outgoing.IPAddress}</td>
                        <td className='text-[14px] py-3 px-2 text-center border'>{outgoing.Max}</td>
                        <td className='text-[14px] py-3 px-2 text-center border'>{outgoing.Average}</td>
                        <td className='text-[14px] py-3 px-2 text-center border'>{outgoing.flowMax}</td>
                        <td className='text-[14px] py-3 px-2 text-center border'>{outgoing.flowAverage}</td>
                        <td className='text-[14px] py-3 px-2 text-center border'>{outgoing.Max2}</td>
                        <td className='text-[14px] py-3 px-2 text-center border'>{outgoing.Average2}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  </>
  )
}

