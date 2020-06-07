import React from 'react';
import { FiPower } from "react-icons/fi";

import './style.scss';

const Header = ({data, logout}) => {
  return(
      <header className="header">
        <h2 className="header__logo">ePront</h2>
        <span className="header__welcome">Bem vindo(a), {data}</span>

        <button className="header__logout" onClick={logout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
  );
}

export default Header;