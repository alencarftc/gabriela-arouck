import React from "react";
import style from "@sass/layouts/project-cta.module.scss";

const ProjectCTA = ({ title, subtitle, paragraph, color, image, alt = "" }) => (
  <section className={`${style.projectCTA} ${style[color]} container`}>
    <div className="row">
      <div className="info col-md-4">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
        <p class="paragraph">{paragraph}</p>
      </div>
      <div className="offset-1 offset-md-0 col-10 col-md-8">
        <img src={image} alt={alt} />
      </div>
    </div>
  </section>
);

export default ProjectCTA;
