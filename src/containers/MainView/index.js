import React from "react";
import DataRow from "../DataRow";
import { data } from "../../spotify";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import "./style.css";




function MainContainer() {
  
  return (
    <div className="main__row__container">
      <a href="https://home-opp-club.com/">
        <div className="explanation--icon">
          <InfoOutlinedIcon
            style={{
              float: "right",
              fontSize: 35,
              color: "#fff",
            }}
            className="explanation--icon"
          />
        </div>
      </a>

      {data.map((data) => {
        return (
          <DataRow
            key={data.id}
            cards={data.cards}
            title={data.title}
          />
        );
      })}
    </div>
  );
}

export default MainContainer;
