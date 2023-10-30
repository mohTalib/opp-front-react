import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import "./style.css";

function OppsCates3({ image, link }) {
  let [opps, setList_Opps_program] = useState([]);

  useEffect(() => {
    getList_Opps_program();
  }, []);

  let getList_Opps_program = async () => {
    try {
      // Use axios to make a GET request
      const response = await axios.get('https://dj-front.onrender.com/oppspr/');
      setList_Opps_program(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <div data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000" className='mobile_size'>
        <h4 style={{ fontFamily: "Spotify Bold", fontSize: 30, color: "#fff" }}>Virtual Programs</h4>
        <p style={{ fontSize: 14, color: "#999", fontFamily: "Spotify Bold" }}>
        </p>
      </div>
      <div className='align-content-center padding-cards'>
        {opps.map((opp) => (
          <a href={`/VirtualPrograms/${opp.id}`} target="_blank" rel="noopener noreferrer" className="theanger" key={opp.id}>
            <div className="card__container">
              <div className="card__image--div mb-3">
                <img src={`https://dj-front.onrender.com/media${opp?.img4}`} alt="" className="" />
                <p className="play--icon">Check</p>
              </div>
              <div className="card__content">
                <a href={link} target="_blank" rel="noopener noreferrer" className="theanger">
                  <p className="card__content__title">{opp.title4}</p>
                  <p className="card__content__text">{opp.short_des5}</p>
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default OppsCates3;
