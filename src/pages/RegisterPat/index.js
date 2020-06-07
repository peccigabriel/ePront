import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2';

import Medicals from '../../assets/femaledoctor.png'

import api from '../../services/api';
import './style.css';

export default function RegisterPat() {

  const [namePat, setName] = useState('');
  const [rgPat, setRg] = useState('');
  const [datanascPat, setData] = useState('');
  const [telPat, setTel] = useState('');
  const [cityPat, setCity] = useState('');
  const [ufPat, setUf] = useState('');
  const [historyPat, setHistory] = useState('');
  const [crm_medical, setCrm] = useState('');

  const data = {
    namePat,
    rgPat,
    datanascPat,
    telPat,
    cityPat,
    ufPat,
    historyPat,
    crm_medical
  }

  async function handleRegister(e) {
    e.preventDefault();

    if (data.namePat === '' || data.rgPat === '' || data.datanascPat === '' || data.telPat === '' || data.cityPat === '' || data.ufPat === '' || data.historyPat === '' || data.crm_medical === '') {

      Swal.fire('Hey', 'Por favor, preencha todos os dados', 'error');

    } else {

      await api.post('patients', data)
        .then(response => {
          if (response.status === 200) {
            Swal.fire({
              title: 'Bem, vindo(a)',
              text: `Seu ID para acesso é: ${response.data.idPat}`,
              icon: 'success',
            });
          }
        }).catch(error => {

          if (error.message === "Network Error") {
            Swal.fire({
              icon: 'warning',
              title: 'Oops...',
              text: 'Estamos com alguns problemas, tente novamente mais tarde.',
            });

          } else if (error.response.status === 401) {
            Swal.fire({
              icon: 'warning',
              title: 'Oops...',
              text: 'Nenhum médico encontrado com esse CRM.',
            });
          }
        });
    }
  }

  return (
    <div class="register-container">
      <div class="content">
        <section>
          <img class="medicals" src={Medicals} alt="Medicals"></img>
          <h2>Cadastro Paciente</h2>
          <p>Cadastre aqui o paciente que irá utilizar a plataforma online.</p>
        </section>

        <form onSubmit={handleRegister}>

          <input
            placeholder="Nome"
            value={namePat}
            onChange={e => setName(e.target.value)}
          />

          <InputMask
            class="input"
            mask="99/99/9999"
            placeholder="Data de nascimento"
            value={datanascPat}
            onChange={e => setData(e.target.value)}
          />

          <InputMask
            class="input"
            mask="99.999.999-9"
            placeholder="RG"
            value={rgPat}
            onChange={e => setRg(e.target.value)}
          />

          <InputMask
            class="input"
            mask="(99) 9 9999 9999"
            placeholder="Telefone"
            value={telPat}
            onChange={e => setTel(e.target.value)}
          />

          <input
            placeholder="Histórico de saúde"
            value={historyPat}
            onChange={e => setHistory(e.target.value)}
          />

          <div class="input-group">
            <input
              placeholder="Cidade"
              style={{ width: 272 }}
              value={cityPat}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={ufPat}
              onChange={e => setUf(e.target.value)}
            />
          </div>
          <input
            placeholder="CRM do médico responsável"
            value={crm_medical}
            onChange={e => setCrm(e.target.value)}
          />
          <button class="button">Cadastrar</button>

        </form>
      </div>
    </div>
  );
}
