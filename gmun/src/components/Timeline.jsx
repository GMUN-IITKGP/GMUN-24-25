import React, { useEffect, useRef, useState } from "react";
import "../styles/Timeline.css";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(-1); // Track the active timeline item
  const timelineRefs = useRef([]); // Refs for each timeline item

  const timelineItems = [
    {
      year: "GMUN Workshop",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6zQ3JPXHF0YD_gqlwnSZHKfZgid-daGUbg&s",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem incidunt culpa nam sequi inventore libero soluta officia eveniet magni, sit blanditiis quas cupiditate necessitatibus consequatur explicabo! Fugiat vitae maxime debitis.",
    },
    {
      year: "Opening Ceremony",
      img: "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/65704467576a9_global-model-united-nations-2024.png?d=700x400",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem incidunt culpa nam sequi inventore libero soluta officia eveniet magni, sit blanditiis quas cupiditate necessitatibus consequatur explicabo! Fugiat vitae maxime debitis.",
    },
    {
      year: "GMUN Day-1",
      img: "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/65704467576a9_global-model-united-nations-2024.png?d=700x400",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem incidunt culpa nam sequi inventore libero soluta officia eveniet magni, sit blanditiis quas cupiditate necessitatibus consequatur explicabo! Fugiat vitae maxime debitis.",
    },
    {
      year: "Social Night after Day-1",
      img: "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/65704467576a9_global-model-united-nations-2024.png?d=700x400",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem incidunt culpa nam sequi inventore libero soluta officia eveniet magni, sit blanditiis quas cupiditate necessitatibus consequatur explicabo! Fugiat vitae maxime debitis.",
    },
    {
      year: "GMUN Day-2",
      img: "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/65704467576a9_global-model-united-nations-2024.png?d=700x400",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem incidunt culpa nam sequi inventore libero soluta officia eveniet magni, sit blanditiis quas cupiditate necessitatibus consequatur explicabo! Fugiat vitae maxime debitis.",
    },
    {
      year: "GMUN Closing Ceremony",
      img: "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/65704467576a9_global-model-united-nations-2024.png?d=700x400",
      desc: "In 1908 he helped the group of officers who toppled the Sultan. Mustafa Kemal’s career flourished as he won his heroism in the far corners of the Ottoman Empire, including Albania and Tripoli.",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null, //viewport
      rootMargin: "0px",
      threshold: 0.4, 
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
