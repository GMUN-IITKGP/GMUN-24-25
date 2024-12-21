import React, { useEffect } from "react";
import WorldMap from "./WorldMap";
import "./committee.css"; // General styles
import { ReactComponent as DISECLogo } from "../images/committee_img/DISEC_LOGO.svg";



const UNSC = () => {
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
      
      <div className="emblem">
      <DISECLogo className="UNSCLogo" />
      </div>

      {/* World Map Section */}
      <div className="committee-map">
        <WorldMap title="UNITED NATIONS SECURITY COUNCIL" mapDataFile="mapdata.js" />
      </div>

      {/* Committee Content Section */}
      <div className="committee-content">
        <h2>AGENDA</h2>
        <h3>AGENDA TITLE</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* 3D Cards Section */}
      <div className="cards">
        <h3>UNSC</h3>
        <h1>Executive Board</h1>

        {/* Card 1 */}
        <div className="card card__one">
          <div className="card__bg"></div>
          <img
            className="card__img"
            src="/team-images/Executive Board Images/Urvansh pic.jpg"
            alt="Urvansh Saraf"
          />
          <div className="card__text">
            <p className="card__title">Urvansh Saraf</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card card__two">
          <div className="card__bg"></div>
          <img
            className="card__img"
            src="/team-images/Executive Board Images/Swapnaneel pic.jpg"
            alt="Swapnaneel Datta"
          />
          <div className="card__text">
            <p className="card__title">Swapnaneel Datta</p>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default UNSC;
