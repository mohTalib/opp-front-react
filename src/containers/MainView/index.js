import React from "react";
import DataRow from "../DataRow";
import { data } from "../../spotify";

import "./style.css";




function MainContainer() {
  
  return (
    <div className="main__row__container">
      <div className="settings--icon">
        
      </div>

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
