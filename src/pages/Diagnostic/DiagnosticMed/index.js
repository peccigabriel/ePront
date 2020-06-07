import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { useHistory } from 'react-router-dom';

import logoDoctor from '../../../assets/MedicalGroup.png';

import './diagnosticMed.scss';
import '../../../global.css';

import api from '../../../services/api';

function DiagnosticMed() {

  const namePat = localStorage.getItem('namePat');
  const nameMed = localStorage.getItem('nameMed');
  const history = useHistory();

  const [patients, setPatient] = useState([]);
  const [incidents, setIncident] = useState([]);

  //get dos dados do paciente logado.
  useEffect(() => {
    api.get('/patientspat', {
      headers: {
        Authorization: namePat,
      }
    }).then(response => {
      setPatient(
        response.data
      );
    })
  }, [namePat]);

  //get do diagnostico do paciente logado.
  useEffect(() => {
    api.get('profilepat', {
      headers: {
        Authorization: namePat,
      }
    }).then(response => {
      setIncident(response.data);
    })
  }, [namePat]);

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
      <div className="diagnostic">
        <div className="diagnostic__container">
          <section className="diagnostic__content">
            <ul className="diagnostic__ul">
              {patients.map(patient => (
                <li key={patient.idPat}>
                  <h2 className="diagnostic__ul--title">
                    Dados do paciente
                  </h2>
                  <strong>Nome:</strong>
                  <p>{patient.namePat}</p>
                  <strong>Idade:</strong>
                  <p>{patient.datanascPat} Ano(s)</p>
                  <strong>Cidade:</strong>
                  <p>{patient.cityPat} - {patient.ufPat}</p>
                </li>
              ))}
            </ul>

            <ul className="diagnostic__ul">
              {incidents.map(incident => (
                <li key={incident.id}>
                  <h2 className="diagnostic__ul--title">
                    Dados médicos
                  </h2>
                  <strong>Sintomas:</strong>
                  <p>{incident.descIncident}</p>
                  <strong>Data:</strong>
                  <p>{incident.dataIncident}</p>
                  <strong>Diagnostico médico:</strong>
                  <p>{incident.diagIncident}
                  </p>
                </li>
              ))}
            </ul>
          </section>
          <div className="diagnostic__img">
            <img src={logoDoctor} alt="logoDoctor" width="550px" />
          </div>
        </div>
        <div className="diagnostic__button">
          <button
            className="button-sucess"
            onClick={cancelPost}>
            Voltar para lista de pacientes
        </button>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default DiagnosticMed;