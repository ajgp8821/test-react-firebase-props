import React from 'react'

const Bienvenida = (props) => {

  const {nombre} = props;
  
  return (
    <h2>Bienvenido {nombre}</h2>
  );
}

export default Bienvenida;
