import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import "./style.css";

const Internshipid = () => {
  const { id: oppsprId } = useParams();
  const [opp, setOpp] = useState(null);

  const getList_Opps_intern = async () => {
    try {
      const response = await axios.get(`https://dj-front.onrender.com/oppsin/${oppsprId}`);
      setOpp(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getList_Opps_intern();
  }, [oppsprId]);

  function updateCountdown() {
    if (!opp?.time3) {
      document.getElementById("countdown").innerHTML = "Time Not Available";
      return;
    }

    var currentTime = new Date().getTime();
    var endDate = new Date(opp.time3).getTime();
    var timeRemaining = endDate - currentTime;

    if (timeRemaining <= 0) {
      document.getElementById("countdown").innerHTML = "Not Available";
      return;
    }

    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }

  useEffect(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [opp?.time3]);

  return (
    <>
      <div data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000"></div>
      <div className="d-flex flex-column justify-content-center">
        <img src={`https://dj-front.onrender.com/media${opp?.img3}`} alt="" className="img-det d-flex flex-wrap" />
        <div className="ph-des">
          <h1>{opp?.title3}</h1>
          <p className="para-main">{opp?.short_des3}</p>
          <h1>Description:-</h1>
          <p className="para-main">{opp?.description3}</p>
        </div>
        <div className="">
          <div id="countdown" className="countdown"></div>
          <form action={opp?.url_opp3}>
            <input type="submit" value="APPLY"></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default Internshipid;
