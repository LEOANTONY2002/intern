import React from "react";
import "./Photo.css";
import lin from './in.png'
import fb from './fb.png'
import insta from './insta.png'

function Photo() {
  return (
    <div className="photo">
      <div className="dis">
        
      </div>
      <div className="dis2"></div>
      <div className="sm">
        <img src={insta} alt=""/>
        <img src={fb} alt=""/>
        <img src={lin} alt=""/>
        </div>
    </div>
  );
}

export default Photo;
