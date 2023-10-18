import React from "react";
import AlbumCard from "../../components/AlbumCard";
import "./style.css";


function DataRow({ cards, title }) {
  return (
    <>
      <div data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000">
        <h4 style={{ fontFamily: "Spotify Bold", color: "#fff" }}>{title}</h4>
        <p style={{ fontSize: 14, color: "#999", fontFamily: "Spotify Bold" }}>
    
        </p>
        <div className="d-flex data-row">
          {cards.map((opps) => {
            return (
              <AlbumCard
                key={opps.image}
                label={opps.label}
                description={opps.description}
                image={opps.image}
                link={opps.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default DataRow;
