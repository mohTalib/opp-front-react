import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import "./style.css";

function SidebarRow() {
  return (
    <>
      <div className="sidebar__row">
      
        <div className="sidebar__row__icon">
        <SearchIcon />
        </div>
        <div className="playlist__row" data-tooltip="Not Available">
        <div className="sidebar__row__label">Search</div>
      </div>
      </div>
      <a href="https://opportunity-club.com/dashboard" className="non-link">
      <div className="sidebar__row">
      
        <div className="sidebar__row__icon">
          <HomeIcon />
        </div>
        <div className="sidebar__row__label">Home</div>
      
      </div>
      </a>
      <div className="sidebar__row">
        <div className="sidebar__row__icon">
        </div>
      </div>
    </>
  );
}

export default SidebarRow;
