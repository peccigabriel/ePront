import React, { useState, useRef } from 'react';
import { FiChevronDown } from "react-icons/fi";

import './style.scss';

import '../../global.css';

const Accordion = (props) => {

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <strong>Paciente: </strong>
        <p className="accordion__title">
          {props.title}
        </p>
        <FiChevronDown className={`${setRotate}`} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content">
        <div className="accordion__text">
          <strong>Data de nascimento: </strong>
          <span>{props.dataNasc}</span>

          <br />

          <strong>Histórico de saúde: </strong>
          <span>{props.history}</span>



        </div>
      </div>
    </div>
  );
}

export default Accordion;