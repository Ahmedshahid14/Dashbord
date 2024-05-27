import React from "react";
import { IoIosClose } from "react-icons/io";

const FNMBackups = [
  {
    File: "fnm_backup_54_2024_04_30.tar",
    Size: "26112",
  },
  {
    File: "fnm_backup_54_2024_04_30.tar",
    Size: "26112",
  },
  {
    File: "fnm_backup_54_2024_04_30.tar",
    Size: "26112",
  },
  {
    File: "fnm_backup_54_2024_04_30.tar",
    Size: "26112",
  },
  {
    File: "fnm_backup_54_2024_04_30.tar",
    Size: "26112",
  },
];
const FNMBackupPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[70%] h-[80%] p-5 rounded shadow-lg overflow-y-scroll ">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-bold">FNM Backups </h2>
          <button onClick={onClose} className="text-[24px]">
            <IoIosClose />
          </button>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-[18px] font-bold">
            Backup configuration FastNetMon
          </h2>
          <button className="text-white bg-[#F56B3F] rounded py-2 px-4">
            Start Backup
          </button>
        </div>
        <div className="w-full mt-10">
          <div className="overflow-hidden">
            <table className="table-auto w-full">
              <thead className="bg-[#F9F9FC]">
                <tr>
                  <th className="text-sm font-bold py-2 text-left px-4">
                    File
                  </th>
                  <th className="text-sm font-bold py-2 text-left px-4">
                    Name
                  </th>
                  <th className="text-sm font-bold py-2 text-center px-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="overflow-y-auto max-h-60">
                {FNMBackups.map((FNMBackups, index) => (
                  <tr key={index}>
                    <td className="text-[14px] text-[#F56B3F] py-3 text-left px-4">
                      {FNMBackups.File}
                    </td>
                    <td className="text-[14px] py-3 text-left px-4">
                      {FNMBackups.Size}
                    </td>
                    <td className="flex items-center justify-center py-3 gap-2">
                      <button className="text-[16px] py-3 px-4 rounded text-[#016FE3] bg-[#E6F1FC]">
                        Download
                      </button>
                      <button className="text-[16px] py-3 px-4 rounded text-[#FF3333] bg-[#FFEBEB]">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FNMBackupPopup;
