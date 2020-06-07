import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { useHistory } from 'react-router-dom';

import logoDoctor from '../../../assets/MedicalGroup.png';


import './diagnosticPat.scss';

import api from '../../../services/api';

function DiagnosticPat() {

  const namePat = localStorage.getItem('namePat');
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
      setPatient(response.data);
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
    history.push('/logonpat');
  }

  return (
    <>
    <Header
      data={namePat}
      logout={handleLogoutMed}
    />
      <div className="diagnosticpat">
        <div className="diagnosticpat__container">
          <section className="diagnosticpat__content">
            <ul className="diagnosticpat__ul">
              {patients.map(patient => (
                <li key={patient.idPat}>
                  <h2 className="diagnosticpat__ul--title">
                    Dados do paciente
                  </h2>
                  <strong>Nome:</strong>
                  <p>{patient.namePat}</p>
                  <strong>Idade:</strong>
                  <p>{patient.datanascPat}</p>
                  <strong>Cidade:</strong>
                  <p>{patient.cityPat} - {patient.ufPat}</p>
                </li>
              ))}
            </ul>

            <ul className="diagnosticpat__ul">
              {incidents.map(incident => (
                <li key={incident.id}>
                  <h2 className="diagnosticpat__ul--title">
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
          <div className="diagnosticpat__img">
            <img src={logoDoctor} alt="logoDoctor" width="550px" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default DiagnosticPat;