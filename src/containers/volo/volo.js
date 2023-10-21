import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import "./style.css";

function OppsCates4({ image, link }) {
    const [opps, setList_Opps_volon] = useState([]);

    useEffect(() => {
        getList_Opps_volon();
    }, []);

    const getList_Opps_volon = async () => {
        try {
            const response = await axios.get('https://dj-front.onrender.com/oppsvo/');
            setList_Opps_volon(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000">
            <h4 style={{ fontFamily: "Spotify Bold", fontSize: 30, color: "#fff" }}>Governmental</h4>
            <p style={{ fontSize: 14, color: "#999", fontFamily: "Spotify Bold" }}></p>
            <div className='d-flex flex-wrap align-content-center'>
                {opps.map((opp) => (
                    <a href={`/Governmental/${opp.id}`} target="_blank" rel="noopener noreferrer" className="theanger" key={opp.id}>
                        <div className="card__container">
                            <div className="card__image--div mb-3">
                                <img src={`https://dj-front.onrender.com/media${opp?.img5}`} alt="" className="" />
                                <p className="play--icon">Check</p>
                            </div>
                            <div className="card__content">
                                <a href={link} target="_blank" rel="noopener noreferrer" className="theanger">
                                    <p className="card__content__title">{opp.title5}</p>
                                    <p className="card__content__text">{opp.short_des5}</p>
                                </a>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default OppsCates4;
