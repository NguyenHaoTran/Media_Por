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
          <h1>ng.hao.t</h1>
        </div>
        <div className="slogan">
          <p>
            "Mỗi thước phim không chỉ là hình ảnh, mà còn là câu chuyện, cảm xúc
            và đam mê."
          </p>
        </div>
      </div>
      <div className="contents">
        <video autoPlay loop muted playsInline className="banner_video">
          <source src="public\banner_2359.mp4" type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ video.
        </video>
        <div className="projects">
          <div className="items_project"></div>
          <div className="texts"></div>
          <div className="stills"></div>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default Home;
