import React from "react";
import "./skills.scss";
import { useEffect } from "react";
// scrollreveal
import ScrollReveal from "scrollreveal";

const Skills = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      reset: true, // Đảm bảo animation sẽ luôn thực hiện khi cuộn lại
      origin: "top",
      distance: "50px",
      duration: "700",
      delay: 200,
    });
    sr.reveal(`.hocVan`, { origin: "top", interval: 200 });
    sr.reveal(`.item`, { origin: "top", interval: 200 });
  }, []);

  return (
    <div className="skills_container">
      <div className="skills">
        <h2>Kỹ năng</h2>
        <div className="items">
          {/* skill */}
          <div className="item">
            <img src="https://raw.githubusercontent.com/NguyenHaoTran/IMGS_Dev_Por/refs/heads/main/ReactJS.png" alt="" />
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
            <img src="https://raw.githubusercontent.com/NguyenHaoTran/IMGS_Dev_Por/refs/heads/main/HTML.png" alt="" />
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
            <img src="https://raw.githubusercontent.com/NguyenHaoTran/IMGS_Dev_Por/refs/heads/main/SASS.png" alt="" />
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
            <img src="https://raw.githubusercontent.com/NguyenHaoTran/IMGS_Dev_Por/refs/heads/main/Javascript.png" alt="" />
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
            <img src="https://raw.githubusercontent.com/NguyenHaoTran/IMGS_Dev_Por/refs/heads/main/NodeJS.png" alt="" />
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
    </div>
  );
};

export default Skills;
