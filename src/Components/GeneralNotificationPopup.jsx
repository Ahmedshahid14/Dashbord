import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { GoPlus } from "react-icons/go";

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

const GeneralNotificationPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[70%]  p-5 rounded shadow-lg ">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-bold">Additional Notification</h2>
          <button onClick={onClose} className="text-[24px]">
            <IoIosClose />
          </button>
        </div>
        <h2 className="text-[18px] font-bold mt-3">
          Telegram Settings: (add bot at begin)
        </h2>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="h-5 w-5 focus:bg-transparent"
            name=""
            id=""
          />
          <label htmlFor="" className="font-bold">
            Enable Telegram
          </label>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-4">
          <div className="flex flex-col">
            <label htmlFor="" className="text-[18px] font-bold">
              API Token
            </label>
            <input
              type="text"
              name="Token"
              className="border py-3 px-2 rounded "
              id=""
              placeholder="Telegram API Token"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-[18px] font-bold">
              Chat ID
            </label>
            <input
              type="text"
              name="Chat"
              className="border py-3 px-2 rounded "
              id=""
              placeholder="Telegram Chat ID"
            />
          </div>
        </div>
        <h2 className="text-[18px] font-bold mt-3">Slack Settings</h2>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="h-5 w-5 focus:bg-transparent"
            name=""
            id=""
          />
          <label htmlFor="" className="font-bold">
            Enable Slack
          </label>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-4">
          <div className="flex flex-col">
            <label htmlFor="" className="text-[18px] font-bold">
              Webhook URL
            </label>
            <input
              type="text"
              name="Token"
              className="border py-3 px-2 rounded "
              id=""
              placeholder="Discord Webhook"
            />
          </div>
        </div>
        <button type="submit" className="mt-4 text-[14px] text-white bg-[#F56B3F] px-4 py-2 rounded">Upload Settings</button>
      </div>
    </div>
  );
};

export default GeneralNotificationPopup;
