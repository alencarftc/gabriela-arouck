import React from "react";
import Button from "@components/Button";
import style from "@sass/layouts/contact.module.scss";
import LinkedInIcon from "@images/shared/icons/social-media/linkedin.png";
import DribbleIcon from "@images/shared/icons/social-media/dribble.png";
import BehanceIcon from "@images/shared/icons/social-media/behance.png";

const Contact = () => {
  const API_WPP = {
    url: "https://api.whatsapp.com/send",
    phone: "+5592981923893",
    message: "Olá%2C+quero+conhecer+o+seu+trabalho.",
  };
  const URLs = {
    linkedin: "https://linkedin.com/in/gabrielaarouck",
    dribble: "https://dribbble.com/gabrielaarouck",
    behance: "https://behance.net/gabrielaarouck",
  };
  const { url, phone, message } = API_WPP;

  return (
    <section id="contact-section" className={`${style.contact} container`}>
      <div className={`${style.info} row`}>
        <div className="col-12">
          <h2>
            O que posso fazer por você? <br /> Entre em contato.
          </h2>
          <a
            target="_blank"
            rel="noreferrer"
            href={`${url}?phone=${phone}&text=${message}`}
          >
            <Button primary>Vamos conversar</Button>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h4>CONTATO</h4>
          <ul className="row">
            <li>
              <a target="blank" href={URLs.linkedin}>
                <img src={LinkedInIcon} alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a target="blank" href={URLs.dribble}>
                <img src={DribbleIcon} alt="Dribble" />
              </a>
            </li>
            <li>
              <a target="blank" href={URLs.behance}>
                <img src={BehanceIcon} alt="Behance" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
