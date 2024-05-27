import React, { useEffect } from "react";
import Tabs from "../Components/Tabs";

const TrafficReport = () => {
  useEffect(() => {
    document.title = "Traffic Report";
  }, []);
  return (
    <div>
      <div className="mt-5">
        <Tabs />
      </div>
    </div>
  );
};

export default TrafficReport;
