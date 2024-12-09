import React, { useEffect, useState } from "react";
import "../styles/Timeline.css";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active timeline item
  const [backgroundImage, setBackgroundImage] = useState(""); // Track the background image

  const timelineItems = [
    {
      year: "GMUN Workshop",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6zQ3JPXHF0YD_gqlwnSZHKfZgid-daGUbg&s",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem incidunt culpa nam sequi inventore libero soluta officia eveniet magni, sit blanditiis quas cupiditate necessitatibus consequatur explicabo! Fugiat vitae maxime debitis.",
    },
    {
      year: "Openning Ceremony",
      img: "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/65704467576a9_global-model-united-nations-2024.png?d=700x400",
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem incidunt culpa nam sequi inventore libero soluta officia eveniet magni, sit blanditiis quas cupiditate necessitatibus consequatur explicabo! Fugiat vitae maxime debitis."    },
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
    },{
      year: "GMUN Closing Ceremony",
      img: "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/65704467576a9_global-model-united-nations-2024.png?d=700x400",
      desc: "In 1908 he helped the group of officers who toppled the Sultan. Mustafa Kemal’s career flourished as he won his heroism in the far corners of the Ottoman Empire, including Albania and Tripoli.",
    },
    // Add more timeline items as needed
  ];

  useEffect(() => {
  const handleScroll = () => {
    const timelineElements = document.querySelectorAll(".timeline-item");

    timelineElements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      console.log(rect);
      
      // Check if the element is in the viewport
      const isActive =
        (rect.top <= window.innerHeight / 2) && (rect.bottom >= window.innerHeight / 2);

      // Add or remove the active class based on visibility
      if (isActive) {
        el.classList.add("timeline-item--active");
      } else {
        el.classList.remove("timeline-item--active");
      }
    });
  };

  // Attach the scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Trigger the scroll handler on initial render to handle pre-loaded elements
  handleScroll();

  // Cleanup event listener
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div
      className="timeline-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="timeline-header">
        <h2 className="timeline-header__title">Timeline of GMUN 2025</h2>
      </div>
      <div className="timeline">
        {timelineItems.map((item, index) => (
          <div
            className={`timeline-item ${
              index === activeIndex ? "timeline-item--active" : ""
            }`}
            key={index}
          >
            <div className="timeline__content">
              <img className="timeline__img" src={item.img} alt={`${item.year} Event`} />
              <h2 className="timeline__content-title">{item.year}</h2>
              <p className="timeline__content-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="demo-footer">
      </div>
    </div>
  );
};

export default Timeline;

