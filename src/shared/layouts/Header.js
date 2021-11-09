import React, { useState } from "react";
import Logo from "@components/Logo";
import style from "@sass/layouts/header.module.scss";
import useDocumentScrollThrottled from "@utils/hooks/useDocumentScrollThrottled";
import { HashLink as Link } from "react-router-hash-link";
import ClearIcon from "@components/ClearIcon";
import HamburgerIcon from "@components/HamburgerIcon";

const Header = () => {
  const isMobile = window.innerWidth < 768;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const MINIMUM_SCROLL = 88;
  const TIMEOUT_DELAY = 150;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setTimeout(() => {
      const tempShouldHideHeader =
        isScrolledDown && isMinimumScrolled && currentScrollTop > 150;
      setShouldHideHeader(tempShouldHideHeader);

      if (tempShouldHideHeader) {
        setIsMenuOpen(false);
      }
    }, TIMEOUT_DELAY);
  });

  return (
    <header
      className={`${style.header} ${shouldHideHeader ? "navDown" : "navUp"}`}
    >
      <div className="container">
        <div className={`row ${style.row}`}>
          <div className="col-10 col-md-4">
            <Logo />
          </div>
          <div className={`${style.iconCol} col-2 d-md-none`}>
            <div className="icon">
              {!isMenuOpen ? (
                <HamburgerIcon onClick={(e) => setIsMenuOpen(true)} />
              ) : (
                <ClearIcon onClick={(e) => setIsMenuOpen(false)} />
              )}
            </div>
          </div>
          {(!isMobile || (isMobile && isMenuOpen)) && (
            <div className={`col-12 col-md-8`}>
              <ul className="row">
                <li className="col-12 offset-xl-6 offset-md-3 col-md-3 col-xl-2">
                  <Link to="/#projects-section">Projetos</Link>
                </li>
                <li className="col-12 col-md-3 col-xl-2">
                  <Link to="/#about-section">Sobre</Link>
                </li>
                <li className="col-12 col-md-3 col-xl-2">
                  <Link to="/#contact-section">Contato</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
