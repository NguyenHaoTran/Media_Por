import React, { useState, useRef, useEffect } from "react";
import albumsData from "../../../public/data_media_por.json";
import "./styles.scss";

const AlbumGallery = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);

  // Mở popup
  const openPopup = (images) => {
    setSelectedImages(images);
    setIsPopupOpen(true);
  };

  // Đóng popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedImages([]);
  };

  // Xử lý scroll để cập nhật pagination dots
  const handleScroll = () => {
    if (galleryRef.current) {
      const scrollLeft = galleryRef.current.scrollLeft;
      const itemWidth = galleryRef.current.offsetWidth / 3; // Hiển thị 3 ảnh
      const index = Math.round(scrollLeft / itemWidth);
      setCurrentIndex(index);
    }
  };

  return (
    <div className="gallery-wrapper">
      {/* Album Grid - Desktop */}
      <div className="album-gallery" ref={galleryRef} onScroll={handleScroll}>
        {albumsData.map((album) => (
          <div
            key={album.id}
            className="album"
            onClick={() => openPopup(album.images)}>
            <img src={album.coverImage} alt={album.title} />
          </div>
        ))}
      </div>

      {/* Dấu chấm pagination cho mobile */}
      <div className="pagination-dots">
        {albumsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Popup toàn màn hình */}
      {isPopupOpen && (
        <div className="album-popup active" onClick={closePopup}>
          <div className="popup-content">
            {selectedImages.map((image, index) => (
              <img key={index} src={image} alt={`Photo ${index + 1}`} />
            ))}
          </div>
          <span className="close-btn" onClick={closePopup}>
            ×
          </span>
        </div>
      )}
    </div>
  );
};

export default AlbumGallery;
