import React, { useEffect } from "react";
import ConfigTabs from "../Components/ConfigTabs";

const ConfigView = () => {
  useEffect(() => {
    document.title = "Config View";
  }, []);
  return (
    <div>
      <div className="mt-5">
        <ConfigTabs />
      </div>
    </div>
  );
};

export default ConfigView;
