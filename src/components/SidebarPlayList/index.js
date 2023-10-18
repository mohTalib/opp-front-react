import React from "react";
import AddIcon from "@material-ui/icons/Add";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./style.css";

function PlayLists() {
  return (
    <div className="sidebar__playlist__container">
      <hr style={{ width: 180, backgroundColor: "grey" }} />
      <div className="playlist__row" data-tooltip="Not Available">
        <AddCircleIcon className="playlist__row__icon" />
        <span className="playlist__row__label">Create Library</span>
      </div>
      <div className="playlist__row" data-tooltip="Not Available">
        <AccessTimeIcon className="playlist__row__icon--favorite" />
        <span className="playlist__row__label" style={{ fontSize: 14 }}>Deadline Reminder</span>
      </div>

      <hr style={{ width: 180, backgroundColor: "grey" }} />
      <div className="playlist__row_insta">
      <a href="https://instagram.com/opp.club?igshid=MzRlODBiNWFlZA==" className="link-without-style">
          <InstagramIcon className="icon-with-hover-effect"/>
        </a>
        <a href="https://instagram.com/opp.club?igshid=MzRlODBiNWFlZA==" className="link-without-style">
          <LinkedInIcon className="icon-with-hover-effect"/>
        </a>
      </div>
    </div>
  );
}

export default PlayLists;
