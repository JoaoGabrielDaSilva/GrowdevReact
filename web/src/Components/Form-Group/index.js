import React, { useState } from 'react';

import { Container } from './styles';

function FormGroup( { label, type, placeholder, id, setValueFunction, name, data } ) {


  return (
      <Container>
          <label htmlFor={id} >{label}</label>
          <input id={id} type={type} placeholder={placeholder} onChange={(event) => setValueFunction({...data, [name]: event.target.value})}/>
      </Container>
  );
}

export default FormGroup;