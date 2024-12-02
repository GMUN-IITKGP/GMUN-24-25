import React, { useEffect } from "react";
import "./Cards.css";

const Cards = () => {
  useEffect(() => {
    const cards = document.querySelector(".cards");
    const images = document.querySelectorAll(".card__img");
    const backgrounds = document.querySelectorAll(".card__bg");
    const range = 40;

    const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1);

    const handleMouseMove = ({ x, y }) => {
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
    <body>
    <div className="page-container">
      <div className="cards">
        <h3>DISEC</h3>
        <h1>Executive Board</h1>
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
      <span className="notice">View on desktop for mouse movement</span>
    </div>
    </body>
  );
};

export default Cards;
