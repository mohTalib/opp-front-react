
import React, {useState, useEffect} from 'react'; 
import "./style.css";


function OppsCates7({ image, link }) {
    let [opps, setList_Opps_training] = useState([])

    useEffect(()=> {
        getList_Opps_training()
    }, [])
    
    let getList_Opps_training = async ()=>  {
        let response = await fetch('/oppstr/')
        let data = await response.json()
        setList_Opps_training(data)
    } 
    return (
        
      <><div data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000">
            <h4 style={{ fontFamily: "Spotify Bold", fontSize: 30, color: "#fff" }}>Training</h4>
            <p style={{ fontSize: 14, color: "#999", fontFamily: "Spotify Bold" }}>
            </p>
        </div><div className='d-flex flex-wrap align-content-center'>
                {opps.map((opp) => (
                    <><a href={`/Training/${opp.id}`} target="_blank" rel="noopener noreferrer" className="theanger">
                    <div className="card__container">
                        <div className="card__image--div mb-3">
                            <img src={opp.img7} alt="" className="" />
                            <p className="play--icon">Check</p>
                        </div>
                        <div className="card__content">

                            <><a href={link} target="_blank" rel="noopener noreferrer" className="theanger">
                                <p className="card__content__title">{opp.title7}</p>
                                <p className="card__content__text">{opp.description7}</p>
                            </a></>


                        </div>
                    </div>
                    </a>
                    </>
                ))};
            </div></>
    );
    }

export default OppsCates7;
