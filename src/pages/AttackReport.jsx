import React, { useEffect } from "react";
import CustomersHostgroup from "../Components/CustomersHostgroup";
import Summary from "../Components/Summary";
import DoughnutChart from "../Components/DoughnutChart";
import SecurityChart from "../Components/SecurityChart";
import TopAttacks from "../Components/TopAttacks";
import Protocol from "../Components/Protocol";
import IncomingSecurity from "../Components/IncomingSecurity";

const AttackReport = () => {
  useEffect(() => {
    document.title = "Attack Report";
  }, []);
  return (
    <div>
      <div className="mt-5">
        <CustomersHostgroup />
      </div>
      <div className="mt-5">
        <Summary />
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-7 gap-4">
          <div className="flex col-span-2">
            <DoughnutChart />
          </div>
          <div className="flex col-span-2">
            <SecurityChart />
          </div>
          <div className="flex col-span-3">
            <TopAttacks />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-7 gap-4">
          <div className="flex col-span-2">
            <Protocol />
          </div>
          <div className="flex col-span-2">
            <IncomingSecurity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttackReport;
