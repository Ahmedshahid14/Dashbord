// src/components/TrafficChart.js

import React, { useRef, useLayoutEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { FaSearch, FaSearchPlus, FaSearchMinus, FaHandPointer, FaHome } from 'react-icons/fa';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, zoomPlugin);

const TrafficChart = () => {
  const chartRef = useRef(null);
  const [isDragEnabled, setIsDragEnabled] = useState(false);

  const [data, setData] = useState({
    labels: ['04:00', '05:00', '06:00', '07:00', '08:00', '09:00'],
    datasets: [
      {
        label: 'Incoming Traffic',
        data: [6, 7, 6.5, 7.8, 7, 6.2, 7.5],
        borderColor: '#5C59E8',
        backgroundColor: 'rgba(92, 89, 232, 0.05)',
        fill: true,
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4,
      },
      {
        label: 'Outgoing Traffic',
        data: [5.5, 6.5, 5.8, 6.9, 6.2, 6.8, 7],
        borderColor: '#E46A11',
        backgroundColor: 'rgba(228, 106, 17, 0.05)',
        fill: true,
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.4,
      },
    ]
  });

  useLayoutEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;

      const gradientIn = ctx.createLinearGradient(0, 0, 0, 400);
      gradientIn.addColorStop(0, '#7D7AED');
      gradientIn.addColorStop(1, '#FFFFFF');

      const gradientOut = ctx.createLinearGradient(0, 0, 0, 400);
      gradientOut.addColorStop(0, '#E98841');
      gradientOut.addColorStop(1, '#FFFFFF');

      const newData = {
        ...data,
        datasets: data.datasets.map((dataset, index) => ({
          ...dataset,
          backgroundColor: index === 0 ? gradientIn : gradientOut,
        }))
      };
      setData(newData);
    }
  }, [chartRef]);

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Bandwidth (Gbps)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      zoom: {
        pan: {
          enabled: isDragEnabled,
          mode: 'x',
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: 'x',
        },
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    }
  };

  const handleZoomIn = () => {
    const chart = chartRef.current;
    if (chart) {
      chart.zoom(1.1);
    }
  };

  const handleZoomOut = () => {
    const chart = chartRef.current;
    if (chart) {
      chart.zoom(0.9);
    }
  };

  const handleReset = () => {
    const chart = chartRef.current;
    if (chart) {
      chart.resetZoom();
    }
  };

  const handleToggleDrag = () => {
    setIsDragEnabled(prevState => !prevState);
  };

  return (
    <div className="w-full p-4 bg-white shadow rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">Traffic</h2>
          <p className="text-gray-600">Incoming / Outgoing</p>
        </div>
        <div className="flex space-x-2 text-gray-600">
          <FaSearch className="cursor-pointer" onClick={handleReset} />
          <FaSearchPlus className="cursor-pointer" onClick={handleZoomIn} />
          <FaSearchMinus className="cursor-pointer" onClick={handleZoomOut} />
          <FaHandPointer className={`cursor-pointer ${isDragEnabled ? 'text-blue-500' : ''}`} onClick={handleToggleDrag} />
          <FaHome className="cursor-pointer" onClick={handleReset} />
        </div>
      </div>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default TrafficChart;
