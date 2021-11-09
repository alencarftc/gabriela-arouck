import React, { useEffect } from "react";
import Contact from "@layouts/Contact";
import { useLocation } from "react-router-dom";

const GaguezProjectPage = () => {
  const { pathname } = useLocation();

  useEffect(() => window.scrollTo(0, 0), [pathname]);

  return (
    <>
      <h1>Em breve... :)</h1>
      <Contact />
    </>
  );
};

export default GaguezProjectPage;
