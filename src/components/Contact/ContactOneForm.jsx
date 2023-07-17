import React from "react";
import ContactImage from "../../assets/img/images/chat-image-removebg.png";
import NameIcon from "../../assets/img/icon/icons8-nome-24.png";
import EmailIcon from "../../assets/img/icon/icons8-nova-mensagem-24.png";

const ContactOneForm = () => {
  return (
    <div className="contact-form-wrap">
      <div className="leftDiv">
        <div className="DivImageContact">
          <img className="ImageContact" src={ContactImage} />
        </div>
        <div className="step-map">
          <div className="step">
            <span className="step-number">1</span>
            <span className="step-title">
              Receba uma proposta personalizada rapidamente
            </span>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <span className="step-title">
              Converse conosco para discutir suas necessidades
            </span>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <span className="step-title">
              Iniciaremos a construção do seu projeto juntos
            </span>
          </div>
        </div>
      </div>
      <form action="#" className="DivForms">
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          Fale Conosco
        </h2>
        <div className="row">
          <div className="col-md-6">
            <div className="form-grp">
              <div className="input-with-icon">
                <img
                  src={NameIcon}
                  alt="Ícone de nome"
                  className="input-icon"
                />
                <input
                  type="text"
                  id="nome"
                  placeholder="Digite seu nome"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <div className="input-with-icon">
                <img
                  src={EmailIcon}
                  alt="Ícone de e-mail"
                  className="input-icon"
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Digite seu email"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-grp">
          {/* <label htmlFor="categoria" className="forms-title">
            Categoria
          </label> */}
          <select id="categoria" required>
            <option value="">Selecione uma categoria</option>
            <option value="categoria1">Categoria 1</option>
            <option value="categoria2">Categoria 2</option>
            <option value="categoria3">Categoria 3</option>
          </select>
        </div>
        <div className="form-grp">
          {/* <label htmlFor="mensagem" className="forms-title">
            Seu projeto
          </label> */}
          <textarea
            id="mensagem"
            name="mensagem"
            placeholder="Nos fale sobre seu projeto!"
          ></textarea>
        </div>
        <div className="submit-btn text-center">
          <button type="submit" className="btn">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactOneForm;
