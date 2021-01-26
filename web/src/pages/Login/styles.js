import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled.div`
    border: 1px solid #222;

    min-width: 360px;
    min-height: 360px;

    max-height: 370px;
    max-width: 560px;

    height: 60%;
    width: 70%;
    border: 1px solid #222;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
        text-decoration: none;
        color: #ff7e14;
        margin-bottom: 5px;
    }

    a:hover {
        text-decoration: underline;
    }
`;

export const LoginForm = styled.form`
    width: 80%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;

    .form-group {
        width: 100%;
        height: 25%;

        display: flex;
        flex-direction: column;
    }

    label {
        margin-bottom: 10px;
    }

    input {
        width: 100%;
        height: 40%;
        padding: 10px;

        border: 1px solid #222;
        border-radius: 5px;
    }

    button {
        border: 1px solid #ff7e14;
        border-radius: 10px;
        padding: 5px;
    }

    button:hover {
        background: #ff7e14;
        color: #fff;

        cursor: pointer;
        transition: 0.3s ease-in-out;
    }
`;
