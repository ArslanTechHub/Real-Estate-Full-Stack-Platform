import React, { useState, useEffect } from "react";

const Slider = ({ images, setShowMap }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setShowOverlay(true);
    setShowMap(false); // Hide TinyMap when slider is open
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setShowMap(true); // Show TinyMap when slider is closed
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  // Handle Escape key press to close overlay
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeOverlay();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <div className="flex w-full h-80 gap-5 mb-3">
        <div className="flex w-[70%]">
          <img
            src={images[0]}
            alt=""
            className="transform transition-transform duration-300 ease-in-out hover:scale-110 w-full h-full object-cover rounded-lg cursor-pointer"
            onClick={() => handleImageClick(0)}
          />
        </div>
        <div className="flex flex-col gap-2 w-[30%]">
          {images.slice(1).map((image, index) => (
            <img
              src={image}
              alt=""
              key={index}
              className="transform transition-transform duration-300 ease-in-out hover:scale-110 w-full h-[100px] object-cover rounded-lg cursor-pointer"
              onClick={() => handleImageClick(index + 1)}
            />
          ))}
        </div>
      </div>

      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div
            onClick={prevImage}
            className="cursor-pointer absolute left-5 z-50"
          >
            <img
              className="w-12 h-12 object-cover"
              src="/arrow.png"
              alt="Previous"
            />
          </div>
          <div className="relative">
            <img
              src={images[currentImageIndex]}
              alt=""
              className="w-screen h-screen object-contain"
            />
            <div
              className="absolute top-5 right-5 text-white text-4xl font-bold cursor-pointer z-50"
              onClick={closeOverlay}
            >
              X
            </div>
          </div>
          <div
            onClick={nextImage}
            className="cursor-pointer absolute right-5 z-50"
          >
            <img
              className="w-12 h-12 object-cover transform rotate-180"
              src="/arrow.png"
              alt="Next"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
