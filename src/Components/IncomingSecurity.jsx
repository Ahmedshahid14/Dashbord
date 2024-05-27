import React from "react";
import { Doughnut } from "react-chartjs-2";
import "tailwindcss/tailwind.css";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend, Title);

const IncomingSecurity = () => {
  const data = {
    labels: ["SCPRX"],
    datasets: [
      {
        label: "SCPRX",
        data: [99.7, 0.8],
        backgroundColor: ["#F56B3F", "#F56B3F1A"],
        hoverBackgroundColor: ["#F56B3F", "#F56B3F"],
      },
    ],
  };

  const centerTextPlugin = {
    id: "centerText",
    beforeDraw: (chart) => {
      const { ctx, width, height } = chart;
      ctx.save();
      ctx.font = "bold 20px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#f97316";
      ctx.fillText("99.7%", width / 2, height / 2);
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
    <div className="bg-white shadow w-full h-[80%] rounded-lg">
      <h2 className="text-xl font-semibold p-4">Security</h2>
      <div className="flex  items-center bg-[#F9F9FC] p-4 justify-between rounded-t-lg">
        <span className="font-bold">incoming</span>
        <span className="font-bold">356</span>
      </div>
      <div className="flex  items-center bg-[#F9F9FC] p-4 justify-between rounded-t-lg">
        <span className="font-bold">Other</span>
        <span className="font-bold">1</span>
      </div>
      <div className="grid grid-cols-3">
        <div className="p-6 col-span-2">
          <Doughnut
            data={data}
            options={options}
            plugins={[centerTextPlugin]}
          />
        </div>
        <div className="flex justify-start mt-4 flex-col  pb-4">
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 bg-[#f56b3f] rounded-full mr-2"></span>
            <span>incoming</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 bg-[#F56B3F1A] rounded-full mr-2"></span>
            <span>Other</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomingSecurity;
