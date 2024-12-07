import React, { useEffect, useState, useMemo } from "react";
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
  "Opening Ceremony",
  "Opening Ceremony",
  "Day 1",
  "Day 1",
  "Day 2",
  "Day 2",
  "Award Distributions",
  "Award Distribution",
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [radius, setRadius] = useState(450); 
  const [translation, setTranslation] = useState(0); 
  const numberOfImages = images.length;

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
    
    document.body.classList.add("no-scroll");

    
    window.addEventListener("keydown", handleKeyDown);

    
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    
    const updateRadius = () => {
      if (window.innerWidth < 430) {
        setRadius(150); 
      } else {
        setRadius(450); 
      }
    };

    
    window.addEventListener("resize", updateRadius);
    updateRadius();

    
    return () => {
      window.removeEventListener("resize", updateRadius);
    };
  }, []);

  
  const galleryItems = useMemo(() => {
    return images.map((image, index) => {
      const angle = (360 / numberOfImages) * (index - currentIndex);
      const isTopmost = Math.abs((angle + 360) % 360 - 270) < 5;

      return {
        image,
        angle,
        isTopmost,
        style: {
          transform: `translateX(${translation}px) rotate(${angle}deg) translate(${radius}px)`,
        },
        containerStyle: {
          transform: `rotate(${-angle}deg)`,
        },
      };
    });
  }, [currentIndex, radius, translation]);

  const handleLogoClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numberOfImages);
  };

  return (
    <div className="page-container">
      <div className="gallery-container">
        <div className="logo" onClick={handleLogoClick}>
          {texts[currentIndex]}
        </div>
        <div className="gallery">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`gallery-item ${item.isTopmost ? "highlight" : ""}`}
              style={item.style}
            >
              <div className="image-container" style={item.containerStyle}>
                <img src={item.image} alt={`Image ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
