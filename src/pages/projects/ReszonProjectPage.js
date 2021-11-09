import React, { useEffect } from "react";
import Contact from "@layouts/Contact";
import style from "@sass/pages/homepage.module.scss";
import ProjectCTA from "@layouts/ProjectCTA";
import Skill from "@components/Skill";
import ReszonPhoto from "@images/layouts/cta/reszon.png";
import DivisorReszonPhoto from "@images/shared/divisor-reszon.png";
import TargetIcon from "@images/shared/icons/target.svg";
import LightBulbIcon from "@images/shared/icons/light-bulb.svg";
import ExclamationIcon from "@images/shared/icons/exclamation.svg";
import Project, { THEMES } from "@components/Project";
import MockupGaguez from "@images/layouts/projects/mockup-gaguez.png";
import MockupGaguezMob from "@images/layouts/projects/mockup-gaguez-mobile.png";
import PerspectiveReszonPhoto from "@images/shared/pespective-reszon.png";
import { useLocation } from "react-router-dom";

const GaguezProjectPage = () => {
  const meanings = [
    {
      icon: ExclamationIcon,
      title: "O Problema",
      description:
        "Não há um local de divulgação para o produto que será lançado assim como também não há para um meio de compra do pacote de pré-lançamento do produto.",
    },
    {
      icon: TargetIcon,
      title: "Objetivo",
      description:
        "Divulgar o produto que será lançado, com o objetivo de converter os visitantes em possíveis clientes.",
    },
    {
      icon: LightBulbIcon,
      title: "Solução",
      description:
        "Criar Landing Page para melhorar os resultados da empresa, tanto na geração de leads quanto para agregar valor ao produto, conhecer seu público, aumentar o tráfego dos seus canais e também possibilitar a inscrição dos clientes em uma pré-venda.",
    },
  ];

  const { pathname } = useLocation();

  useEffect(() => window.scrollTo(0, 0), [pathname]);

  return (
    <div>
      <div className={style.portfolio}>
        <ProjectCTA
          color="green"
          image={ReszonPhoto}
          alt="Reszon"
          paragraph="Projeto de criação de Landing Page para a Startup Reszon - Marketing de Varejo Digital."
          title="Reszon"
          subtitle="Landing Page"
        />
      </div>
      <section style={{ background: "rgb(29 112 183 / 8%)" }}>
        <div className="container">
          <div className="row" style={{ textAlign: "center" }}>
            {meanings.map((meaning) => (
              <div className="col-12 col-sm-6" style={{ margin: "0 auto" }}>
                <Skill
                  zoom={true}
                  title={meaning.title}
                  description={meaning.description}
                  icon={meaning.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <img src={DivisorReszonPhoto} alt="Telas do Reszon" />
      <img src={PerspectiveReszonPhoto} alt="Mockup do Reszon" />
      <section id="projects-section" className={style.projects}>
        <div className="container">
          <div className="row">
            <div className={`col-12 ${style.item}`}>
              <Project
                theme={THEMES.theme1}
                title="Gaguez"
                path="#"
                subtitle="Grupo de Apoio ao Gago"
                description="Desenvolvimento de aplicativo mobile para apoio Sócio-informacional à pessoas com gagueira."
                mobileImage={MockupGaguezMob}
                children={
                  <img src={MockupGaguez} alt="Imagens do aplicativo Gaguez" />
                }
              />
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default GaguezProjectPage;
