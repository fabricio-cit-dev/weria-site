import React from "react";
import img01 from "../../assets/img/images/ai-nuvem-com-cabeca-de-robo.jpg";
import { Link } from "react-router-dom";
import ms from "../../assets/img/parceiros-redimensionadas/logo-ms.png";
import weria from "../../assets/img/parceiros-redimensionadas/Weria PNG 05 Artboard 6 Copy 3.png";
import newin from "../../assets/img/parceiros-redimensionadas/Logo_Newin_Preto (1).png";
import ares from "../../assets/img/parceiros-redimensionadas/ares_logo_preto-removebg-preview.png";
import bz from "../../assets/img/parceiros-redimensionadas/Bz__01_Artboard_498-removebg-preview.png";
import liferay from "../../assets/img/parceiros-redimensionadas/liferay-logo.png";
const image = [];
const partners_list = [
  { src: ms, title: "ms" },
  { src: weria, title: "weria" },
  { src: newin, title: "newin" },
  { src: ares, title: "ares" },
  { src: bz, title: "bztech" },
  { src: liferay, title: "liferay" },
];

const handleScrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
const WhoWeAre = (props) => {
  return (
    <section id="about" className="about-area-pt-130-pb-130">
      <div className="container">
        <div className="sub-title-div">
          <span className="sub-title-about">Quem nós somos?</span>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img">
              <img
                src={img01}
                alt="logo-whoweare"
                style={{ borderRadius: "50px" }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <div className="section-title mb-30">
                <h2 className="title">
                  Construindo um <span>futuro</span> automatizado
                </h2>
              </div>
              <p style={{ color: "white", textAlign: "justify" }}>
                Na nossa empresa, estamos comprometidos em ajudar nossos
                clientes a construir um futuro melhor usando a tecnologia de IA
                e IOT. Acreditamos que a IA tem o potencial de revolucionar
                muitas indústrias, desde a saúde até a manufatura, e estamos
                trabalhando para criar soluções que possam ajudar nossos
                clientes a aproveitar ao máximo essa tecnologia. Acreditamos que
                a IA pode ser uma força para o bem, mas é importante garantir
                que a tecnologia seja desenvolvida e usada de maneira ética e
                responsável. Estamos comprometidos em trabalhar com nossos
                clientes, parceiros e outras partes interessadas para garantir
                que a IA e IOT seja, desenvolvidas de forma responsável e que
                seja usada para melhorar a vida das pessoas.
              </p>
            </div>
          </div>
        </div>
        <div className="partner-area-about">
          <div className="partners-whoweare">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center mb-10">
                  <span className="sub-title-partners">Nossos Parceiros</span>
                </div>
              </div>
            </div>
            <div class="slider-partners">
              <div class="slide-track">
                <div class="slide-partners">
                  <img
                    src={newin}
                    // height="130"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={ares}
                    // height="90%"
                    width="60%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={liferay}
                    // height="130"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={bz}
                    // height="90"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={newin}
                    // height="130"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={ares}
                    // height="90%"
                    width="60%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={liferay}
                    // height="130"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={bz}
                    // height="90"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={newin}
                    // height="130"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={ares}
                    // height="90%"
                    width="60%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={liferay}
                    // height="130"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={bz}
                    // height="90"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={newin}
                    // height="130"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={ares}
                    // height="90%"
                    width="60%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={liferay}
                    // height="130"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={bz}
                    // height="90"
                    width="100%"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
