import React from 'react'
import style from '@sass/components/hamburger-icon.module.scss';

const HamburgerIcon = ({ onClick }) => (
  <div className={style.root} onClick={onClick}></div>
)

export default HamburgerIcon
