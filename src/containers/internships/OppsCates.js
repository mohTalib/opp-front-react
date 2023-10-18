import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

import './style.css';

function OppsCates2({ image, link }) {
  let [opps, setList_Opps_intern] = useState([]);

  useEffect(() => {
    getList_Opps_intern();
  }, []);

  let getList_Opps_intern = async () => {
    try {
      // Use Axios to make the GET request to your external JSON API
      const response = await axios.get('https://dj-front.onrender.com/oppsin/');

      // Axios automatically parses the JSON response, so you don't need response.json()
      setList_Opps_intern(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
      <div data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000">
        <h4 style={{ fontFamily: "Spotify Bold", fontSize: 30, color: "#fff" }}>Internships</h4>
        <p style={{ fontSize: 14, color: "#999", fontFamily: "Spotify Bold" }}></p>
      </div>
      <div className='d-flex flex-wrap align-content-center'>
        {opps.map((opp) => (
          <a href={`/Internships/${opp.id}`} rel="noopener noreferrer" className="theanger">
            <div className="card__container">
              <div className="card__image--div mb-3">
                <img src={`https://dj-front.onrender.com/media${opp.img3}`} alt="" className="" />
                <p className="play--icon">Check</p>
              </div>
              <div className="card__content">
                <p className="card__content__title">{opp.title3}</p>
                <p className="card__content__text">{opp.short_des3}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default OppsCates2;
