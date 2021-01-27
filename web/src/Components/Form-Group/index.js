import React, { useState } from 'react';

import { Container } from './styles';

function FormGroup( { label, type, placeholder, id, setValueFunction, name, data } ) {

  const [isValid, setIsValid] = useState(true)

  function onChange(event) {
    setValueFunction({...data, [name]: event.target.value})
    event.target.value ? setIsValid(true) : setIsValid(false)
  }

  console.log(isValid)

  return (
      <Container>
          <label htmlFor={id} >{label}</label>
          <input className={isValid ? '' : 'error'} id={id} type={type} placeholder={placeholder} onChange={(event) => onChange(event)}/>
      </Container>
  );
}

export default FormGroup;