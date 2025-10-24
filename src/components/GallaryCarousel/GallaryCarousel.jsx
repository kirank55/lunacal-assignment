import { useState } from "react";
import Sidebar from "../Sidebar";

import galleryImg from "../../assets/galleryimg.png";
import "./gallery.css";

const GallaryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const createPlaceholder = () => galleryImg;

  // Initialize gallary with 4 images
  const [images, setImages] = useState([
    createPlaceholder(),
    createPlaceholder(),
    createPlaceholder(),
    createPlaceholder(),
  ]);

  // Add a new image to the gallery
  const handleAddImage = () => {
    const newImage = createPlaceholder();
    setImages((prevImages) => [...prevImages, newImage]);
  };

  // Navigate to previous images
  const handlePrevious = () => {
    if (currentIndex > 0) {
      // Slide the carousel if there are any hidden images on the right side of the carousel
      setCurrentIndex(currentIndex - 1);
    }
  };

  const checkImagesonRHS = () => currentIndex < images.length - 3;

  // Navigate to next images
  const handleNext = () => {
    // No images to show.
    if (!checkImagesonRHS()) return;

    // Slide the carousel if there are any hidden images on the right side of the carousel
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="animated-carousel-section">
      <div className="gallery-main-container">
        <Sidebar />
        <div className="gallery-container">
          {/* Gallery header with title and controls */}
          <div className="gallery-header">
            <div className="gallery-title">Gallery</div>
            <div className="gallery-controls">
              <button className="add-image-btn" onClick={handleAddImage}>
                + ADD IMAGE
              </button>
              {/* Navigation arrows */}
              <div className="navigation-arrows">
                {/* Previous button - disabled at start */}
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
                {/* Next button - disabled at end */}
                <button
                  className="arrow-btn"
                  onClick={handleNext}
                  disabled={!checkImagesonRHS()}
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

          {/* Image carousel - shows 3 images at a time */}
          <div className="gallery-images">
            {/* Track slides horizontally based on currentIndex */}
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
