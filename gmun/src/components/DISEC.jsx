import React, { useEffect } from "react";
import WorldMap from "./WorldMap";
import "./committee.css"; // General styles


const DISEC = () => {
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
      <body>
      {/* Spinning UN Emblem */}
      <div className="emblem">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="spinning-logo"
        >
          <image
            href="https://upload.wikimedia.org/wikipedia/commons/5/52/Emblem_of_the_United_Nations.svg"
            width="100%"
            height="100%"
            alt="UN Emblem"
          />
        </svg>
      </div>

      {/* World Map Section */}
      <div className="committee-map">
        <WorldMap title="DISARMAMENT AND INTERNATIONAL SECURITY COMMITTEE" mapDataFile="mapdata.js" />
      </div>

      {/* Committee Content Section */}
      <div className="committee-content">
        <h2>DISEC</h2>
        <p>AGENDA</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* 3D Cards Section */}
      <div className="cards">
        <h3>DISEC</h3>
        <h1>Executive Board</h1>

        {/* Card 1 */}
        <div className="card card__one">
          <div className="card__bg"></div>
          <img
            className="card__img"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_mono.png"
            alt="Princess Mononoke"
          />
          <div className="card__text">
            <p className="card__title">Princess Mononoke</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card card__two">
          <div className="card__bg"></div>
          <img
            className="card__img"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_chihiro.png"
            alt="Spirited Away"
          />
          <div className="card__text">
            <p className="card__title">Spirited Away</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card card__three">
          <div className="card__bg"></div>
          <img
            className="card__img"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_howlcastle.png"
            alt="Howl's Moving Castle"
          />
          <div className="card__text">
            <p className="card__title">Howl's Moving Castle</p>
          </div>
        </div>
      </div>
      </body>
    </div>
  );
};

export default DISEC;
