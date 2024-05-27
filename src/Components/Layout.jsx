import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setCollapsed(!collapsed);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
        setCollapsed(true);
      } else {
        setIsSidebarOpen(true);
        setCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar collapsed={collapsed} active={active} setActive={setActive} />
      <div className="flex-grow overflow-auto p-5">
        <Header toggleSidebar={toggleSidebar} toggleDropdown={toggleDropdown} isDropdownOpen={isDropdownOpen} />
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
