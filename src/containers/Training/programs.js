import React, { useState, useEffect } from 'react';
import "./style.css";
import axios from 'axios'; // Import axios

function OppsCates7({ image, link }) {
  const [opps, setList_Opps_training] = useState([]);

  useEffect(() => {
    getList_Opps_training();
  }, []);

  const getList_Opps_training = async () => {
    try {
      const response = await axios.get('https://dj-front.onrender.com/oppstr/');
      const data = response.data;
      setList_Opps_training(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <div data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000">
        <h4 style={{ fontFamily: "Spotify Bold", fontSize: 30, color: "#fff" }}>Training</h4>
        <p style={{ fontSize: 14, color: "#999", fontFamily: "Spotify Bold" }}>
        </p>
      </div>
      <div className='align-content-center padding-cards'>
        {opps.map((opp) => (
          <a href={`/Training/${opp.id}`} target="_blank" rel="noopener noreferrer" className="theanger" key={opp.id}>
            <div className="card__container">
              <div className="card__image--div mb-3">
                <img src={`https://dj-front.onrender.com/media${opp?.img7}`} alt="" className="" />
                <p className="play--icon">Check</p>
              </div>
              <div className="card__content">
                <a href={link} target="_blank" rel="noopener noreferrer" className="theanger">
                  <p className="card__content__title">{opp.title7}</p>
                  <p className="card__content__text">{opp.short_des7}</p>
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default OppsCates7;
