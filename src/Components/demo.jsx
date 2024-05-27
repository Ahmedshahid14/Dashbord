import React, { useState } from 'react';
import GeneralSetting from '../images/icon/genralSetting.svg';
import HostGroup from '../images/icon/Host Group.svg';
import BGPPeers from '../images/icon/BGP Peers.svg';
import ScrubbingMode from '../images/icon/Scrubbing Mode.svg';
import MikroTikPlugin from '../images/icon/Mikro Tik Plugin.svg';
import GeneralNotification from '../images/icon/General Notification.svg';
import EmailNotification from '../images/icon/Email Notification.svg';
import LogFiles from '../images/icon/Log Files.svg';
import SystemResources from '../images/icon/System Resources.svg';
import FNMLicense from '../images/icon/FNM License.svg';
import FNMBackup from '../images/icon/FNM Backup.svg';
// popup
import GeneralSettingPopup from './GeneralSettingPopup';
import HostGroupPopup from './HostGroupPopup';
import BGPPeersPopup from './BGPPeersPopup';
import ScrubbingModePopup from './ScrubbingModePopup';
import MikroTikPluginPopup from './MikroTikPluginPopup';
import GeneralNotificationPopup from './GeneralNotificationPopup';
import EmailNotificationPopup from './EmailNotificationPopup';
import LogFilesPopup from './LogFilesPopup';
import SystemResourcesPopup from './SystemResourcesPopup';
import FNMLicensePopup from './FNMLicensePopup';
import FNMBackupPopup from './FNMBackupPopup';

export default function GeneralSettings() {
  const [openPopup, setOpenPopup] = useState(null);

  const handlePopupOpen = (popup) => {
    setOpenPopup(popup);
  };

  const handlePopupClose = () => {
    setOpenPopup(null);
  };

  return (
    <>
      <div className="bg-white rounded-t shadow">
        {/* Reusable list item component */}
        <ListItem
          icon={GeneralSetting}
          title="General Setting"
          description="Active ban and set the network list"
          onClick={() => handlePopupOpen('generalSetting')}
        />
        <ListItem
          icon={HostGroup}
          title="Host Group"
          onClick={() => handlePopupOpen('hostGroup')}
        />
        <ListItem
          icon={BGPPeers}
          title="BGP Peers"
          onClick={() => handlePopupOpen('bgpPeers')}
        />
        <ListItem
          icon={ScrubbingMode}
          title="Scrubbing Mode"
          onClick={() => handlePopupOpen('scrubbingMode')}
        />
        <ListItem
          icon={MikroTikPlugin}
          title="Mikro Tik Plugin"
          description="Activate Mikro Tik Routers OS Suport"
          onClick={() => handlePopupOpen('mikroTikPlugin')}
        />
        <ListItem
          icon={GeneralNotification}
          title="General Notification"
          onClick={() => handlePopupOpen('generalNotification')}
        />
        <ListItem
          icon={EmailNotification}
          title="Email Notification"
          onClick={() => handlePopupOpen('emailNotification')}
        />
        <ListItem
          icon={LogFiles}
          title="Log Files"
          onClick={() => handlePopupOpen('logFiles')}
        />
        <ListItem
          icon={SystemResources}
          title="System Resources"
          onClick={() => handlePopupOpen('systemResources')}
        />
        <ListItem
          icon={FNMLicense}
          title="FNM License"
          onClick={() => handlePopupOpen('fnmLicense')}
        />
        <ListItem
          icon={FNMBackup}
          title="FNM Backup"
          onClick={() => handlePopupOpen('fnmBackup')}
        />
      </div>

      {openPopup === 'generalSetting' && <GeneralSettingPopup onClose={handlePopupClose} />}
      {openPopup === 'hostGroup' && <HostGroupPopup onClose={handlePopupClose} />}
      {openPopup === 'bgpPeers' && <BGPPeersPopup onClose={handlePopupClose} />}
      {openPopup === 'scrubbingMode' && <ScrubbingModePopup onClose={handlePopupClose} />}
      {openPopup === 'mikroTikPlugin' && <MikroTikPluginPopup onClose={handlePopupClose} />}
      {openPopup === 'generalNotification' && <GeneralNotificationPopup onClose={handlePopupClose} />}
      {openPopup === 'emailNotification' && <EmailNotificationPopup onClose={handlePopupClose} />}
      {openPopup === 'logFiles' && <LogFilesPopup onClose={handlePopupClose} />}
      {openPopup === 'systemResources' && <SystemResourcesPopup onClose={handlePopupClose} />}
      {openPopup === 'fnmLicense' && <FNMLicensePopup onClose={handlePopupClose} />}
      {openPopup === 'fnmBackup' && <FNMBackupPopup onClose={handlePopupClose} />}
    </>
  );
}

const ListItem = ({ icon, title, description, onClick }) => (
  <div className="flex items-center border-b gap-2 cursor-pointer p-4 hover:bg-gray-100" onClick={onClick}>
    <div className="p-2 bg-[#FDF1E8] rounded-full">
      <div className="p-2 bg-[#FAE1CF] rounded-full">
        <img src={icon} className="h-5 w-5" alt={title} />
      </div>
    </div>
    <div className="flex flex-col ml-4">
      <h2 className="text-[18px] font-bold">{title}</h2>
      {description && <span className="text-[#667085]">{description}</span>}
    </div>
  </div>
);
