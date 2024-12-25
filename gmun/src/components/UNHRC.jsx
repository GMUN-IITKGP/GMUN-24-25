import React, { useEffect } from "react";
import WorldMap from "./WorldMap";
import "./committee.css"; // General styles
import { ReactComponent as UNHRCLogo } from "../images/committee_img/United_Nations_Human_Rights_Council_Logo.svg";



const UNHRC = () => {
  useEffect(() => {
    const cards = document.querySelector(".cards");
    const images = document.querySelectorAll(".card__img");
    const backgrounds = document.querySelectorAll(".card__bg");
    const range = 40;

    const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1);

    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      const yValue = calcValue(y, window.innerHeight);
      const xValue = calcValue(x, window.innerWidth);

      if (cards) {
        cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
      }

      images.forEach((image) => {
        image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
      });

      backgrounds.forEach((background) => {
        background.style.backgroundPosition = `${xValue * 0.45}px ${
          -yValue * 0.45
        }px`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    
    <div className="committee-container">
      
      {/* Spinning UN Emblem */}
      
      <div className="emblem">
      <UNHRCLogo className="unhrcLogo" />
      </div>
    

      {/* World Map Section */}
      <div className="committee-map">
        <WorldMap title="UNITED NATIONS HUMAN RIGHTS COUNCIL" mapDataFile="mapdata.js" />
      </div>

      {/* Committee Content Section */}
      <div className="committee-content">
        <h2>UNHRC</h2>
        
        <p>Consideration of digital privacy rights of assessment of mechanisms for protecting personal data across national and global context</p>
      </div>

      {/* 3D Cards Section */}
      <div className="cards">
        <h3>UNHRC</h3>
        <h1>Executive Board</h1>

        {/* Card 1 */}
        <div className="card card__one">
          <div className="card__bg"></div>
          <img
            className="card__img"
            src="/team-images/Executive Board Images/Divyansu_Sharma.JPG"
            alt="Divyanshu Sharma"
          />
          <div className="card__hover-text">
          <p>Chairperson</p>
          </div>
          <div className="card__text">
            <p className="card__title">Divyanshu Sharma</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card card__two">
          <div className="card__bg"></div>
          <img
            className="card__img"
            src="/team-images/Executive Board Images/Arghyadip.jpg"
            alt="Arghyadip Pal"
          />
          <div className="card__hover-text">
          <p>Vice-Chairperson</p>
          </div>
          <div className="card__text">
            <p className="card__title">Arghyadip Pal</p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default UNHRC;

