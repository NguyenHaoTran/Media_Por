import React from 'react'
import "./kinhnghiem.scss"
import { useEffect } from "react";
// scrollreveal
import ScrollReveal from "scrollreveal";

const KinhNghiem = () => {
   // ScrollReveal
  useEffect(() => {
    const sr = ScrollReveal({
      reset: true, // Đảm bảo animation sẽ luôn thực hiện khi cuộn lại
      origin: "top",
      distance: "50px",
      duration: "700",
      delay: 200,
    });
    sr.reveal(`h2`, { origin: "top", interval: 200 });
    sr.reveal(`.kinhNghiem_content`, { origin: "top", interval: 200 });
    sr.reveal(`.kinhNghiem_name`, { origin: "top", interval: 200 });
  }, []);

  return (
    <div className='kinhnghiem_container'>
      <div className='contents'>
        <h2>Kinh nghiệm làm việc</h2>
        <div className="kinhNghiem_content">
          <div className="kinhNghiem_contents">
            <div className="kinhNghiem_name">
              <div className="kinhNghiem_img">
                <img src="https://raw.githubusercontent.com/NguyenHaoTran/IMGS_Dev_Por/refs/heads/main/farmtech.jpg" alt="" />
              </div>
              <div className="kinhNghiem_company">
                <h4>Farm Tech</h4>
                <p>Co-founder, linh kiện máy tính</p>
                <p>2022 - 2023</p>
              </div>
            </div>
            <div className="kinhNghiem_name">
              <div className="kinhNghiem_img">
                <img src="https://raw.githubusercontent.com/NguyenHaoTran/IMGS_Dev_Por/refs/heads/main/LH.webp" alt="" />
              </div>
              <div className="kinhNghiem_company">
                <h4>Long Hoàng Group</h4>
                <p>Thiết kế, lập trình LandingPage nội bộ</p>
                <p>7-2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KinhNghiem