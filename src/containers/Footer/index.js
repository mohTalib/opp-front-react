import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import SearchIcon from "@material-ui/icons/Search";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import "./style.css";

function Footer() {
  return (
    <>
      <div className="footer d-flex align-items-center">
        <div className="mobile-footer hidden-lg-up">
          <div className="link">
        <a href="https://opportunity-club.com/dashboard">
          <HomeIcon className="footer-icon" style={{ color: "#fff" }} />
          <p style={{ color: "#fff" }}>Home</p>
        </a>
          </div>
          <div className="link" data-tooltip="Not Available">
            <SearchIcon className="footer-icon" />
            <p>Search</p>
          </div>
          <div className="link">
        <div className="playlist__row" data-tooltip="Not Available">
          <AccessTimeIcon className="playlist__row__icon--favorite" />
            <p>Reminder</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
