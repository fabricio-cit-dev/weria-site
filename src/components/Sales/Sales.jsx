import React, { useState, useEffect } from "react";
import styles from "./styles";
import icon01 from "../../assets/img/icon/icon_choose.png";
import icon02 from "../../assets/img/icon/icon_valores.png";
import icon03 from "../../assets/img/icon/icon_move.png";
import SlickSliderSales from "./SlickSliderSales";
import SliderSales from "./slider-sales"
import SalesItem from "./slider-sales";

const Sales = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Por que Nos Escolher?",
      description: `Existem muitas empresas de IA no mercado, mas nossa empresa se destaca por ter uma equipe de especialistas altamente qualificados em diversas áreas, incluindo inteligência artificial, aprendizado de máquina, análise de dados e engenharia de software.`,
    },
    {
      src: icon02,
      alt: "",
      link: "/",
      title: "Nossos Valores",
      description: `Em nossa empresa, acreditamos que nossos valores são o que nos guiam em nosso trabalho e nos ajudam a alcançar nossos objetivos. Nós nos esforçamos para sempre manter esses valores em mente em tudo o que fazemos.`,
    },
    {
      src: icon03,
      alt: "",
      link: "/",
      title: "O Que Nos Move?",
      description: `É a possibilidade de ajudar nossos clientes a alcançar seus objetivos de negócios de maneira mais eficaz e eficiente. Estamos entusiasmados com o potencial da inteligência artificial para transformar a maneira como as empresas operam e estamos comprometidos em ajudar nossos clientes a aproveitar ao máximo essa tecnologia.`,
    },
  ];

  return (
    <section id="portfolio" className="chart-area chart-bg ">
      <div className="sub-title-div">
        <br />
        <br />
        <br />
        <br />
        <br />
        <span className="sub-title-about">Nossos Diferenciais</span>
      </div>
      <div className="projetos" style={{display: "flex", flexDirection: ""}}>
        <SlickSliderSales settings={slickSettings}>
          {slider_items.map((item, index) => (
            <div key={index}>
              <SalesItem item={item} />
            </div>
          ))}
        </SlickSliderSales>

        {/* <div className="texto-projetos">
          <td>
            {currentItem.description} <tr> {currentItem.changingText} </tr>{" "}
            <br />
            {currentItem.endtext}
          </td>
        </div> */}

        {/* <div style={styles.containerImage}>
          <div class="slide">
            <img
              src={currentItem.image}
              alt="ms-project"
              style={{ marginLeft: "0" }}
            />
          </div>
        </div> */}
      </div>

      {/* <div style={styles.containerButtons}>
        <button style={styles.button} onClick={showPreviousItem}>
          <img src={IconNest} alt="ms-project" style={styles.imageLeftSide} />
        </button>
        <hr style={styles.separator} />
        <button style={styles.button} onClick={showNextItem}>
          <img src={IconNest} alt="ms-project" style={styles.imageRightSide} />
        </button>
      </div> */}
    </section>
  );
};

export default Sales;
