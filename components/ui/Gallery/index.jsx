import React, { useEffect, useState } from "react";
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageCount = 30;
    const newImages = Array.from({ length: imageCount }, (_, index) => ({
      id: index + 1,
      src: `gallery/images/img${index + 1}.jpg`,
      thumb: `gallery/thumb/img${index + 1}.jpg`,
      alt: `Image ${index + 1}`,
    }));
    setImages(newImages);
  }, []);

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="max-w-7xl mx-auto mt-6 px-6">
      <h1 className="text-2xl font-bold text-center text-gray-800 p-4 mb-4">
        Gallery
      </h1>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        mode="lg-fade"
        elementClassNames="masonry-gallery"
      >
        {images.map((image) => (
          <a
            key={image.id}
            className="gallery-item"
            href={image.src}
            data-src={image.src}
          >
            <img alt={image.alt} src={image.thumb} />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
