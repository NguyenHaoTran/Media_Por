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
      <div className="contents">
        <video autoPlay loop muted playsInline className="background_video">
          <source src="public\banner2.35.9.mp4" type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ video.
        </video>

        <div className="name">
          <h1>
            TRẦN NGUYÊN <br />
            <span>HÀO</span>
          </h1>
          <p>
            filmmaker <i class="ri-code-s-slash-line"></i>
          </p>
        </div>
        {/* <div className="gif">
          <img
            src="https://raw.githubusercontent.com/NguyenHaoTran/IMGS_Dev_Por/refs/heads/main/Gif.gif"
            alt=""
          />
        </div> */}
        <div className="note">
          <p>
            "Mỗi thước phim không chỉ là hình ảnh, mà còn là câu chuyện, cảm xúc
            và đam mê!"
          </p>
        </div>
        <div className="cv">
          <a
            href="https://raw.githubusercontent.com/NguyenHaoTran/Dev_Por/main/public/FrontEnd_Dev.pdf"
            download="Trần_Nguyên_Hào_frontendDev.pdf">
            Tải xuống CV
          </a>
          <i class="ri-arrow-down-line"></i>
        </div>
        <div className="scrollDown">
          <i class="ri-arrow-down-line"></i>
        </div>
      </div>

      {/* projects */}
      <div className="projects">
        <h2>Một vài sản phẩm</h2>
        <div className="cards">
          {/* Card */}
          <div className="card" ref={cardRef1}>
            <div className="img">
              <img src="https://raw.githubusercontent.com/NguyenHaoTran/IMGS_Dev_Por/refs/heads/main/Fashion_1.png" />
            </div>
            <div class="content">
              <h3>Fashion Shop</h3>
              <p>Sử dụng ReactJS + Vite để xây dựng, gần như hoàn thành UI.</p>
              <a href="https://nguyenhaotran.github.io/FashionShopV2/">
                Chi tiết
              </a>
            </div>
          </div>

          <div className="card" ref={cardRef2}>
            <div className="img">
              <img src="https://raw.githubusercontent.com/NguyenHaoTran/IMGS_Dev_Por/refs/heads/main/apple_1.png" />
            </div>
            <div class="content">
              <h3>Apple_Web_Clone</h3>
              <p>UI trang chủ Apple, HTML-CSS và Javascript cho responsive.</p>
              <a href="https://nguyenhaotran.github.io/Apple_web/">Chi tiết</a>
            </div>
          </div>

          <div className="card" ref={cardRef3}>
            <div className="img">
              <img src="https://raw.githubusercontent.com/NguyenHaoTran/IMGS_Dev_Por/refs/heads/main/film_1.png" />
            </div>
            <div class="content">
              <h3>Film Lab</h3>
              <p>Sử dụng HTMl_CSS, có Dark mode, responsive với Javascript.</p>
              <a href="https://nguyenhaotran.github.io/LandingPage_Template/">
                Chi tiết
              </a>
            </div>
          </div>

          {/* <div className="card" ref={cardRef4}>
            <div className="img">
              <img src="src\assets\web_test.jpeg" />
            </div>
            <div class="content">
              <h3>Fashion Shop</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#">Chi tiết</a>
            </div>
          </div> */}
        </div>
      </div>
      {/*Skills */}
      <div className="skills">
        <h2>Kỹ năng</h2>
        <div className="items">
          {/* skill */}
          <div className="item">
            <img
              src="https://raw.githubusercontent.com/NguyenHaoTran/IMGS_Dev_Por/refs/heads/main/ReactJS.png"
              alt=""
            />
            <div className="text">
              <h3>ReactJS</h3>
              <p>
                Công cụ chính để thực hiện các trang web. <br />
                Có khả năng tìm hiểu, áp dụng những công nghệ mới có liên quan.
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className="item">
            <img
              src="https://raw.githubusercontent.com/NguyenHaoTran/IMGS_Dev_Por/refs/heads/main/HTML.png"
              alt=""
            />
            <div className="text">
              <h3>HTML</h3>
              <p>
                Thành thạo trong việc sử dụng. <br />
                Có hiểu biết về SEO ở mức khá.
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className="item">
            <img
              src="https://raw.githubusercontent.com/NguyenHaoTran/IMGS_Dev_Por/refs/heads/main/SASS.png"
              alt=""
            />
            <div className="text">
              <h3>SASS</h3>
              <p>
                Luôn áp dụng vào mọi dự án đã và đang thực hiện, cả khi sử dụng
                ReactJS lẫn các trang web cơ bản.
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className="item">
            <img
              src="https://raw.githubusercontent.com/NguyenHaoTran/IMGS_Dev_Por/refs/heads/main/Javascript.png"
              alt=""
            />
            <div className="text">
              <h3>Javascript</h3>
              <p>
                Đủ kiến thức sử dụng để tạo ra những trang web dù không quá
                chuyên sâu. <br />
                Luôn luôn muốn học hỏi thêm và rèn luyện mỗi ngày.
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className="item">
            <img
              src="https://raw.githubusercontent.com/NguyenHaoTran/IMGS_Dev_Por/refs/heads/main/NodeJS.png"
              alt=""
            />
            <div className="text">
              <h3>NodeJS</h3>
              <p>
                Áp dụng cho việc sử dụng ReactJS, có hiểu biết về truy xuất dư
                liệu, API, làm việc với backend.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="contact">
        <h2>Liên hệ</h2>
        <div className="detail">
          <a>
            <i class="ri-phone-fill">
              <span>0523874839</span>
            </i>
          </a>
          <a>
            <i class="ri-mail-line">
              <span>trannguyenhao123@gmail.com</span>
            </i>
          </a>
          <a href="https://github.com/NguyenHaoTran">
            <i class="ri-github-fill">
              <span>https://github.com/NguyenHaoTran</span>
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
