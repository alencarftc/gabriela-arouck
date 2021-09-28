import React from 'react'
import style from '@sass/components/logo.module.scss';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <h1 className={style.logo}>Gabriela Arouck</h1>
    </Link>
  );
}

export default Logo
