import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/weria-logo-branca.png"

const handleScrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
  section.scrollIntoView({ behavior: "smooth" });
  }
};

const Banner = () => {
  return (
    <section id="banner" className="banner-area banner-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
              <h2 className="title">
              Incentivando<br/><span>A criatividade</span><br/>e inovação
              </h2>
              <img src={logo} className="logo-animation"></img>
              <div className="banner-line">
                <div className="line"></div>
                <Link to="/#about" onClick={() => handleScrollToSection("about")} className="read-more">
                  Leia mais
                </Link>
              </div>              
            </div>
          </div>
        </div>        
      </div>
    </section>
  );
};

export default Banner;
