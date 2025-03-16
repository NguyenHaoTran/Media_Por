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
          <p>
            testtesttesttesttesttesttesttesttesttesttesttesttest testtest
            testtesttesttest test testtesttest testtest test test test
            testtesttesttest test test test test test test testtesttesttesttest
            test test test test
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
