import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LocaleContext, { ToggleLocale } from "../LocaleContext";

interface IEnglishNavProps {
  toggleLocale: ToggleLocale
}

const EnglishNav = ({ toggleLocale }: IEnglishNavProps) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <button onClick={toggleLocale}>Español</button>
    </nav>
  );
};

interface ISpanishNavProps {
  toggleLocale: ToggleLocale
}

const SpanishNav = ({ toggleLocale }: ISpanishNavProps) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Sobre Nosotros</Link>
        </li>
      </ul>
      <button onClick={toggleLocale}>English</button>
    </nav>
  );
};

const Nav = () => {
  const { locale, toggleLocale } = useContext(LocaleContext);

  return (
    <>
      {locale === "en" && toggleLocale && <EnglishNav toggleLocale={toggleLocale} />}
      {locale === "es" && toggleLocale && <SpanishNav toggleLocale={toggleLocale} />}
    </>
  );
};

export default Nav;