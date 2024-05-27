import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/icon/Logo.svg";
import SmallLogo from "../images/icon/SmallLogo.svg";
import {ReactComponent as Icon} from "../images/icon/dashbordwhite.svg";
import { ReactComponent as Icon2 } from "../images/icon/user.svg";
import { ReactComponent as Icon3 } from "../images/icon/trafic.svg";
import { ReactComponent as Icon4 } from "../images/icon/attack.svg";
import { ReactComponent as Icon5 } from "../images/icon/block.svg";
import { ReactComponent as Icon6 } from "../images/icon/setting.svg";
import { ReactComponent as Icon7 } from "../images/icon/view.svg";
import { ReactComponent as Icon8 } from "../images/icon/logout.svg";

// Icon white images
import IconWhite1 from "../images/icon/dashbord.svg";
import IconWhite2 from "../images/icon/userswhite.svg";
import IconWhite3 from "../images/icon/analyticswhite.svg";
import IconWhite4 from "../images/icon/alertwhite.svg";
import IconWhite5 from "../images/icon/Settingswhite.svg";
import IconWhite6 from "../images/icon/setting-svgrepo-white.svg";
import IconWhite7 from "../images/icon/eyewhite.svg";
import IconWhite8 from "../images/icon/logoutwhite.svg";

const menuItems = [
  { icon: <Icon />, iconWhite: <img src={IconWhite1} alt="Dashboard" />, name: "Dashboard", link: "/" },
  { icon: <Icon2 />, iconWhite: <img src={IconWhite2} alt="Customers" />, name: "Customers (Hostsgroup)", link: "/customers" },
  { icon: <Icon3 />, iconWhite: <img src={IconWhite3} alt="Traffic Report" />, name: "Traffic Report", link: "/traffic-report" },
  { icon: <Icon4 />, iconWhite: <img src={IconWhite4} alt="Attack Report" />, name: "Attack Report", link: "/attack-report" },
  { icon: <Icon5 />, iconWhite: <img src={IconWhite5} alt="Block Manager" />, name: "Block Manager", link: "/block-manager" },
  { icon: <Icon6 />, iconWhite: <img src={IconWhite6} alt="Settings" />, name: "Fastnetmon Setting", link: "/settings" },
  { icon: <Icon7 />, iconWhite: <img src={IconWhite7} alt="Config View" />, name: "Config View", link: "/config-view" },
  { icon: <Icon8 />, iconWhite: <img src={IconWhite8} alt="Log Out" />, name: "Log Out", link: "/logout" },
];

const Sidebar = ({ collapsed, active, setActive }) => {
  const location = useLocation();

  useEffect(() => {
    const currentItem = menuItems.find(item => item.link === location.pathname);
    if (currentItem) {
      setActive(currentItem.name);
    }
  }, [location, setActive]);

  return (
    <div className={`bg-[#F7F7F7] shadow transition-width duration-300 flex-none ${collapsed ? "w-16" : "w-72"} h-full`}>
      <ul className="p-2">
        <li className="p-3">
          <Link to="/" className="flex justify-center items-center">
            <img src={collapsed ? SmallLogo : Logo} alt="Logo" className="w-full" />
          </Link>
        </li>
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`p-3 ${active === item.name ? "bg-[#F56B3F] text-white rounded-lg" : ""}`}
          >
            <Link 
              to={item.link} 
              className="flex gap-2 items-center" 
              onClick={() => setActive(item.name)}
            >
              {active === item.name ? item.iconWhite : item.icon}
              {!collapsed && <span className="font-bold">{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
