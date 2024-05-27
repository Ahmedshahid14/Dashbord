import React, { useEffect } from "react";
import HostgroupCustomersList from "../Components/HostgroupCustomersList";
import CustomersIssues from "../Components/CustomersIssues";

const Customers = () => {
  useEffect(() => {
    document.title = "Customers";
  }, []);
  return (
    <div>
      <div className="my-5">
        <HostgroupCustomersList />
      </div>
      <div>
        <CustomersIssues />
      </div>
    </div>
  );
};

export default Customers;
