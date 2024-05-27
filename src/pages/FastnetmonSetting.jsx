import React, { useEffect } from "react";
import GeneralSettingsTabs from "../Components/GeneralSettingsTabs";

const FastnetmonSetting = () => {
  useEffect(() => {
    document.title = "Fastnetmon Setting";
  }, []);
  return (
    <div>
      <div className="mt-5">
        <GeneralSettingsTabs />
      </div>
    </div>
  );
};

export default FastnetmonSetting;
