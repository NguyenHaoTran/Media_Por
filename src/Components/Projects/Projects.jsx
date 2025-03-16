import React, { useEffect, useState } from "react";
import "./projects.scss";
import imageData from "../../../public/images_Stills.json";
import ScrollReveal from "scrollreveal";

const Projects = () => {
  const [imageTypes, setImageTypes] = useState([]);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    const checkImageSize = async () => {
      const types = await Promise.all(
        imageData.images.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              resolve({
                src,
                type: img.width > img.height ? "landscape" : "portrait",
              });
            };
          });
        })
      );
      setImageTypes(types);
    };

    checkImageSize();
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      reset: true,
      origin: "top",
      distance: "50px",
      duration: "700",
      delay: 200,
    });

    sr.reveal(".cards", { origin: "left", interval: 200 });
    sr.reveal("h2", { origin: "right", interval: 200 });
    sr.reveal(".card", { origin: "bottom", interval: 200 });
  }, []);

  return (
    <div className="projects_container">
      <div className="header_bar">
        <div className="Name">
          <div className="avt">
            <img
              src="https://raw.githubusercontent.com/NguyenHaoTran/IMGS_Dev_Por/refs/heads/main/avt.jpg"
              alt=""
            />
          </div>
          <h1>NguyenHaoTran</h1>
        </div>
        <div className="slogan">
          <p>
            "Mỗi thước phim không chỉ là hình ảnh, mà còn là câu chuyện, cảm xúc
            và đam mê."
          </p>
        </div>
      </div>
      {/*  */}
      <div className="images">
        <div className="title">
          <h3>Thư Viện Ảnh</h3>
        </div>
        <div className="imgs">
          {imageTypes.map(({ src, type }, index) => (
            <div
              className={`img ${type}`}
              key={index}
              onClick={() => setFullscreenImage(src)}>
              <img src={src} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      {fullscreenImage && (
        <div className="fullscreen" onClick={() => setFullscreenImage(null)}>
          <img src={fullscreenImage} alt="Fullscreen" />
        </div>
      )}

      {/*  */}
      <div className="footer">
        <div className="socials">
          <a href="https://www.facebook.com/profile.php?id=100004978517081">
            <i className="ri-facebook-box-fill"></i>
          </a>
          <a href="https://www.instagram.com/ng.hao.t/?fbclid=IwY2xjawFWjpVleHRuA2FlbQIxMAABHTTWJkf5XziAIpi7WI_szWKaBTgqJPMZNCaRVW4TLBlPtbbydJke-DisYw_aem_ZNAD-vCGjGHxYT6F5XSoeg">
            <i className="ri-instagram-line"></i>
          </a>
        </div>
        <p>HCM city_VietNam</p>
        <p>trannguyenhao123@gmail.com</p>
      </div>
    </div>
  );
};

export default Projects;
