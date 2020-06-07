import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2';

import stayHome from '../../assets/stayhome.png'

import api from '../../services/api';
import './style.css';

export default function RegisterMed() {

  const [nameMed, setName] = useState('');
  const [datanascMed, setDate] = useState('');
  const [rgMed, setRg] = useState('');
  const [crmMed, setCrm] = useState('');
  const [telMed, setTel] = useState('');
  const [especialidade, setEspec] = useState('');
  const [cityMed, setCity] = useState('');
  const [ufMed, setUf] = useState('');

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      nameMed,
      datanascMed,
      rgMed,
      crmMed,
      telMed,
      especialidade,
      cityMed,
      ufMed
    };

    if (data.nameMed === '' || data.datanascMed === '' || data.rgMed === '' || data.crmMed === '' || data.telMed === '' || data.especialidade === '' || data.cityMed === '' || data.ufMed === '') {
      Swal.fire('Hey', 'Por favor, preencha todos os dados', 'error');
    } else {
      try {
        const response = await api.post('medicals', data);

        Swal.fire({
          title: 'Bem, vindo(a)',
          text: `Seu ID para acesso é: ${response.data.idMed}`,
          icon: 'success',
        });
      } catch (error) {

        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Estamos com alguns problemas, tente novamente mais tarde.',
        });


        // console.log(data);

      }
    }
  }

  return (
    <div class="register-container">
      <div class="content">

        <form onSubmit={handleRegister}>

          <input
            placeholder="Nome"
            value={nameMed}
            onChange={e => setName(e.target.value)}
          />

          <InputMask
            class="input"
            mask="99/99/9999"
            placeholder="Data de nascimento"
            value={datanascMed}
            onChange={e => setDate(e.target.value)}
          />

          <InputMask
            class="input"
            mask="99.999.999-9"
            placeholder="RG"
            value={rgMed}
            onChange={e => setRg(e.target.value)}
          />

          <input
            placeholder="CRM"
            value={crmMed}
            onChange={e => setCrm(e.target.value)}
          />

          <InputMask
            class="input"
            mask="(99) 9 9999 9999"
            placeholder="Telefone"
            value={telMed}
            onChange={e => setTel(e.target.value)}
          />

          <input
            placeholder="Especialidade"
            value={especialidade}
            onChange={e => setEspec(e.target.value)}
          />


          <div class="input-group">
            <input
              placeholder="Cidade"
              style={{ width: 272 }}
              value={cityMed}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={ufMed}
              onChange={e => setUf(e.target.value)}
            />
          </div>
          <button class="button">Cadastrar</button>

        </form>
        <section>
          <img class="stay" src={stayHome} alt="StayHome"></img>
          <h2>Cadastro Médico</h2>
          <p>Cadastre aqui o médico que irá utilizar a plataforma online.</p>


        </section>
      </div>
    </div>
  );
}
