import React from "react";
import "./about.scss";
import { useEffect } from "react";
// scrollreveal
import ScrollReveal from "scrollreveal";

const About = () => {
  // ScrollReveal
  useEffect(() => {
    const sr = ScrollReveal({
      reset: true, // Đảm bảo animation sẽ luôn thực hiện khi cuộn lại
      origin: "top",
      distance: "50px",
      duration: "700",
      delay: 200,
    });

    sr.reveal(`.p_banner`, { origin: "left", interval: 200 });
    sr.reveal(`.avt`, { origin: "left", interval: 200 });
    sr.reveal(`.right`, { origin: "right", interval: 200 });
    //
    // sr.reveal(`.content_bonus`, { origin: "top", interval: 200 });
  }, []);

  return (
    <div className="about_container">
      <div className="banner">
        <img className="img_banner" src="/bannerAbout2.png" alt="" />
        <p className="p_banner">"Mọi khung hình đều có một câu chuyện."</p>
      </div>

      <div className="contents">
        <div className="name">
          <img className="avt" src="/TIN_1610_stroke.png" alt="" />
          <div className="right">
            <div className="right-name">
              <h3>Trần Nguyên Hào</h3>
              <div className="sub_title">Filmmaker, Photographer, Editor</div>
              <p>
                "Mỗi khung hình là một mảnh ghép của câu chuyện.
                <br /> Tôi tin rằng hình ảnh không chỉ đẹp mà còn cần phải chạm
                đến cảm xúc."
              </p>
              <p>trannguyenhao123@gmail.com</p>
              <p>Phone-Zalo: 0523874839</p>
            </div>
          </div>
        </div>
        <div className="bonus">
          <div className="content_bonus">
            <img src="/A_crop_H.png" alt="" />
            <p>
              "Ánh sáng, góc nhìn và khoảnh khắc – mọi khung hình đều là một lát
              cắt của câu chuyện mà tôi muốn kể."
            </p>
          </div>
          <div className="content_bonus">
            <img src="/B_crop_H.png" alt="" />
            <p>
              "Giữa thực tế và cảm xúc, hình ảnh không chỉ tái hiện mà còn gợi
              mở những điều chưa được nói thành lời."
            </p>
          </div>
          <div className="content_bonus">
            <img src="/C_crop_H.png" alt="" />
            <p>
              "Tôi luôn tìm kiếm cách truyền tải cảm giác qua màu sắc,
              <br /> bố cục và ánh sáng – nơi hình ảnh trở thành ngôn ngữ
              riêng."
            </p>
          </div>
          <div className="content_bonus">
            <img src="/D_crop_H_1.1.1.png" alt="" />
            <p>
              "Mỗi khung hình là một mảnh ghép của hành trình, <br />
              nơi kỹ thuật và cảm xúc giao thoa để tạo nên dấu ấn cá nhân."
            </p>
          </div>
        </div>
        <div className="texts"></div>
        <div className="contacts"></div>
      </div>
    </div>
  );
};

export default About;
