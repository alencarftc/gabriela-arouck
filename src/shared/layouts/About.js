import React from "react";
import Button from "@components/Button";
import style from "@sass/layouts/about.module.scss";
import CurriculumFile from "@files/curriculo_gabriela_arouck.pdf"

const About = () => {
  return (
    <section id="about-section" className={style.about}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>SOBRE</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>
              Mestre em Design pelo Programa de Pós-Graduação em Design -
              Mestrado Profissional pela Universidade Federal do Amazonas - UFAM
              (2019). Formada em Design pela Universidade Federal do Amazonas -
              UFAM (2016). Interesses relacionados à pesquisas aplicadas a
              UX/UI, Design Centrado no Usuário, Design de Interação,
              Usabilidade.
            </p>
            <form method="get" target="_blank" action={CurriculumFile}>
              <Button type="submit" primary>Download Currículo</Button>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h4>EXPERIÊNCIA</h4>
            <p>
              Estágio de UX/UI Designer no Laboratório de Usabilidade da
              Universidade Federal do Amazonas | 2014 - 2015
            </p>
            <p>
              UX/UI Designer, de forma voluntária, na Startup Reszon - Marketing
              de Varejo Inteligente | 2020
            </p>
            <p>
              UX/UI Designer, de forma voluntária, na Startup Reszon - Marketing
              de Varejo Inteligente | 2021 - Atual
            </p>

            <br />
            <br />

            <h4>FORMAÇÃO ACADÊMICA</h4>
            <p>Graduação em Design pela Universidade Federal do Amazonas | 2011- 2016</p>

            <p>Mestrado em Design pelo Programa de Pós-Graduação em Design - Mestrado Profissional pela Universidade Federal do Amazonas - Bolsista (Dedicação Exclusiva) | 2017 - 2019
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h4>CURSOS</h4>
            <p>Enterprise Design Thinking Practioner - IBM | 2020</p>

            <p>UX Metrics - PUNKMETRICS | 2020</p>

            <p>
              UX e Design Thinking: Experiência do usuário nos negócios - UDEMY
              | 2020
            </p>
            <p>Curso Completo de Design de Interface - UDEMY | 2020</p>
            <p>
              Leal UX: SCRUM com ênfase em melhorar a experiência do usuário -
              UDEMY | 2020
            </p>
            <p>UX Research: Um guia prático de trabalho - UDEMY | 2019</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
