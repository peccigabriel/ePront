import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import './style.css';

import logoDoctor from '../../assets/doctor.png';

export default function Logon() {
  return (
    <div class="login-container">
      <img src={logoDoctor} alt="logoDoctor" width="600px"></img>
      <section className="form">
        <h1>ePront ;)</h1>
        <form>
          <h2>Faça seu logon</h2>
          <input placeholder="Sua ID" />
          <button class="button" type="submit">Entrar</button>
          <Link class="back-link" to="/registermed">
            { /* utilizando icon importado [react-icons] feather icons */}
            <FiLogIn size={16} color="#e02041" />
                        Esqueci meu ID :(
          </Link>
        </form>
      </section>
    </div>

  );

}