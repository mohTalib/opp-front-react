import React from "react";
import SidebarRow from "../../components/SidebarRow";
import SpotifyLogo from "../../components/SpotifyLogo";
import PlayList from "../../components/SidebarPlayList";

import "./style.css";

function Sidebar() {
  return (
    <div
      className="sidebar__container"
      data-aos="slide-right"
      data-aos-easing="ease-in"
      data-aos-duration="1000"
    >
      <SpotifyLogo />
      <SidebarRow />
      <div className="playlist__row" data-tooltip="Not Available">
        <AccessTimeIcon className="playlist__row__icon--favorite" />
        <span className="playlist__row__label" style={{ fontSize: 14 }}>Deadline Reminder</span>
      </div>
    </div>
  );
}

export default Sidebar;
