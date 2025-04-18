import React, { useState } from "react";
import images from "../../data";
import Preview from "../preview/preview";

export default function Gallery() {
  const [previewIndex, setPreviewIndex] = useState(null);

  const handlePreview = (index) => {
    setPreviewIndex(index);
  };

  const handleClose = () => {
    setPreviewIndex(null);
  };

  const handleNext = () => {
    setPreviewIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setPreviewIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-container">
      <div className="image-grid">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Image ${idx + 1}`}
            className="gallery-image"
            onClick={() => handlePreview(idx)}
          />
        ))}
      </div>

      {previewIndex !== null && (
        <Preview
          images={images}
          index={previewIndex}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
}
