import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import image1 from '../images/1.JPG';
import image2 from '../images/2.jpg';
import image3 from '../images/3.JPG';
import image4 from '../images/4.JPG';
import image5 from '../images/5.JPG';
import image6 from '../images/6.JPG';
import image7 from '../images/7.JPG';
import image8 from '../images/8.JPG';
import image9 from '../images/9.JPG';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const Gallery = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const handleImageClick = () => {
    setHighlightedIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to start
  };

  return (
    <GalleryWrapper>
      <Title>GMUN 2023</Title>
      <GalleryContainer>
        {images.map((src, index) => {
          // Calculate which images are visible: the current image and the next one in sequence
          const isVisible =
            index === highlightedIndex ||
            index === (highlightedIndex + 1) % images.length ||
            index === (highlightedIndex - 1 + images.length) % images.length;

          return isVisible ? (
            <ImageCard
              key={index}
              onClick={handleImageClick}
              animate={{
                opacity: highlightedIndex === index ? 1 : 0.5,
                scale: highlightedIndex === index ? 1.2 : 0.9,
              }}
              transition={{ duration: 0.3 }}
            >
              <Image src={src} alt={`Gallery item ${index + 1}`} />
            </ImageCard>
          ) : null;
        })}
      </GalleryContainer>
    </GalleryWrapper>
  );
};

export default Gallery;

const GalleryWrapper = styled.div`
  text-align: center;
  padding: 20px;
  margin: auto;
  width: 80%;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
`;

const GalleryContainer = styled.div`
  display: flex;
  gap: 60px;
  justify-content: center;
  overflow: hidden;
`;

const ImageCard = styled(motion.div)`
  width: 675px;
  height: 350px;
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
