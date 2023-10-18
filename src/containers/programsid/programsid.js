import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import "./style.css";



const Programsid = () => {
    const { id: oppsprId } = useParams(); 
    const [opp, setOpp] = useState(null);

    const getList_Opps_programs = async () => {
        let response = await fetch(`/oppspr/${oppsprId}`)
        let data = await response.json()
        setOpp(data)
    }

    useEffect(() => {
        getList_Opps_programs();
    }, [oppsprId]);


    function updateCountdown() {
        if (!opp?.time4) {
            
            document.getElementById("countdown").innerHTML = "Time Not Available";
            return;
        }

        var currentTime = new Date().getTime();
        var endDate = new Date(opp.time4).getTime();
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
    }, [opp?.time4]);
    return (
        <><div data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000">
        </div><div className="d-flex flex-column justify-content-center">
                    <img src={opp?.img4} alt="" className="img-det d-flex flex-wrap" />
                <div className="ph-des">
                        <h1>{opp?.title1}</h1>
                    <p className="para-main">{opp?.short_des4}</p>
                    <h1>Description:-</h1>
                    <p className="para-main">{opp?.description4}</p>
                </div>
                <div className="">
                    <div id="countdown" className="countdown"></div>
                    <form action={opp?.url_opp4}>
                    <input type="submit" value="APPLY" ></input>
                    </form>
                </div>
            </div></>
    );
}

export default Programsid;


