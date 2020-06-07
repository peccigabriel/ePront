import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import api from '../../../services/api';
import './style.css';

import logoDoctor from '../../../assets/doctor.png';

export default function Logon() {


  const [id, setId] = useState('');
  const history = useHistory();

  async function recoveryPass(e) {
    e.preventDefault();

      const inputValue = '';

      const { value: celPhone } = await Swal.fire({
        title: 'Sem problemas! </br> Digite seu número de celular :)',
        input: 'text',
        inputValue: inputValue,
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'Você precisa digitar seu número de celular!'
          }
        }
      })
      
      if (celPhone) {
        Swal.fire('Beleza!', `Seu ID foi enviado para: ${celPhone}`, 'success');
      }
  }

  async function handleLogon(e) {
    e.preventDefault();

    if (id === '') {

      Swal.fire('Hey', 'Por favor, insira seu ID para realizar o login', 'error');

    } else {
      try {

        const response = await api.post('sessionpat', { id });

        localStorage.setItem('idPat',  id );
        localStorage.setItem('namePat', response.data.namePat);
        localStorage.setItem('crm_medical', response.data.crm_medical)

        history.push('/diagnosticpat');

      } catch (error) {

        if (error.message === "Network Error") {
          Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Estamos com alguns problemas, tente novamente mais tarde.',
          });

        } else if (error.response.status === 400) {
          Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Nenhum paciente encontrado com esse ID.',
          });
        }
      }
    }
  }

  return (
    <div class="login-container">
      <img src={logoDoctor} alt="logoDoctor" width="600px"></img>
      <section className="form">
        <h1>ePront ;)</h1>
        <form onSubmit={handleLogon}>
          <h2>Faça seu logon</h2>
          <input
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder="Sua ID" />
          <button class="button" type="submit">Entrar</button>
          <Link class="back-link" onClick={recoveryPass}>
            { /* utilizando icon importado [react-icons] feather icons */}
            <FiLogIn size={16} color="#e02041" />
                        Esqueci meu ID :(
          </Link>
        </form>
      </section>
    </div>

  );

}