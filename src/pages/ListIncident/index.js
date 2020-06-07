import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Accordion from '../../components/Accordion';

import './style.scss';
import api from '../../services/api';

function ListIncident() {

  const history = useHistory();

  const [incidents, setIncidents] = useState([]);

  const nameMed = localStorage.getItem('nameMed');
  const crmMed = localStorage.getItem('crmMed');

  //get dos paciente vinculados com o médico que logar.
  useEffect(() => {
    api.get('/profilemed', {
      headers: {
        Authorization: crmMed,
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [crmMed]);


  function handleLogoutMed() {
    localStorage.clear();
    history.push('/logonmed');
  }

  async function getnamePat(namePat) {
    try {
      await api.get('/patientspat', {
        headers: {
          Authorization: namePat,
        }
      });

      localStorage.setItem('namePat', namePat);
      history.push('/newincident');

    } catch (error) {
      console.log(error);
    }
  }

  async function getDiagnostic(namePat) {
    try {
      await api.get('/profilepat', {
        headers: {
          Authorization: namePat,
        }
      });

      localStorage.setItem('namePat', namePat);
      history.push('/diagnosticmed');

    } catch (error) {

      if (error.response.status === 401) {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Ainda não existe diagnostico cadastrado para esse paciente.',
          footer: '<a href>Deseja cadastrar diagnostico?</a>'
        });
      }

      console.log(error);
    }
  }

  return (
    <>
      <Header
        data={nameMed}
        logout={handleLogoutMed}
      />
      <div className="incidents">
        <ul className="incidents__ul">
          {incidents.map(incident => (
            <li key={incident.id}>
              <Accordion
                title={incident.namePat}
                dataNasc={incident.datanascPat}
                history={incident.historyPat}
              />

              <div className="incidents__button-group">
                <button
                  style={{ width: 280 }}
                  className="button"
                  onClick={() => getnamePat(incident.namePat)}>
                  Adicionar Infos
              </button>

                <button
                  style={{ width: 185 }}
                  className="button-sucess"
                  onClick={() => getDiagnostic(incident.namePat)}>
                  Visualizar Infos
                </button>
              </div>

            </li>

          ))}
        </ul>
      </div>
      <Footer/>
    </>

  );
}

export default ListIncident;