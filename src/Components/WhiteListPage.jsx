import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import UDPFlood from "./UDPFlood";
import ReportTable from "./ReportTable";
import AttacksTarget from "./AttacksTarget";

const WhiteListPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "whitelist";
  }, []);
  return (
    <>
      <div className="mt-5 flex items-center gap-2">
        <button
          className="bg-[#F2E5E0] text-[#F56B3F] py-2 px-4 rounded"
          onClick={() => navigate(-1)}
        >
          <RiArrowGoBackFill />
        </button>
        <h2 className="text-xl font-bold">Attack Reports</h2>
      </div>
      <div className="mt-5">
        <UDPFlood />
      </div>
        <div className="grid grid-cols-2 gap-4 ">
            <ReportTable/>
            <AttacksTarget/>
        </div>
    </>
  );
};

export default WhiteListPage;
