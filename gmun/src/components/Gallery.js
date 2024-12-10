import React, { useEffect, useState } from "react";
import "./Gallery.css";

import image1 from "../images/1.webp";
import image2 from "../images/2.webp";
import image3 from "../images/3.webp";
import image4 from "../images/4.webp";
import image5 from "../images/5.webp";
import image6 from "../images/6.JPG";
import image7 from "../images/7.JPG";
import image8 from "../images/8.JPG";
import image9 from "../images/9.JPG";
import image10 from "../images/10.JPG";
import image11 from "../images/11.JPG";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
];

const texts = [
  "Opening Ceremony",
  "Opening Ceremony",
  "Day 1",
  "Day 1",
  "Day 2",
  "Day 2",
  "Award Distributions",
  "Award Distribution",
  "Celebration",
  "Closing Remarks",
  "hey boy",
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [radius, setRadius] = useState(450);
  const [selectedImage, setSelectedImage] = useState(null); // Modal state
  const visibleCount = 8;

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (e.key === "ArrowLeft") {
      setCurrentIndex((prevIndex) =>
        (prevIndex - 1 + images.length) % images.length
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
      if (window.innerWidth < 450) {
        setRadius(160);
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

  const handleLogoClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null); 
  };

  return (
    <div
      className="page-container"
      onClick={closeModal} 
    >
      <div className="gallery-container" onClick={(e) => e.stopPropagation()}>
        <div className="logo" onClick={handleLogoClick}>
          {texts[currentIndex]}
        </div>
        <div className="gallery">
          {(() => {
            const elements = [];
            for (let i = 0; i < visibleCount; i++) {
              const index = (currentIndex + i) % images.length;
              const angle = (360 / visibleCount) * i + 90;
              const isTopmost = Math.abs((angle + 360) % 360 - 270) < 5;

              elements.push(
                <div
                  key={index}
                  className={`gallery-item ${isTopmost ? "highlight" : ""}`}
                  style={{
                    transform: `rotate(${angle}deg) translate(${radius}px)`,
                    transition: "transform 0.8s ease",
                  }}
                >
                  <div
                    className="image-container"
                    style={{
                      transform: `rotate(-${angle}deg)`,
                      transition: "transform 1s ease",
                    }}
                    onClick={() => handleImageClick(images[index])}
                  >
                    <img src={images[index]} alt={`Image ${index + 1}`} />
                  </div>
                </div>
              );
            }
            return elements;
          })()}
        </div>

        {selectedImage && (
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <img src={selectedImage} alt="Enlarged view" />
              <button className="close-button" onClick={closeModal}>
                ✖
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
