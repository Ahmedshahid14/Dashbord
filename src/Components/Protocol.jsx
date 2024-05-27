import React from "react";
import { Doughnut } from "react-chartjs-2";
import "tailwindcss/tailwind.css";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend, Title);

export default function Protocol() {
  const data = {
    labels: ["Protocol"],
    datasets: [
      {
        label: "Protocol",
        data: [30, 20 ,25,20],
        backgroundColor: ["#F97316", "#FFDAD9" ,"#62D2FF","#8B5E83"], 
        hoverBackgroundColor: ["#FB923C", "#E5E7EB"],
      },
    ],
  };

  const centerTextPlugin = {
    id: "centerText",
    beforeDraw: (chart) => {
      const { ctx } = chart;
      ctx.save();
      ctx.font = "bold 20px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#f97316";
    },
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      centerText: true,
    },
  };

  return (
    <div className="bg-white shadow w-full rounded-lg">
      <h2 className="text-xl font-semibold p-4">Host Group</h2>
      <div className="flex items-center bg-[#F9F9FC] p-4 justify-between rounded-t-lg">
        <span className="font-bold">UDP</span>
        <span className="font-bold">355</span>
      </div>
      <div className="flex items-center bg-[#F9F9FC] p-4 justify-between rounded-t-lg">
        <span className="font-bold">TCP</span>
        <span className="font-bold">355</span>
      </div>
      <div className="flex items-center bg-[#F9F9FC] p-4 justify-between rounded-t-lg">
        <span className="font-bold">ICMP</span>
        <span className="font-bold">355</span>
      </div>
      <div className="flex items-center bg-[#F9F9FC] p-4 justify-between rounded-t-lg">
        <span className="font-bold">HOPOPT</span>
        <span className="font-bold">1</span>
      </div>
      <div className="grid grid-cols-3">
        <div className="relative p-6 col-span-2">
          <Doughnut
            data={data}
            options={options}
            plugins={[centerTextPlugin]}
          />
        </div>
        <div className="flex justify-start mt-4 flex-col  pb-4">
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 bg-[#f56b3f] rounded-full mr-2"></span>
            <span>UDP</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 bg-[#62D2FF] rounded-full mr-2"></span>
            <span>TCP</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 bg-[#8B5E83] rounded-full mr-2"></span>
            <span>ICMP</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 bg-[#FFDAD9] rounded-full mr-2"></span>
            <span>HOPOPT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
