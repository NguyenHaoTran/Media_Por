import React, { useState } from "react";
import albumsData from "../../../public/data_media_por.json"; // Import file JSON
import "./styles.scss";

const AlbumGallery = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Mở popup và hiển thị ảnh của album được chọn
  const openPopup = (images) => {
    setSelectedImages(images);
    setIsPopupOpen(true);
  };

  // Đóng popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedImages([]);
  };

  return (
    <div className="album-gallery">
      {albumsData.map((album) => (
        <div
          key={album.id}
          className="album"
          onClick={() => openPopup(album.images)}>
          <img src={album.coverImage} alt={album.title} />
          {/* <p>{album.title}</p> */}
        </div>
      ))}

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
