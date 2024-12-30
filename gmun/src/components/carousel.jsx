import React from 'react';
import '../styles/Carousel.css';

const Carousel = () => {
    return (
        <div id="wrapper">
            <div id="image">
                <div className="image i1">
                    <img src="https://i.imgur.com/jALdWIY.png" alt="" />
                </div>
                <div className="image i2">
                    <img src="https://i.imgur.com/erXe8cQ.png" alt="" />
                </div>
                <div className="image i3">
                    <img src="https://i.imgur.com/syRkxXK.png" alt="" />
                </div>
                <div className="image i4">
                    <img src="https://i.imgur.com/tapTvcA.png" alt="" />
                </div>
                <div className="image i5">
                    <img src="https://i.imgur.com/jKeLfYT.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Carousel; // Ensure default export
