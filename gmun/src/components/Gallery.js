import React, { useEffect, useState } from "react";
import "./Gallery.css";

import image1 from "../images/1.JPG";
import image2 from "../images/2.jpg";
import image3 from "../images/3.JPG";
import image4 from "../images/4.JPG";
import image5 from "../images/5.JPG";
import image6 from "../images/6.JPG";
import image7 from "../images/7.JPG";
import image8 from "../images/8.JPG";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];
const texts = [
  "Text for Image 1",
  "Text for Image 2",
  "Text for Image 3",
  "Text for Image 4",
  "Text for Image 5",
  "Text for Image 6",
  "Text for Image 7",
  "Text for Image 8",
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [radius, setRadius] = useState(200); // Default initial radius

  const numberOfImages = images.length;

  // Function to calculate radius based on viewport width
  const calculateRadius = () => {
    const width = window.innerWidth;
    // Reduce radius proportionally to the viewport width
    return Math.max(100, width * 0.3); // Min radius: 100px, scales at 20% of viewport width
  };

  useEffect(() => {
    // Set initial radius
    setRadius(calculateRadius());

    // Update radius dynamically on window resize
    const handleResize = () => {
      setRadius(calculateRadius());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % numberOfImages);
    } else if (e.key === "ArrowLeft") {
      setCurrentIndex((prevIndex) =>
        (prevIndex - 1 + numberOfImages) % numberOfImages
      );
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [numberOfImages]);

  const isTopmostImage = (angle) => {
    const normalizedAngle = (angle + 360) % 360;
    const tolerance = 5;
    return Math.abs(normalizedAngle - 270) < tolerance;
  };

  return (
    <div className="gallery-container">
      <div className="logo">{texts[currentIndex]}</div>
      <div className="gallery">
        {images.map((image, index) => {
          const angle = (360 / numberOfImages) * (index - currentIndex);
          const isTopmost = isTopmostImage(angle);

          return (
            <div
              key={index}
              className={`gallery-item ${isTopmost ? "highlight" : ""}`}
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px)`,
              }}
            >
              <div
                className="image-container"
                style={{
                  transform: `rotate(${-angle}deg)`,
                }}
              >
                <img src={image} alt={`Image ${index + 1}`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
