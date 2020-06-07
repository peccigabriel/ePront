import React from 'react';

import Sobre1 from "../../public/img/sobre1.jpg";
import Sobre2 from "../../public/img/sobre2.jpg";

import Produto1 from "../../public/img/produtos1.jpg";
import Produto2 from "../../public/img/produtos2.jpg";
import Produto3 from "../../public/img/produtos3.jpg";

import './home.css'

function Home() {
  return (
    <div>
      <div class="super-infos-bg">
        <div class="super-infos">
          <p>Seg / Sex - 08:00 às 18:00</p>
          <a href="#home">+55 15 99172-8601</a>
          <p>Av. Londres, 460 - Jd Europa - SP</p>
        </div>
      </div>

      <header class="menu-bg">
        <div class="menu">
          <div class="menu-logo">
            <a href="#home">ePront</a>
          </div>
          <nav class="menu-nav">
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#produtos">Produtos</a></li>
              <li><a href="#preco">Preço</a></li>
              <li><a href="#qualidade">Qualidade</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <h1 class="introducao">Novos valores e <br /> Propriedades do CSS</h1>

      <section class="sobre" id="sobre">
        <div class="sobre-info">
          <h1>Sobre</h1>
          <p>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta positivamente a correta
        previsão das condições inegavelmente apropriadas objetivos.</p>
          <p>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta positivamente a correta
        previsão das condições inegavelmente apropriadas objetivos.</p>
        </div>
        <div class="sobre-img">
          <img src={Sobre1} alt="Sobre 1" />
        </div>
        <div class="sobre-img">
          <img src={Sobre2} alt="Sobre 2" />
        </div>
      </section>

      <section class="produtos" id="produtos">
        <h1>Produtos</h1>
        <div class="produtos-container">
          <div class="produtos-item purple">
            <h2>Purple</h2>
            <img src={Produto1} alt="Prod 1" />
          </div>
          <div class="produtos-item pink">
            <h2>Pink</h2>
            <img src={Produto2} alt="Prod 2" />
          </div>
          <div class="produtos-item blue">
            <h2>Blue</h2>
            <img src={Produto3} alt="Prod 3" />
          </div>
        </div>
      </section>

      <section class="preco" id="preco">
        <div class="preco-item">
          <h2>Bronze</h2>
          <span><sup>R$</sup>19</span>
          <ul>
            <li>Planos Ilimitados</li>
            <li>Acesso Restrito</li>
            <li>Conteúdo Secreto</li>
            <li>Suporte 24H</li>
          </ul>
        </div>

        <div class="preco-item">
          <h2>Prata</h2>
          <span><sup>R$</sup>39</span>
          <ul>
            <li>Planos Ilimitados</li>
            <li>Acesso Restrito</li>
            <li>Conteúdo Secreto</li>
            <li>Suporte 24H</li>
            <li>Compra Exclusiva</li>
          </ul>
        </div>

        <div class="preco-item">
          <h2>Ouro</h2>
          <span><sup>R$</sup>79</span>
          <ul>
            <li>Planos Ilimitados</li>
            <li>Acesso Restrito</li>
            <li>Conteúdo Secreto</li>
            <li>Suporte 24H</li>
            <li>Compra Exclusiva</li>
            <li>Download dos Itens</li>
          </ul>
        </div>
      </section>

      <section class="qualidade" id="qualidade">
        <div class="qualidade-item">
          <h2>Inteligente</h2>
          <p>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta positivamente a correta
                      previsão.</p>
        </div>

        <div class="qualidade-item">
          <h2>Compacto</h2>
          <p>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta positivamente a correta
                       previsão das condições inegavelmente</p>
        </div>

        <div class="qualidade-item">
          <h2>Ecônomico</h2>
          <p>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta positivamente a correta
        previsão</p>
        </div>

        <div class="qualidade-item">
          <h2>Transparente</h2>
          <p>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta positivamente a correta
        previsão</p>
        </div>

        <div class="qualidade-item">
          <h2>Opaco</h2>
          <p>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta positivamente a correta
        previsão das condições inegavelmente</p>
        </div>

        <div class="qualidade-item">
          <h2>Sustentável</h2>
          <p>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta positivamente a correta
                        previsão </p>
        </div>
      </section>

      <section class="newsletter">
        <div class="newsletter-info">
          <h2>Newsletter</h2>
          <p>assine e fique por dentro das novidades</p>
        </div>
        <form class="newsletter-form">
          <input type="text" placeholder="Seu e-mail" />
          <button type="submit">Assinar</button>
        </form>
      </section>

    </div>
  );
}

export default Home;