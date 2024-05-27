import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import Graphs from "../Components/Graphs";
import Server from "../Components/Server";
import PPSChart from "../Components/PPSChart";
import TrafficChart from "../Components/TrafficChart";
import MetricCard from "../Components/MetricCard";
import HostsTable from "../Components/HostsTable";
import RemoteHost from "../Components/RemoteHost";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);
  return (
    <div>
      <div className="mt-5">
        <div className="grid grid-cols-2">
          <div className="flex">
            <h2 className="text-2xl">Dashboard</h2>
          </div>
          <div className="flex justify-end items-center gap-5">
            <button className="bg-transparent text-[#F56B3F] flex items-center py-1 rounded px-2 gap-1 border-[#F56B3F] border">
              <FaPlus />General
            </button>
            <button className="bg-[#F56B3F] text-[#fff] flex items-center py-1 rounded px-2 gap-1">
              <FaPlus />Details hello
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5 w-full">
        <Graphs />
      </div>
      <div className="my-5 w-full">
        <Server />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="w-full">
          <TrafficChart />
        </div>
        <div className="w-full">
          <PPSChart />
        </div>
      </div>
      <div>
        <MetricCard />
      </div>
      <div>
        <HostsTable />
      </div>
      <div>
        <RemoteHost />
      </div>
    </div>
  );
};

export default Dashboard;
