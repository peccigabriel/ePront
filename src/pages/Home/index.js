import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../components/Footer';
import { FiLogIn } from 'react-icons/fi'
import Swal from 'sweetalert2';

import Sobre1 from "../../public/img/medicals.png";

import './home.css'

function Home() {

  const nameAdmin = localStorage.getItem('adminName');
  const history = useHistory();

  function handleLogon(e) {
    e.preventDefault();

    Swal.fire('Hey', 'Por favor, realize o login para continuar!', 'error');

    history.push('/logonadmin');
  }

  return (
    <div>
      <div class="super-infos-bg">
        <div class="super-infos">
          <p>TCC: FATEC São Roque</p>
          <div class="login">
            <FiLogIn className="icon" size={16} color="#fff" />
            <Link to="/logonadmin" className="login-text">
              {nameAdmin ? `Bem-vindo(a) ${nameAdmin}` : "Sign in"}
            </Link>
          </div>
        </div>
      </div>

      <header class="menu-bg">
        <div class="menu">
          <div class="menu-logo">
            <a href="#home">ePront</a>
          </div>
          <nav class="menu-nav">
            <ul>
              {nameAdmin
                ?
                <ul>
                  <li><Link to="/registermed" target="_blank">Registrar Médico</Link></li>
                  <li><Link to="/registerpat" target="_blank">Registrar Paciente</Link></li>
                </ul>
                :
                <ul>
                  <li><Link onClick={handleLogon}>Registrar Médico</Link></li>
                  <li><Link onClick={handleLogon}>Registrar Paciente</Link></li>
                </ul>
              }

            </ul>
          </nav>
        </div>
      </header>

      <h1 class="introducao">ePront <br /> Prontuário Médico</h1>

      <section class="sobre" id="sobre">
        <div class="sobre-info">
          <h1>Epront?</h1>
          <p>O ePront é uma ferramenta desenvolvida em formato de Aplicativo, para auxiliar médicos e pacientes. A ferramenta funciona como um prontuário eletrônico, onde o paciente ou seu responsável consegue ter acesso a dados que correspondem diretamente a saúde do paciente.</p>
          <p>Com o ePront diminuímos o tempo na rotatividade do processo interno do hospital e garantimos um histórico completo e seguro dos dados e diagnostico do paciente.</p>
        </div>
        <div class="sobre-img">
          <img src={Sobre1} alt="Sobre 1" />
        </div>
      </section>

      <section class="qualidade" id="qualidade">
        <div class="qualidade-item">
          <h2>Agilidade</h2>
          <p>Sem tempo de espera por informações médicas durante processos médicos</p>
        </div>

        <div class="qualidade-item">
          <h2>Organização</h2>
          <p>Melhoramos a organização dos dados e armazenamento dos diagnosticos médicos e dados dos pacientes</p>
        </div>

        <div class="qualidade-item">
          <h2>Rotatividade</h2>
          <p>Diminuição do tempo de espera em toda rotatividade (processo) dentro do hospital</p>
        </div>

        <div class="qualidade-item">
          <h2>Segurança</h2>
          <p>Armazenamento seguro dos dados, criptografia em todas as requisições, mantendo os dados seguros</p>
        </div>

        <div class="qualidade-item">
          <h2>Eficácia</h2>
          <p>O uso da plataforma ePront, traz difersos beneficios ao atendimento, melhorando significativamente toda operação hospitalar</p>
        </div>

        <div class="qualidade-item">
          <h2>Inclusão</h2>
          <p>Sabemos que o grupo da terceira idade, utiliza muito os serviços de saúde, então porque não incluí-los
          digitalmente
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;