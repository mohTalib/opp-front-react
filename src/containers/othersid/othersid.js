import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import "./style.css";

const Othersid = () => {
    const { id: oppsotId } = useParams(); 
    const [opp, setOpp] = useState(null);

    const getList_Opps_programs = async () => {
        let response = await fetch(`/oppsot/${oppsotId}`)
        let data = await response.json()
        setOpp(data)
    }

    useEffect(() => {
        getList_Opps_programs();
    }, [oppsotId]);
    function updateCountdown() {
        if (!opp?.time6) {
            
            document.getElementById("countdown").innerHTML = "Time Not Available";
            return;
        }

        var currentTime = new Date().getTime();
        var endDate = new Date(opp.time6).getTime();
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
    }, [opp?.time6]);

    return (
        <><div data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000">
        </div><div className="d-flex flex-column justify-content-center">
                    <img src={opp?.img6} alt="" className="img-det d-flex flex-wrap" />
                <div className="ph-des">
                        <h1>{opp?.title6}</h1>
                    <p className="para-main">{opp?.short_des6}</p>
                    <h1>Description:-</h1>
                    <p className="para-main">{opp?.description6}</p>
                </div>
                <div className="">
                    <div id="countdown" className="countdown"></div>
                    <form action={opp?.url_opp6}>
                    <input type="submit" value="APPLY" ></input>
                    </form>
                </div>
            </div></>
    );
}

export default Othersid;
