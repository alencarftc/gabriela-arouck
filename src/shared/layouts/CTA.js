import React from "react";
import GabiPhoto from "@images/layouts/cta/gabi.png";
import Button from "@components/Button";
import style from "@sass/layouts/cta.module.scss";
import { HashLink as Link } from "react-router-hash-link";

const CTA = () => (
  <section className={`${style.cta} container`}>
    <div className="row">
      <div className="info col-md-7">
        <h1 class="title">Olá, me chamo Gabriela, sou UX/UI designer.</h1>
        <p class="paragraph">
          Mestre em Design, tenho interesses relacionados à pesquisas aplicadas
          a UX/UI, Design Centrado no Usuário, Design de Interação, Usabilidade.
        </p>
        <Link to="/#contact-section">
          <Button primary>Vamos conversar</Button>
        </Link>
      </div>
      <div className="offset-1 offset-md-0 col-10 col-md-5">
        <img src={GabiPhoto} alt="Gabriela Arouck" />
      </div>
    </div>
  </section>
);

export default CTA;
