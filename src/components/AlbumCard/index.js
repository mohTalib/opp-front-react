
/*import React, {useState, useEffect} from 'react'; */
import React from 'react';
import "./style.css";
import { images } from "../../config";



function AlbumCard({ label, description, image, link }) {

/*
  useEffect(()=> {
    getList_Opps()
  }, [])

  let getList_Opps = async ()=>  {
    let response = await fetch('/opps/')
    let data = await response.json()
    setList_Opps(data)
  } */
  return (
    
    <div className="card__container">
      <><a href={link} target="_blank" rel="noopener noreferrer" className="theanger">
      <div className="card__image--div mb-3">
        <img src={images[image]} alt="" className="" />
        <p className="play--icon">Check</p>
      </div>
      <div className="card__content">
         <p className="card__content__title">{label}</p>
        <p className="card__content__text">{description}</p>
      </div>
      </a></>
    </div>
    
    
  );
}

export default AlbumCard;
