import React from 'react';

import { Container } from './styles';

function FormGroup( { label, type, placeholder, id } ) {
  return (
      <Container>
          <label for={id} >{label}</label>
          <input id={id} type={type} placeholder={placeholder}/>
      </Container>
  );
}

export default FormGroup;