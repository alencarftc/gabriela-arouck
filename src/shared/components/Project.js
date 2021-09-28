import React from 'react'
import style from '@sass/components/project.module.scss';
import Button from './Button';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";
export const THEMES = {
  theme1: 'blue',
  theme2: 'green'
}
const Project = ({
  title = '',
  subtitle = '',
  description = '',
  path = '',
  theme = THEMES.theme1,
  mobileImage = '',
  children = <></>
}) => {
  return (
    <div className={`${style.project} ${style[theme]} container`}>
      <article className="row">
        <img className={style.mobileImage} src={mobileImage} alt={title} />
        <div className={`${style.info} col-12 col-md-6`}>
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
          <p>{description}</p>
          <Link to={path}>
            <Button size="auto" primary={false}>Ver Projeto</Button>
          </Link>
        </div>
        <div className={`${style.images} col-12 col-md-6`}>{children}</div>
      </article>
    </div>
  )
}

export default Project
