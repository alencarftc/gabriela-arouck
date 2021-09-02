import React from 'react'
import style from '@sass/components/project.module.scss';
import Button from './Button';

export const THEMES = {
  theme1: 'blue',
  theme2: 'green'
}
const Project = ({
  title = '',
  subtitle = '',
  description = '',
  uri = '',
  theme = THEMES.theme1,
  mobileImage = '',
  children = <></>
}) => {
  return (
    <a className={`${style.project} ${style[theme]} container`} href={uri}>
      <article className="row">
        <img className={style.mobileImage} src={mobileImage} alt={title} />
        <div className={`${style.info} col-12 col-md-6`}>
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
          <p>{description}</p>
          <Button size="auto" primary={false}>Ver Projeto</Button>
        </div>
        <div className={`${style.images} col-12 col-md-6`}>{children}</div>
      </article>
    </a>
  )
}

export default Project
