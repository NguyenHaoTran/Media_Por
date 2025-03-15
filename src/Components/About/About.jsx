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

    sr.reveal(`.name`, { origin: "left", interval: 200 });
    //
    sr.reveal(`.hocVan`, { origin: "top", interval: 200 });
    sr.reveal(`.item`, { origin: "top", interval: 200 });
  }, []);

  return (
    <div className="about_container">
      <div className="contents">
        <div className="name">
          <h2>Trần Nguyên Hào</h2>
          <p>
            frontend devoloper <i class="ri-code-s-slash-line"></i>
          </p>
        </div>

        <div className="base_info">
          <div className="icons">
            <i class="ri-smartphone-line"></i>

            <i class="ri-mail-line"></i>

            <i class="ri-map-pin-line"></i>

            <i class="ri-calendar-line"></i>

            <i class="ri-info-i"></i>
          </div>
          <div className="info">
            <div className="item">
              <b>Số điện thoại:</b>
              <p>0523874839</p>
            </div>
            <div className="item">
              <b>Email:</b>
              <p>trannguyenhao123@gmail.com</p>
            </div>
            <div className="item">
              <b>Địa chỉ:</b>
              <p>114 đường số 18, Bình Hưng Hòa, Bình Tân, TPHCM</p>
            </div>
            <div className="item">
              <b>Ngày sinh:</b>
              <p>21/11/2001</p>
            </div>
            <div className="item">
              <b>Giới tính:</b> <p>Nam</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="hocVan">
          <h2>Học vấn</h2>
          <div className="hocVan_contents">
            <div className="hocVan_name">
              <div className="hocVan_img">
                <img src="https://raw.githubusercontent.com/NguyenHaoTran/Dev_Por/refs/heads/main/public/LogoHuflit.png" alt="" />
              </div>
              <div className="hocVan_shool">
                <h4>Đại học ngoại ngữ tin học TPHCM</h4>
                <p>Chuyên ngành Công nghệ phần mềm</p>
                <p>2019 - 2023</p>
              </div>
            </div>
            <div className="hocVan_name">
              <div className="hocVan_img">
                <img src="https://raw.githubusercontent.com/NguyenHaoTran/Dev_Por/refs/heads/main/public/TOIECpng.png" alt="" />
              </div>
              <div className="hocVan_shool">
                <h4>TOEIC</h4>
                <p>Đạt điểm số 540</p>
                <p>2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
