import React from "react";
import "./about.scss";
import { useEffect } from "react";
// scrollreveal
import ScrollReveal from "scrollreveal";

const About = () => {
  // ScrollReveal
  // useEffect(() => {
  //   const sr = ScrollReveal({
  //     reset: true, // Đảm bảo animation sẽ luôn thực hiện khi cuộn lại
  //     origin: "top",
  //     distance: "50px",
  //     duration: "700",
  //     delay: 200,
  //   });

  //   sr.reveal(`.name`, { origin: "left", interval: 200 });
  //   //
  //   sr.reveal(`.hocVan`, { origin: "top", interval: 200 });
  //   sr.reveal(`.item`, { origin: "top", interval: 200 });
  // }, []);

  return (
    <div className="about_container">
      <div className="banner">
        <img className="img_banner" src="/bannerAbout2.png" alt="" />
        <p>"Mọi khung hình đều có một câu chuyện."</p>
      </div>

      <div className="contents">
        <div className="name">
          <img className="avt" src="" alt="" />
          <div className="right">
            <div className="right-name">
              <h3>Trần Nguyên Hào</h3>
              <div className="sub_title">Filmmaker, Photographer, Editor</div>
            </div>
          </div>
        </div>
        <div className="texts"></div>
        <div className="contacts"></div>
      </div>
    </div>
  );
};

export default About;
