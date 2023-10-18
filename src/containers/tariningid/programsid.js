import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import "./style.css";



const Trainingid = () => {
    const { id: oppstrId } = useParams(); 
    const [opp, setOpp] = useState(null);

    const getTraining = async () => {
        let response = await fetch(`/oppstr/${oppstrId}`)
        let data = await response.json()
        setOpp(data)
    }

    useEffect(() => {
        getTraining();
    }, [oppstrId]);


    function updateCountdown() {
        if (!opp?.time7) {
            
            document.getElementById("countdown").innerHTML = "Time Not Available";
            return;
        }

        var currentTime = new Date().getTime();
        var endDate = new Date(opp.time7).getTime();
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
    }, [opp?.time7]);

    return (
        <><div data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000">
        </div><div className="d-flex flex-column justify-content-center">
                    <img src={opp?.img7} alt="" className="img-det d-flex flex-wrap" />
                <div className="ph-des">
                        <h1>{opp?.title7}</h1>
                    <p className="para-main">{opp?.short_des7}</p>
                    <h1>Description:-</h1>
                    <p className="para-main">{opp?.description7}</p>
                </div>
                <div className="">
                    <div id="countdown" className="countdown"></div>
                    <form action={opp?.url_opp7}>
                    <input type="submit" value="APPLY" ></input>
                    </form>
                </div>
            </div></>
    );
}

export default Trainingid;


