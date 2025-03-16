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
            <img src="public\DaVinci-Resolve-Logo.png" alt="" />
            <div className="text">
              <h3>Davinci resolve</h3>
              <p>
                Mạnh về chỉnh màu và hậu kỳ chuyên sâu, <br />
                tối ưu màu sắc để tạo ra khung hình ấn tượng, truyền tải cảm xúc
                hiệu quả.
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className="item">
            <img src="public\pts_logo.png" alt="" />
            <div className="text">
              <h3>Adobe Photoshop</h3>
              <p>
                Khả năng xử lý hình ảnh linh hoạt, từ chỉnh sửa chi tiết đến
                thiết kế đồ họa, <br />
                giúp biến ý tưởng sáng tạo thành hình ảnh chuyên nghiệp.
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className="item">
            <img src="public\Pr_logo.png" alt="" />
            <div className="text">
              <h3>Adobe Premiere Pro</h3>
              <p>
                Kỹ năng dựng phim chuyên nghiệp, tối ưu quy trình hậu kỳ,
                <br /> đảm bảo nhịp điệu hình ảnh mượt mà và cuốn hút.
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className="item">
            <img src="public\Lr_logp.png" alt="" />
            <div className="text">
              <h3>Adobe Lightroom Classic</h3>
              <p>
                Mắt thẩm mỹ tốt về màu sắc và ánh sáng, tinh chỉnh hình ảnh một
                cách tự nhiên và chuyên nghiệp, <br /> phù hợp với cả phong cách
                nghệ thuật lẫn thương mại.
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className="item">
            <img src="public\Ae_logo.png" alt="" />
            <div className="text">
              <h3>Adobe After Effects</h3>
              <p>
                Thành thạo trong việc tạo hiệu ứng hình ảnh và motion graphics,
                <br />
                giúp nâng tầm câu chuyện bằng những kỹ thuật sáng tạo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
