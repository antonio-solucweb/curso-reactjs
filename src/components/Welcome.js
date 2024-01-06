import React, { useEffect, useState } from 'react';

export default function Welcome(props) {

  const [contador, setContador] = useState(0);
  const [semaforo, setSemaforo] = useState(false); 
  const {name, age} = props;

  useEffect(()=> {
    console.log(semaforo);
  }, [semaforo])
  

  const contadorsum = ()=> {
    setContador(contador +5);
    setSemaforo(!semaforo);
  };
  const contadorestr = ()=> {
    setContador(contador -5);
  };
  const contadoreset = ()=> {
    setContador(0);
    setSemaforo(false);
  };
  
  return (
    <div>
      <h1>Bienvenidos!</h1>
      <p>Mi nombre es {name}, y tengo {age} años.</p>
      <p>Contador: {contador} </p>
      <p>El semáforo está en: {semaforo ? "red" : "green" }</p>
      <button type='submit' onClick={contadorsum} className='btn-search' >SUMAR</button>
      <button type='submit' onClick={contadorestr} className='btn-search' >RESTAR</button>
      <button type='submit' onClick={contadoreset} className='btn-search' >REESTABLECER</button>
    </div>
  )
}
