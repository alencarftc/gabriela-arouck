import React from 'react'
import CTA from '@layouts/CTA';
import Projects from '@layouts/Projects';
import About from '@layouts/About';
import Skills from '@layouts/Skills';
import Contact from '@layouts/Contact';
import style from '@sass/pages/homepage.module.scss'

const HomePage = () => (
  <>
    <div className={style.portfolio}>
      <CTA />
      <Projects />
      <About />
    </div>
    <Skills />
    <Contact />
  </>
)

export default HomePage
