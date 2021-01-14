import React from "react";
import "./Images.css";

function Images() {
  return (
    <div className="images">
      <div className="i-cont">
        <div className="i-left">
          <p>PHOTOSHOOT</p>
          <div className="l-imgs">
            <img
              src="https://s.itl.cat/pngfile/s/4-49129_nature-wallpaper-hd-p-spring-wallpaper-8-wallpaper.jpg"
              alt=""
            />
            <img
              src="https://www.teahub.io/photos/full/28-282633_inspirational-desktop-wallpaper-full-size-download-nature-wallpapers.jpg"
              alt=""
            />
            <img
              src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
              alt=""
            />
            <img src="https://wallpapercave.com/wp/wp2553949.jpg" alt="" />
          </div>
        </div>
        <div className="i-right">
          <p>PAST WORK</p>
          <div className="r-imgs">
            <img
              src="https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg"
              alt=""
            />
            <img
              src="https://www.cpp.edu/~jcmcgarvey/5200/labs/images/butterfly.jpg"
              alt=""
            />
            <img
              src="https://www.roadrunnerrecords.com/sites/g/files/g2000005056/f/sample1_0.jpg"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSck9-GRqqWqZIKsX96kbHGVHIcX-NRMHn2Q&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
