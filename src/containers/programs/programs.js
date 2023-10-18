
import React, {useState, useEffect} from 'react'; 
import "./style.css";


function OppsCates3({ image, link }) {
    let [opps, setList_Opps_program] = useState([])

    useEffect(()=> {
        getList_Opps_program()
    }, [])
    
    let getList_Opps_program = async ()=>  {
        let response = await fetch('/oppspr/')
        let data = await response.json()
        setList_Opps_program(data)
    } 
    return (
        
      <><div data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000">
            <h4 style={{ fontFamily: "Spotify Bold", fontSize: 30, color: "#fff" }}>Virtual Programs</h4>
            <p style={{ fontSize: 14, color: "#999", fontFamily: "Spotify Bold" }}>
            </p>
        </div><div className='d-flex flex-wrap align-content-center'>
                {opps.map((opp) => (
                    <><a href={`/VirtualPrograms/${opp.id}`} target="_blank" rel="noopener noreferrer" className="theanger">
                    <div className="card__container">
                        <div className="card__image--div mb-3">
                            <img src={opp.img4} alt="" className="" />
                            <p className="play--icon">Check</p>
                        </div>
                        <div className="card__content">

                            <><a href={link} target="_blank" rel="noopener noreferrer" className="theanger">
                                <p className="card__content__title">{opp.title4}</p>
                                <p className="card__content__text">{opp.description4}</p>
                            </a></>


                        </div>
                    </div>
                    </a>
                    </>
                ))};
            </div></>
    );
    }

export default OppsCates3;
