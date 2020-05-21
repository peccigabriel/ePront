import React from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';

import Medicals from '../../assets/femaledoctor.png'

import './style.css';

export default function RegisterPat() {
  return (
    <div class="register-container">
      <div class="content">
        <section>
          <img class="medicals" src={Medicals} alt="Medicals"></img>
          <h2>Cadastro Paciente</h2>
          <p>Cadastre aqui o paciente que irá utilizar a plataforma online.</p>

          <Link class="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para o logon
          </Link>
        </section>
        <form>
          <input placeholder="Nome"></input>
          <InputMask class="input" mask="99/99/9999" placeholder="Data de nascimento" />
          <input placeholder="RG"></input>
          <input placeholder="Telefone"></input>
          <input placeholder="Histórico de saúde"></input>
          <div class="input-group">
            <input placeholder="Cidade" style={{ width: 272 }} ></input>
            <input placeholder="UF" style={{ width: 80 }} ></input>
          </div>
          <input placeholder="CRM do médico responsável"></input>
          <button class="button">Cadastrar</button>

        </form>
      </div>
    </div>
  );
}
