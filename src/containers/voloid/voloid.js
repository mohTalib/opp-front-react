import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./style.css";

const Voloid = () => {
  const { id: oppscoId } = useParams();
  const [opp, setOpp] = useState(null);

  const getList_Opps_volo = async () => {
    try {
      const response = await fetch(`https://dj-front.onrender.com/oppsvo/${oppscoId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setOpp(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getList_Opps_volo();
  }, [oppscoId]);


    function updateCountdown() {
        if (!opp?.time5) {
            
            document.getElementById("countdown").innerHTML = "Time Not Available";
            return;
        }

        var currentTime = new Date().getTime();
        var endDate = new Date(opp.time5).getTime();
        var timeRemaining = endDate - currentTime;

    if (opp?.time6 == 1) {
        document.getElementById("countdown").innerHTML = "Always Open";
        return; 
    }
        
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
    }, [opp?.time5]);

    return (
        <><div data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000">
        </div><div className="d-flex flex-column justify-content-center">
          <img src={`https://dj-front.onrender.com/media${opp?.img5}`} alt="" className="img-det d-flex flex-wrap" />
          <div className="ph-des">
            <h1>{opp?.title5}</h1>
            <p className="para-main">{opp?.short_des5}</p>
            <h1>Description:-</h1>
            <p className="para-main">{opp?.description5}</p>
          </div>
          <div className="">
            <div id="countdown" className="countdown"></div>
            <form action={opp?.url_opp5}>
              <input type="submit" value="APPLY" ></input>
            </form>
          </div>
        </div></>
  );
}

export default Voloid;
