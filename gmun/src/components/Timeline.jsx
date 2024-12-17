import React, { useEffect, useRef, useState } from "react";
import "../styles/Timeline.css";
import image1 from "../images/an1.jpg";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(-1); // Track the active timeline item
  const timelineRefs = useRef([]); // Refs for each timeline item

  const timelineItems = [
    {
      year: "GMUN Workshop",
      img: image1,
      desc: "Come join us in this Global Model United Nations Workshop, to begin this great journey.",
    },
    {
      year: "Opening Ceremony",
      img: image1,
      desc: "A fun and interactive Opening Ceremony, to mark the beginning of the Global Model United Nations Event",
    },
    {
      year: "GMUN Day-1",
      img: image1,
      desc: "First Committee Meeting and Discussion.",
    },
    {
      year: "SOCIAL NIGHT after Day-1",
      img: image1,
      desc: "Come and have fun at our first Social Night of the Event.",
    },
    {
      year: "GMUN Day-2",
      img: image1,
      desc: "Final day of Committee discussions.",
    },
    {
      year: "Closing Ceremony",
      img: image1,
      desc: "Join us for Closing ceremony of GMUN-2025",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null, //viewport
      rootMargin: "0px",
      threshold: 0.7 
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const index = timelineRefs.current.indexOf(entry.target);
        if (entry.isIntersecting) {
          setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
  <div className="TimelineOutermostBox">
    <div className="timeline-container">
      <div className="timeline-header">
        <h2 className="timeline-header__title">TIMELINE OF GMUN 2025</h2>
      </div>
      <div className="timeline">
        {timelineItems.map((item, index) => (
          <div
            className={`timeline-item ${
              index === activeIndex ? "timeline-item--active" : ""
            }`}
            key={index}
            ref={(el) => (timelineRefs.current[index] = el)} // Assign ref to each timeline item
          >
            <div className="timeline__content">
              <img
                className="timeline__img"
                src={item.img}
                alt={`${item.year} Event`}
              />
              <h2 className="timeline__content-title">{item.year}</h2>
              <p className="timeline__content-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Timeline;
