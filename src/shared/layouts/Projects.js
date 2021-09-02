import React from 'react'
import Project, { THEMES } from '@components/Project';
import style from '@sass/layouts/projects.module.scss'
import MockupGaguez from '@images/layouts/projects/mockup-gaguez.png';
import MockupReszon1 from '@images/layouts/projects/mockup-reszon1.png';
import MockupReszon2 from '@images/layouts/projects/mockup-reszon2.png';
import MockupGaguezMob from '@images/layouts/projects/mockup-gaguez-mobile.png';
import MockupReszonMob from '@images/layouts/projects/mockup-reszon-mobile.png';

const Projects = () => {
  const projects = {
    gaguez: {
      theme: THEMES.theme1,
      title: "Gaguez",
      subtitle: "Grupo de Apoio ao Gago",
      description: "Desenvolvimento de aplicativo mobile para apoio Sócio-informacional à pessoas com gagueira.",
      mobileImage: MockupGaguezMob,
      children: (<img src={MockupGaguez} alt="Imagens do aplicativo Gaguez" />),
    },
    reszon: {
      theme: THEMES.theme2,
      title: "Reszon",
      subtitle: "Landing Page",
      description: "Projeto de criação de Landing Page para a Startup Reszon - Marketing de Varejo Digital.",
      mobileImage: MockupReszonMob,
      children: (
        // <div className={style.row}>
          <img src={MockupReszon1} alt="Parte 1 da landing page do Reszon" />
          // <img src={MockupReszon2} alt="Parte 2 da landing page do Reszon" />
        // </div>
      )
    }
  }

  const CustomProject = ({ project: { theme, children, description, title, subtitle, mobileImage } }) => (
    <Project
      description={description}
      theme={theme}
      title={title}
      subtitle={subtitle}
      mobileImage={mobileImage}
    >
      {children}
    </Project>
  )

  return (
    <section id="projects-section" className={style.projects}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>PROJETOS</h3>
          </div>
        </div>
        <ul className="row">
          <li className={`col-12 ${style.item}`}>
            <CustomProject project={projects.gaguez} />
          </li>
          <li className={`col-12 ${style.item}`}>
            <CustomProject project={projects.reszon} />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Projects
