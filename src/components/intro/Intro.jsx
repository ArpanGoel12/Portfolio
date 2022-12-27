import React from "react";
import "./Intro.scss";


export default function Intro() {


 

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
        <img src="assets/Id.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Arpan Goel</h1>
          <h3>
            Full stack web developer
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />

        </a>
      </div>
    </div>
  );
}