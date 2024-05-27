import React, { useState, useEffect } from 'react';

const Modal = ({ onClose, currentItem, updateItemStatus }) => {
  const [isChecked, setIsChecked] = useState(currentItem.isActive);

  useEffect(() => {
    setIsChecked(currentItem.isActive);
  }, [currentItem]);

  const handleCheckboxChange = () => {
    const updatedItem = { ...currentItem, isActive: !isChecked };
    setIsChecked(!isChecked);
    updateItemStatus(updatedItem);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg w-[80%] shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold px-2">FNM Backups</h1>
          <button onClick={onClose} className="text-xl font-bold">&times;</button>
        </div>
        <h2 className="text-gray-700 font-semibold px-2 mt-4">
          Edit fcli main {currentItem.name} entry
        </h2>
        <div className="flex items-center bg-[#F2F2F2] rounded-[10px] px-2 py-5 justify-between mt-4">
          <span className="mr-2">Enter enable or disable to modify boolean entry</span>
          <label className="switch">
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Modal;