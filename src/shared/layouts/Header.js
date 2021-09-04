import React, { useState } from 'react';
import Logo from '@components/Logo';
import style from '@sass/layouts/header.module.scss';
import useDocumentScrollThrottled from '@utils/hooks/useDocumentScrollThrottled';

const Header = () => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const MINIMUM_SCROLL = 88;
  const TIMEOUT_DELAY = 150;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    console.log(callbackData)
    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled && currentScrollTop > 150);
    }, TIMEOUT_DELAY);
  });

  return (
    <header className={`${style.header} ${shouldHideHeader ? 'navDown' : 'navUp'}`}>
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-5">
            <Logo />
          </div>
          <div className="col-2 d-md-none">
            x
          </div>
          <div className="col-12 col-md-7 items-row">
            <ul className="row">
              <div className=""></div>
              <li className="col-12 offset-6 col-md-2"><a href="#projects-section">Projetos</a></li>
              <li className="col-12 col-md-2"><a href="#about-section">Sobre</a></li>
              <li className="col-12 col-md-2"><a href="#contact-section">Contato</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
