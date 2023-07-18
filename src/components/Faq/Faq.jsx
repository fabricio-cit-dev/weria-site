import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { handleClickScroll } from "../../lib/helpers";
import icon01 from "../../assets/img/icon/icon_choose.png";
import icon02 from "../../assets/img/icon/icon_valores.png";
import icon03 from "../../assets/img/icon/icon_move.png";
import imgLife from "../../assets/img/images/maximize-your-liferay-investment.png";
import LogoLife from "../../assets/img/parceiros-redimensionadas/liferay-logo.png";
import Parceria from "../../assets/img/icon/garantia.png";
import Parceria1 from "../../assets/img/icon/partnership-1.png";
import Parceria2 from "../../assets/img/icon/partnership-2.png";

const Sales = () => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { hash } = useLocation();
  const isActiveLink = (id) => {
    return id === hash ? "active" : "";
  };

  return (
    <section id="portfolio" className="faq-area">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={Parceria1} className="SeloPartners" />
        </div>
        <div className="time-div">
          <div
            style={{
              display: "flex",
              flex: 0.5,
              padding: "1rem",
              height: "60vh",
            }}
          >
            <img className="imgLife" src={imgLife} />
          </div>
          <div
            style={{
              display: "flex",
              flex: 0.5,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <img className="imgLogoLife" src={LogoLife} />
            <p
              style={{
                textAlign: "justify",
                color: "white",
                fontSize: "19px",
                fontWeight: 500,
              }}
            >
              A plataforma completa para soluções customizadas. Crie
              experiências digitais personalizadas sem abrir mão da velocidade,
              flexibilidade ou eficiência.
            </p>
            <Link
              to="/#contactform"
              className="section-link"
              onClick={() => handleScrollToSection("contactform")}
            >
              <button type="submit" className="btn">
                Solicite uma Demonstracao
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;
