import React, { useEffect, useState } from "react";
import "./home.scss";
import ScrollReveal from "scrollreveal";
import AlbumGallery from "../AlbumGallery/AlbumGallery";
import videoData from "../../../public/dataVideo.json";

const Home = () => {
  const [popupVideo, setPopupVideo] = useState(null);

  useEffect(() => {
    const sr = ScrollReveal({
      reset: true,
      origin: "top",
      distance: "50px",
      duration: 700,
      delay: 200,
    });

    sr.reveal(".name", { origin: "left", interval: 200 });
    sr.reveal(".gif", { origin: "right", interval: 200 });
    sr.reveal(".note", { origin: "bottom", interval: 200 });
    sr.reveal(".cv", { origin: "bottom", interval: 200 });
    sr.reveal(".item", { origin: "top", interval: 200 });
  }, []);

  // Lấy danh sách video từ JSON
  const videos = videoData.videos.map((video) => ({
    ...video,
    embedLink: video.link.replace("youtu.be/", "www.youtube.com/embed/"), // Chuyển link sang dạng nhúng
  }));

  const openPopup = (embedLink) => {
    setPopupVideo(embedLink);
  };

  const closePopup = () => {
    setPopupVideo(null);
  };

  return (
    <div className="home_container">
      <div className="header_bar">
        <div className="Name">
          <div className="avt">
            <img
              src="https://raw.githubusercontent.com/NguyenHaoTran/IMGS_Dev_Por/refs/heads/main/avt.jpg"
              alt="Avatar"
            />
          </div>
          <h1>NguyenHaoTran</h1>
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="contents">
        <video autoPlay loop muted playsInline className="banner_video">
          <source src="public/banner_2359.mp4" type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ video.
        </video>

        {/* Danh sách dự án */}
        <div className="projects">
          <div className="items_project">
            {videos.map((video, index) => (
              <div
                key={index}
                className="item_project"
                onClick={() => openPopup(video.embedLink)}>
                <a>
                  <p>{video.title}</p>
                  <img src={video.cover} alt={video.title} />
                </a>
              </div>
            ))}
          </div>

          <div className="texts">
            <p className="p_projects">
              "Mỗi bức ảnh là một khung hình tĩnh, nơi ánh sáng, màu sắc và
              khoảnh khắc cùng nhau tạo nên câu chuyện riêng."
            </p>
            <AlbumGallery />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="socials">
          <a href="https://www.facebook.com/profile.php?id=100004978517081">
            <i className="ri-facebook-box-fill"></i>
          </a>
          <a href="https://www.instagram.com/ng.hao.t/">
            <i className="ri-instagram-line"></i>
          </a>
        </div>
        <p>HCM city_VietNam</p>
        <p>trannguyenhao123@gmail.com</p>
      </div>

      {/* Popup Video */}
      {popupVideo && (
        <div className="popup active" onClick={closePopup}>
          <div className="popup-content">
            <button className="close-btn" onClick={closePopup}>
              ×
            </button>
            <iframe
              src={popupVideo}
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
