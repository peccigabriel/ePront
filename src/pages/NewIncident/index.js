import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Medicals from '../../assets/Medicals.png'
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';


import './style.scss';
import '../../global.css';
import api from '../../services/api';

function NewIncident() {

  const [descIncident, setdescIncident] = useState('');
  const [dataIncident, setdataIncident] = useState('');
  const [diagIncident, setdiagIncident] = useState('');


  const history = useHistory();

  const nameMed = localStorage.getItem('nameMed');

  //dado utilizadas no post do incidente
  const namePatient = localStorage.getItem('namePat');
  const idMedical = localStorage.getItem('idMed');

  async function handleIncident(e) {
    e.preventDefault();

    const data = {
      descIncident,
      dataIncident,
      diagIncident,
      namePatient,
    }

    if (data.descIncident === '' || data.dataIncident === '' || data.diagIncident === '') {
      Swal.fire('Hey', 'Por favor, preencha todos os dados', 'error');

    } else {
      try {
        await api.post('incidents', data, {
          headers: {
            Authorization: idMedical,
          }
        });

        Swal.fire({
          title: 'Beleza!',
          text: 'Dados cadastrados com sucesso.',
          icon: 'success',
        });

        history.push('/listincident');

      } catch (error) {
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
            text: 'Problemas para inserir os dados.',
          });
        }
      }
    }

  }

  function handleLogoutMed() {
    localStorage.clear();
    history.push('/logonmed');
  }

  function cancelPost(e) {
    e.preventDefault()
    history.push('/listincident');
  }

  return (
    <>

      <Header
        data={nameMed}
        logout={handleLogoutMed}
      />

      <div className="incidents">
        <section className="incidents__content">

          <form 
            onSubmit={handleIncident}>
            <h2>Paciente, {namePatient}</h2>

            <input
              placeholder="Sintomas apresentados"
              className="input incidents__input"
              value={descIncident}
              onChange={e => setdescIncident(e.target.value)}
            />

            <InputMask
              mask="99/99/9999"
              placeholder="Data do atendimento"
              className="input incidents__input"
              value={dataIncident}
              onChange={e => setdataIncident(e.target.value)}
            />

            <textarea
              placeholder="Diagnostico do paciente"
              className="input incidents__input incidents__textarea"
              value={diagIncident}
              onChange={e => setdiagIncident(e.target.value)}
            />

            <div className="incidents__inputgroup">
              <button
                style={{ width: 185 }}
                className="button">
                Cadastrar
            </button>

              <button
                style={{ width: 185 }}
                className="button cancel"
                onClick={cancelPost}>
                Cancelar
            </button>

            </div>
          </form>
          <div className="incidents__img" >
            <img
              src={Medicals}
              width="480px" 
              alt="Grupo de medicos"/>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default NewIncident;








