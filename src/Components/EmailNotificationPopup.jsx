import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { AiOutlineSearch } from "react-icons/ai";

const ToggleSwitch = ({ isChecked, onChange }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="sr-only peer"
      />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-[#F2F4F7] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
    </label>
  );
};

const EmailNotificationPopup = ({ onClose }) => {
  const [isCheckedGeneralBan, setIsCheckedGeneralBan] = useState(false);
  const [isCheckedASN, setIsCheckedASN] = useState(false);
  const [isCheckedGeneralBan2, setIsCheckedGeneralBan2] = useState(false);
  const [isCheckedGeneralBan3, setIsCheckedGeneralBan3] = useState(false);
  const [isCheckedRemoteHost, setIsCheckedRemoteHost] = useState(false);

  const handleToggleGeneralBan = () =>
    setIsCheckedGeneralBan(!isCheckedGeneralBan);
  const handleToggleASN = () => setIsCheckedASN(!isCheckedASN);
  const handleToggleGeneralBan2 = () =>
    setIsCheckedGeneralBan2(!isCheckedGeneralBan2);
  const handleToggleGeneralBan3 = () =>
    setIsCheckedGeneralBan3(!isCheckedGeneralBan3);
  const handleToggleRemoteHost = () =>
    setIsCheckedRemoteHost(!isCheckedRemoteHost);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[80%] h-[90%] p-5 rounded shadow-lg overflow-y-scroll   ">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-bold">Email Notification</h2>
          <button onClick={onClose} className="text-[24px]">
            <IoIosClose />
          </button>
        </div>
        <h2 className="text-[18px] font-bold mt-3">
          Report Email | Pro License
        </h2>
        <p className="text-[18px] text-[#667085]">
          If you have PRO License, you can send email reports via our API Cloud
          Email Server
        </p>
        <div className="grid grid-cols-2 mt-3 border-b pb-4 items-center">
          <div className="flex gap-2 items-center">
            <span className="text-[18px]">Enable Report Email -</span>
            <p className="text-[18px] text-[#F56B3F]">Pro</p>
          </div>
          <div className="flex items-center justify-end">
            <ToggleSwitch
              isChecked={isCheckedGeneralBan}
              onChange={handleToggleGeneralBan}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 mt-3 items-center">
          <div className="flex gap-2 col-span-2 items-center">
            <span className="text-[18px]">Custom SMTP --</span>
            <p className="text-[18px] text-[#F56B3F]">General Setting</p>
          </div>
          <div className="flex items-center justify-end">
            <ToggleSwitch isChecked={isCheckedASN} onChange={handleToggleASN} />
          </div>
        </div>

        <div className="grid grid-cols-3 mt-3 items-center">
          <div className="flex gap-2 col-span-2 items-center">
            <span className="text-[18px]">
              Enable (Custom) Email Notifications
            </span>
            <p className="text-[18px] text-[#F56B3F]">
              (set main email_notifications_enabled)
            </p>
          </div>
          <div className="flex items-center justify-end">
            <ToggleSwitch
              isChecked={isCheckedGeneralBan2}
              onChange={handleToggleGeneralBan2}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 mt-3 items-center">
          <div className="flex gap-2 col-span-2 items-center">
            <span className="text-[18px]">
              Enable Email email_notifications_tls
            </span>
            <p className="text-[18px] text-[#F56B3F]">
               (set main email_notifications_tls)
            </p>
          </div>
          <div className="flex items-center justify-end">
            <ToggleSwitch
              isChecked={isCheckedRemoteHost}
              onChange={handleToggleRemoteHost}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 mt-3 border-b pb-5 items-center">
          <div className="flex gap-2 col-span-2 items-center">
            <span className="text-[18px]">
              Enable Email email_notifications_auth
            </span>
            <p className="text-[18px] text-[#F56B3F]">
              (set main email_notifications_auth)
            </p>
          </div>
          <div className="flex items-center justify-end">
            <ToggleSwitch
              isChecked={isCheckedGeneralBan3}
              onChange={handleToggleGeneralBan3}
            />
          </div>
        </div>
        <h2 className="text-[18px] font-bold mt-3">Email Setting</h2>
        <form action="">
          <div className="grid grid-cols-2  items-start">
            <div className="flex flex-col">
              <label htmlFor="" className="text-[18px] font-bold">
                From Email
              </label>
              <input
                type="email"
                name="Token"
                className="border py-3 px-2 rounded "
                id=""
                placeholder="Email"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 items-start">
            <div className="flex flex-col">
              <label htmlFor="" className="text-[18px] font-bold">
                Host Name Server
              </label>
              <input
                type="text"
                name="Token"
                className="border py-3 px-2 rounded "
                id=""
                placeholder="Port server"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-[18px] font-bold">
                Port Server
              </label>
              <input
                type="text"
                name="Token"
                className="border py-3 px-2 rounded "
                id=""
                placeholder="Port server"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 items-start">
            <div className="flex flex-col">
              <label htmlFor="" className="text-[18px] font-bold">
                User Name Server
              </label>
              <input
                type="text"
                name="Token"
                className="border py-3 px-2 rounded "
                id=""
                placeholder="User name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-[18px] font-bold">
                Password
              </label>
              <input
                type="password"
                name="Token"
                className="border py-3 px-2 rounded "
                id=""
                placeholder="Password"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 text-[14px] text-white bg-[#F56B3F] px-4 py-2 rounded"
          >
            Upload Email Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailNotificationPopup;
