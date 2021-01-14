import React from "react";
import "./Header.css";
import tick from "./tick.png";

function Header() {
  return (
    <div className="header">
      <div className="name">
        <div>
          <p>GIGI</p>
          <div className="tick">
            <p>HADID</p>
            <img src={tick} alt="" />
          </div>
        </div>
      </div>
      <div className="border"></div>
      <div className="desc">
        <p>
          Fashion model, and television personality who grated the pages of
          magazines such as Elle and Vogue the covers of Galore and Schon!
        </p>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
