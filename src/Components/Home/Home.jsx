import React from "react";
import "./home.scss";
import { useEffect, useRef } from "react";
// scrollreveal
import ScrollReveal from "scrollreveal";
// Tilt
import VanillaTilt from "vanilla-tilt";

const Home = () => {
  // ScrollReveal
  useEffect(() => {
    const sr = ScrollReveal({
      reset: true, // Đảm bảo animation sẽ luôn thực hiện khi cuộn lại
      origin: "top",
      distance: "50px",
      duration: "700",
      delay: 200,
    });

    sr.reveal(`.name`, { origin: "left", interval: 200 });
    sr.reveal(`.gif`, { origin: "right", interval: 200 });
    sr.reveal(`.note`, { origin: "bottom", interval: 200 });
    sr.reveal(`.cv`, { origin: "bottom", interval: 200 });
    //
    sr.reveal(`.projects`, { origin: "bottom", interval: 200 });
    sr.reveal(`.item`, { origin: "top", interval: 200 });
  }, []);

  // Tilt for Cards
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);
  const cardRef4 = useRef(null);

  useEffect(() => {
    const tiltOptions = {
      max: 10,
      speed: 100,
      glare: true,
      "max-glare": 0.2,
    };

    // Initialize VanillaTilt for each card
    if (cardRef1.current) VanillaTilt.init(cardRef1.current, tiltOptions);
    if (cardRef2.current) VanillaTilt.init(cardRef2.current, tiltOptions);
    if (cardRef3.current) VanillaTilt.init(cardRef3.current, tiltOptions);
    if (cardRef4.current) VanillaTilt.init(cardRef4.current, tiltOptions);

    // Cleanup
    return () => {
      if (cardRef1.current) cardRef1.current.vanillaTilt.destroy();
      if (cardRef2.current) cardRef2.current.vanillaTilt.destroy();
      if (cardRef3.current) cardRef3.current.vanillaTilt.destroy();
      if (cardRef4.current) cardRef4.current.vanillaTilt.destroy();
    };
  }, []);
  return (
    <div className="home_container">
      <div className="header_bar">
        <div className="Name">
          <div className="avt">
            <img
              src="https://raw.githubusercontent.com/NguyenHaoTran/IMGS_Dev_Por/refs/heads/main/avt.jpg"
              alt=""
            />
          </div>
          <h1>Nguyen Hao Tran</h1>
        </div>
        <div className="slogan">
          <p>
            "Mỗi thước phim không chỉ là hình ảnh, mà còn là câu chuyện, cảm xúc
            và đam mê."
          </p>
        </div>
      </div>
      {/*  */}
      <div className="contents">
        <video autoPlay loop muted playsInline className="banner_video">
          <source src="public\banner_2359.mp4" type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ video.
        </video>
        {/* PROJECTS */}
        <div className="projects">
          <p className="p_projects">
            "Những thước phim này không chỉ là hình ảnh chuyển động, mà còn là
            góc nhìn, cảm xúc và cách tôi kể câu chuyện của riêng mình."
          </p>
          <div className="items_project">
            <div className="item_project">
              <a href="#">
                <p>tatsemakerhub</p>
                <img src="public\tatseMakerHub_1.1.1.png" alt="" />
              </a>
            </div>
            <div className="item_project">
              <a href="#">
                <p>qua khung cửa sổ #2</p>
                <img src="public\QKCS1.2_1.1.2.png" alt="" />
              </a>
            </div>
            <div className="item_project">
              <a href="#">
                <p>qua khung cửa sổ #6</p>
                <img src="public\QKCS_6_1.1.2.png" alt="" />
              </a>
            </div>
            <div className="item_project">
              <a href="#">
                <p>qua khung cửa sổ #3</p>
                <img src="public\QKCS3_1.1.1.png" alt="" />
              </a>
            </div>
            <div className="item_project">
              <a href="#">
                <p>Trị An 2023</p>
                <img src="public\DKM_1.1.4.png" alt="" />
              </a>
            </div>
          </div>
          <div className="texts">
            <p className="p_projects">
              "Mỗi bức ảnh là một khung hình tĩnh, nơi ánh sáng, màu sắc và
              khoảnh khắc cùng nhau tạo nên câu chuyện riêng."
            </p>
          </div>
          <div className="stills"></div>
        </div>
      </div>
      <div className="footer">
        <div className="socials">
          <a href="https://www.facebook.com/profile.php?id=100004978517081">
            <i className="ri-facebook-box-fill"></i>
          </a>
          <a href="https://www.instagram.com/ng.hao.t/?fbclid=IwY2xjawFWjpVleHRuA2FlbQIxMAABHTTWJkf5XziAIpi7WI_szWKaBTgqJPMZNCaRVW4TLBlPtbbydJke-DisYw_aem_ZNAD-vCGjGHxYT6F5XSoeg">
            <i className="ri-instagram-line"></i>
          </a>
        </div>
        <p>HCM city _ VietNam</p>
        <p>trannguyenhao123@gmail.com</p>
      </div>
    </div>
  );
};

export default Home;
