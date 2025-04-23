
'use client'
import React, { useState } from 'react';
import './page.css';

const OperadorClienteServidor = () => {
  const [num1, setNum1] = useState<number | ''>('');
  const [num2, setNum2] = useState<number | ''>('');
  const [operador, setOperador] = useState<string>('+');
  const [resultado, setResultado] = useState<string>('');
  const [error, setError] = useState<string>('');

  const calcular = async () => {
    setResultado("")
    if (num1 === '' || num2 === '') {
      setResultado('Por favor, introduce ambos números.');
      return;
    }

    try {
      const res = await fetch(`http://localhost:3001/api/calcular?num1=${num1}&num2=${num2}&operador=${encodeURIComponent(operador)}`);
      const data = await res.json();
      setResultado(`Resultado: ${data.resultado}`);
    } catch (error) {
      setResultado('No jalo shavo :p');
    }
  };

  return (
    <div className="contenedor">
      <h1>Operador Cliente-Servidor</h1>
      <div className="operacion">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
          placeholder="Número 1"
        />
        <select value={operador} onChange={(e) => setOperador(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
          placeholder="Número 2"
        />
      </div>
      <button onClick={calcular}>Calcular</button>
      <div className="resultado">{resultado}</div>
    </div>
  );
};

export default OperadorClienteServidor;



//IDENTIFICACION MENSAJE
//CAROLINA ORTEGA A01282386

//ACTIVIDAD CLEINTE SERVIDOR CON FRONT END Y BACK END
//MARZO 13-> ACTIVIDAD EN CLASE 
