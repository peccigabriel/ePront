import React from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';

import stayHome from '../../assets/stayhome.png'

import './style.css';

export default function RegisterMed() {
  return (
    <div class="register-container">
      <div class="content">
        <form>
          <input placeholder="Nome"></input>
          <InputMask class="input" mask="99/99/9999" placeholder="Data de nascimento"/>
          <input placeholder="RG"></input>
          <input placeholder="CRM"></input>
          <input placeholder="Telefone"></input>
          <input placeholder="Especialidade"></input>
          <div class="input-group">
            <input placeholder="Cidade" style={{ width: 272 }} ></input>
            <input placeholder="UF" style={{ width: 80 }} ></input>
          </div>
            <button class="button">Cadastrar</button>

        </form>
        <section>
          <img class="stay" src={stayHome} alt="StayHome"></img>
          <h2>Cadastro Médico</h2>
          <p>Cadastre aqui o médico que irá utilizar a plataforma online.</p>

          <Link class="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para o logon
          </Link>
        </section>
      </div>
    </div>
  );
}
