import React from "react";
import menuIcon from "../images/icon/menu.png";
import notificationIcon from "../images/icon/icon.png";
import userIcon from "../images/icon/Avatar.png";

const Header = ({ toggleSidebar, toggleDropdown, isDropdownOpen }) => (
  <div className="bg-[#FFFFFF] rounded shadow text-black">
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <button onClick={toggleSidebar}>
            <img src={menuIcon} alt="Menu" className="h-6 w-6" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button>
            <img src={notificationIcon} alt="Notifications" className="h-6 w-6" />
          </button>
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center gap-2">
              <img src={userIcon} alt="User" className="h-10 w-10" />
              <div className="flex flex-col text-start">
                <span className="text-[16px]">Jay Hargudson</span>
                <p className="text-[12px]">Manager</p>
              </div>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
