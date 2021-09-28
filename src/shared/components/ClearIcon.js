import React from 'react'
import style from '@sass/components/clear-icon.module.scss';

const ClearIcon = ({ onClick }) => (
  <div className={style.root} onClick={onClick}></div>
)

export default ClearIcon;
