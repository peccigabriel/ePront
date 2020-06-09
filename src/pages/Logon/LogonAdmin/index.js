import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';
//import Swal from 'sweetalert2';

import './style.scss';

import logoDoctor from '../../../assets/medicalBlue.png';

export default function Logon() {

  const [id, setId] = useState('');
  const history = useHistory();

  function handleAdmin(e) {
    e.preventDefault();
    
    localStorage.setItem('adminName', id);

    history.push('/');
  }

  return (
    <div class="loginadmin-container">
      <section className="form">
        <h1>ePront ;)</h1>
        <form onSubmit={handleAdmin}>
          <h2>Faça seu logon</h2>
          <input
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder="ID" />          
            
            <input
            type="password"
            placeholder="Senha" />
          <button class="button" type="submit">Entrar</button>
          <Link class="back-link" >
            { /* utilizando icon importado [react-icons] feather icons */}
            <FiLogIn size={16} color="#e02041" />
                        Esqueci minha senha :(
          </Link>
        </form>
      </section>
      <img src={logoDoctor} alt="logoDoctor" width="500px"></img>
    </div>

  );

}