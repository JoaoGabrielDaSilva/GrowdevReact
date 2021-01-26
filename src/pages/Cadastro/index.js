import React from 'react';

import { Container, FormContainer, RegisterForm } from './styles';
import FormGroup from '../../Components/Form-Group'


function Cadastro() {
  return (
    <Container>
        <FormContainer>
            <RegisterForm>
                <FormGroup label="Nome" type="text" placeholder="Nome" id="register-name" /> 
                <FormGroup label="Login" type="text" placeholder="Login" id="register-login" /> 
                <FormGroup label="Senha" type="password" placeholder="Senha" id="register-password" />
                <button type="button">Cadastrar</button>
            </RegisterForm>
            <a href="#">Já tem uma conta? Entre</a>
        </FormContainer>
    </Container>
  )
}

export default Cadastro;