import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import "./style.css";

function OppsCates1({ opp }) {
  let [opps, setList_Opps_course] = useState([]);

  useEffect(() => {
    getList_Opps_course();
  }, []);

  let getList_Opps_course = async () => {
    try {
      const response = await axios.get('https://dj-front.onrender.com/oppsco/');
      const data = response.data;
      setList_Opps_course(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000" className='mobile_size'>
        <h4 style={{ fontFamily: "Spotify Bold", fontSize: 30, color: "#fff" }}>Culture Exchanges & Programs</h4>
        <p style={{ fontSize: 14, color: "#999", fontFamily: "Spotify Bold" }}>
        </p>
      </div>
      <div className='align-content-center padding-cards'>
        {opps.map((opp) => (
          <>
            <a href={`/CultureExchanges/${opp.id}`} rel="noopener noreferrer" className="theanger">
              <div className="card__container1 card__container">
                <div className="card__image--div mb-3">
                  <img src={`/media/${opp?.img1}`} alt="" className="img_w" />
                  <p className="play--icon">Check</p>
                </div>
                <div className="card__content">
                  <p className="card__content__title">{opp?.title1}</p>
                  <p className="card__content__text">{opp?.short_des1}</p>
                </div>
              </div>
            </a>
          </>
        ))}
      </div>
    </>
  );
}

export default OppsCates1;
