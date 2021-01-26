import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { Container, FormContainer, LoginForm } from './styles';

function Login() {

    const user = {
        name: null,
        login: null,
        password: null
    }

    const [data, setData] = useState(user)
    const [isValid, setIsValid] = useState(false)
    const navigate = useNavigate()


    async function login() {
        const url = 'http://localhost:5000/users'
        try {
            const request = await axios.get(url)

            request.data.find(user => {
                if (data.login === user.login && data.password === user.password) {
                    console.log('valido')
                    setIsValid(true)
                    setTimeout(() => navigate('/home'), 500)
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <FormContainer>
                {isValid && <div>Carregando</div>}
                {!isValid && <>
                    <LoginForm>
                        <div className="form-group" >
                            <label htmlFor="login-login" >Login</label>
                            <input onChange={(event) => setData({ ...data, login: event.target.value })} id="login-login" type="text" placeholder="Login" />
                        </div>
                        <div className="form-group" >
                            <label htmlFor="login-password" >Senha</label>
                            <input onChange={(event) => setData({ ...data, password: event.target.value })} id="login-password" type="password" placeholder="Senha" />
                        </div>
                        <button type="button" onClick={login}>Entrar</button>
                    </LoginForm>
                    <a href="/">Não tem uma conta? Cadastre-se</a>
                </>}
            </FormContainer>
        </Container>
    )
}

export default Login;