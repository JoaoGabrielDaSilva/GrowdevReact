import React, { useState, useEffect } from 'react';

import axiosRoutes from '../../Services/AxiosRoutes'

import { useNavigate } from 'react-router-dom'
 
import { Container, FormContainer, RegisterForm } from './styles';
import FormGroup from '../../Components/Form-Group'


function Cadastro() {

  const navigate = useNavigate()

  const inputData = {
    name: null,
    login: null,
    password: null
  }

  const [data, setData] = useState(inputData)
  const [loading, setLoading] = useState(false)

  async function register() {

    const request = await axiosRoutes.postUsers('/users', data)

    if (request) {
      setLoading(true)
      setTimeout(() => navigate('/login'), 500)
    } else {
      console.log('inválido')
    }
  }

  return (
    <Container>
        <FormContainer>
            {loading && <div>carregando...</div>}
            {!loading && <><RegisterForm>
                <FormGroup data={data} setValueFunction={setData} name="name" label="Nome" type="text" placeholder="Nome" id="register-name" /> 
                <FormGroup data={data} setValueFunction={setData} name="login" label="Login" type="text" placeholder="Login" id="register-login" /> 
                <FormGroup data={data} setValueFunction={setData} name="password" label="Senha" type="password" placeholder="Senha" id="register-password" />
                <button type="button" onClick={register}>Cadastrar</button>
            </RegisterForm>
            <a href="/login">Já tem uma conta? Entre</a></>}
        </FormContainer>
    </Container>
  )
}

export default Cadastro;