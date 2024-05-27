import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Blackhole from "../Components/Blackhole";
import BlockedTable from "../Components/BlockedTable";

const BlockManager = () => {
  useEffect(() => {
    document.title = "Block Manager";
  }, []);

  const navigate = useNavigate();

  const handleWhiteListClick = () => {
    navigate("/whitelist");
  };

  return (
    <div>
      <div className="mt-5">
        <Blackhole onWhiteListClick={handleWhiteListClick} />
      </div>
      <div className="mt-5">
        <BlockedTable />
      </div>
    </div>
  );
};

export default BlockManager;
