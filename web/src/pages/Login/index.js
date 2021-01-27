import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import AxiosRoutes from '../../Services/AxiosRoutes'

import { Container, FormContainer, LoginForm } from './styles';

function Login() {

    const user = {
        name: null,
        login: null,
        password: null
    }

    const inputCheck = {
        login: null,
        password: null
    }

    const navigate = useNavigate()

    const [data, setData] = useState(user)
    const [isValid, setIsValid] = useState(false)
    const [input, setInput] = useState(inputCheck)

    
    async function login() {
        const request = await AxiosRoutes.checkLogin('/users', data, setIsValid, navigate)


    }

    function onChange(event) {
        setData({ ...data, login: event.target.value })
        setInput({...input, ['login' || 'password']: event.target.value })
    }

    return (
        <Container>
            <FormContainer>
                {isValid && <div>Carregando</div>}
                {!isValid && <>
                    <LoginForm>
                        <div className="form-group" >
                            <label htmlFor="login-login" >Login</label>
                            <input className={input.login ? '' : 'error'} onChange={(event) => onChange(event)} id="login-login" type="text" placeholder="Login" />
                        </div>
                        <div className="form-group" >
                            <label htmlFor="login-password" >Senha</label>
                            <input className={input.password ? '' : 'error'} onChange={(event) => onChange(event)} id="login-password" type="password" placeholder="Senha" />
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