import React, { useEffect, useState, Suspense } from "react";
import "./Gallery.css";

// Dynamically import images using import()
const imageImports = [
  import("../images/1.webp"),
  import("../images/2.webp"),
  import("../images/3.webp"),
  import("../images/4.webp"),
  import("../images/5.webp"),
  import("../images/6.webp"),
  import("../images/7.webp"),
  import("../images/8.webp"),
  import("../images/9.webp"),
  import("../images/10.webp"),
  import("../images/11.webp"),
  import("../images/12.webp"),
  import("../images/13.webp"),
  import("../images/14.webp"),
  import("../images/15.webp"),
  import("../images/16.webp"),
  import("../images/17.webp"),
  import("../images/18.webp"),
];

// Text captions for each image
const texts = [
  "Click Me",
  "Opening Ceremony",
  "Day 1",
  "Day 1",
  "Day 1",
  "Day 1",
  "Day 1",
  "Day 2",
  "Day 2",
  "Day 2",
  "Day 2",
  "Day 2",
  "Day 2",
  "Award Distributions",
  "Closing Remarks",
  "Closing Ceremony",
  "Closing Ceremony",
  "Closing Ceremony",
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [radius, setRadius] = useState(400);
  const [selectedImage, setSelectedImage] = useState(null);
  const visibleCount = 8;

  // Handle key press for navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageImports.length);
    } else if (e.key === "ArrowLeft") {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + imageImports.length) % imageImports.length);
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

  // Update radius for responsiveness
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 450) {
        setRadius(200);
      } else {
        setRadius(400);
      }
    };

    window.addEventListener("resize", updateRadius);
    updateRadius();

    return () => {
      window.removeEventListener("resize", updateRadius);
    };
  }, []);

  const handleLogoClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageImports.length);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="page-container" onClick={closeModal}>
      <div className="gallery-container" onClick={(e) => e.stopPropagation()}>
        <div className="logo" onClick={handleLogoClick}>
          <div className="logo-text">
            {texts[currentIndex]}
            <span className="click-me">Click Me</span>
          </div>
        </div>
        <div className="gallery">
          {(() => {
            const elements = [];
            for (let i = 0; i < visibleCount; i++) {
              const index = (currentIndex + i) % imageImports.length;
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
                    onClick={() => handleImageClick(imageImports[index])}
                  >
                    {/* Lazy load each image using Suspense */}
                    <Suspense fallback={<div className="image-placeholder">Loading...</div>}>
                      <LazyImage importPromise={imageImports[index]} index={index} />
                    </Suspense>
                  </div>
                </div>
              );
            }
            return elements;
          })()}
        </div>

        {/* Modal for Enlarged Image */}
        {selectedImage && (
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              ✖
            </button>
            <div className="modal-content">
              <Suspense fallback={<div className="image-placeholder">Loading...</div>}>
                <LazyImage importPromise={selectedImage} />
              </Suspense>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// LazyImage Component for dynamically loading images
const LazyImage = ({ importPromise, index }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    importPromise.then((module) => {
      setImageSrc(module.default); // Get the default export from the dynamic import
    });
  }, [importPromise]);

  return <img src={imageSrc} alt={`Slide ${index + 1}`} />;
};

export default Gallery;
