import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Point 1', uv: 4.2 },
  { name: 'Point 2', uv: 5.1 },
  { name: 'Point 3', uv: 3.7 },
  { name: 'Point 4', uv: 6.4 },
  { name: 'Point 5', uv: 2.9 },
  { name: 'Point 6', uv: 4.8 },
  { name: 'Point 7', uv: 6.5 },
  { name: 'Point 8', uv: 3.2 },
  { name: 'Point 9', uv: 7.6 },
  { name: 'Point 10', uv: 8.9 },
  { name: 'Point 11', uv: 4.3 },
];

const data2 = [
  { name: 'Point 1', uv: 2.1 },
  { name: 'Point 2', uv: 6.7 },
  { name: 'Point 3', uv: 4.3 },
  { name: 'Point 4', uv: 8.4 },
  { name: 'Point 5', uv: 2.9 },
  { name: 'Point 6', uv: 5.3 },
  { name: 'Point 7', uv: 7.1 },
  { name: 'Point 8', uv: 3.5 },
  { name: 'Point 9', uv: 9.8 },
  { name: 'Point 10', uv: 5.4 },
  { name: 'Point 11', uv: 6.2 },
];

const data3 = [
  { name: 'Point 1', uv: 1.2 },
  { name: 'Point 2', uv: 3.4 },
  { name: 'Point 3', uv: 6.8 },
  { name: 'Point 4', uv: 4.5 },
  { name: 'Point 5', uv: 2.2 },
  { name: 'Point 6', uv: 8.1 },
  { name: 'Point 7', uv: 5.6 },
  { name: 'Point 8', uv: 3.9 },
  { name: 'Point 9', uv: 7.3 },
  { name: 'Point 10', uv: 9.1 },
  { name: 'Point 11', uv: 4.8 },
];

const data4 = [
  { name: 'Point 1', uv: 9.2 },
  { name: 'Point 2', uv: 3.1 },
  { name: 'Point 3', uv: 7.8 },
  { name: 'Point 4', uv: 5.4 },
  { name: 'Point 5', uv: 2.6 },
  { name: 'Point 6', uv: 8.9 },
  { name: 'Point 7', uv: 6.3 },
  { name: 'Point 8', uv: 3.5 },
  { name: 'Point 9', uv: 7.4 },
  { name: 'Point 10', uv: 4.7 },
  { name: 'Point 11', uv: 6.1 },
];

const data5 = [
  { name: 'Point 1', uv: 1.4 },
  { name: 'Point 2', uv: 6.2 },
  { name: 'Point 3', uv: 4.7 },
  { name: 'Point 4', uv: 8.5 },
  { name: 'Point 5', uv: 2.3 },
  { name: 'Point 6', uv: 5.8 },
  { name: 'Point 7', uv: 7.6 },
  { name: 'Point 8', uv: 3.9 },
  { name: 'Point 9', uv: 9.1 },
  { name: 'Point 10', uv: 5.4 },
  { name: 'Point 11', uv: 6.7 },
];

const GraphsItems = ({ title, value, max, timestamp, color, graphData }) => (
  <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between">
    <div>
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-gray-500">Max: {max}</p>
      <p className="text-sm text-gray-500">{timestamp}</p>
    </div>
    <div className="w-24 h-24 rounded-full overflow-hidden">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={graphData}>
          <Line type="monotone" dataKey="uv" stroke={color} strokeWidth={2} dot={false} />
          <XAxis hide={true} />
          <YAxis hide={true} />
          <Tooltip formatter={(value) => `${value} Gbps`} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const Graphs = () => {
  const items = [
    { title: 'Incoming Traffic', value: '4.65Gbps', max: '45.5GBPS', timestamp: '2024-04-02 14:59:23', color: '#f97316', graphData: data },
    { title: 'Outgoing Traffic', value: '4.65Gbps', max: '45.5GBPS', timestamp: '2024-04-02 14:59:23', color: '#AA55DD', graphData: data2 },
    { title: 'Incoming PPS', value: '4.65Gbps', max: '45.5GBPS', timestamp: '2024-04-02 14:59:23', color: '#72DEF6', graphData: data3 },
    { title: 'Outgoing PPS', value: '4.65Gbps', max: '45.5GBPS', timestamp: '2024-04-02 14:59:23', color: '#63D51D', graphData: data4 },
    { title: 'IP Blocked', value: '0', max: '45.5GBPS', timestamp: '2024-04-02 14:59:23', color: '#DD525A', graphData: data5 },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {items.map((item, index) => (
          <GraphsItems key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Graphs;
