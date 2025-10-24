import { useState } from "react";
import questionMarkIcon from "../assets/questionMark.svg";
import sixBoxesIcon from "../assets/6boxes.svg";
import galleryImg from "../assets/galleryimg.png";

import "./gallery.css";

const GallaryCarousel = () => {
  const createPlaceholder = () => galleryImg;

  const [images, setImages] = useState([
    createPlaceholder(0),
    createPlaceholder(1),
    createPlaceholder(2),
    createPlaceholder(3),
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddImage = () => {
    const newImage = createPlaceholder(images.length);
    setImages([...images, newImage]);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="animated-carousel-section">
      <div className="gallery-main-container">
        <div className="icons">
          <img
            src={questionMarkIcon}
            alt="Question Mark"
            className="question-mark-icon"
          />
          <img src={sixBoxesIcon} alt="Six Boxes" className="six-boxes-icon" />
        </div>

        <div className="gallery-container">
          <div className="gallery-header">
            <div className="gallery-title">Gallery</div>
            <div className="gallery-controls">
              <button className="add-image-btn" onClick={handleAddImage}>
                + ADD IMAGE
              </button>
              <div className="navigation-arrows">
                <button
                  className="arrow-btn"
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className="arrow-btn"
                  onClick={handleNext}
                  disabled={currentIndex >= images.length - 3}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="gallery-images">
            <div
              className="gallery-images-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {images.map((img, index) => (
                <div key={index} className="gallery-image-wrapper">
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="gallery-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallaryCarousel;
