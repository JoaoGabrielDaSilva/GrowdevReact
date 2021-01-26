import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled.div`
    min-width: 360px;
    min-height: 360px;

    max-height: 370px;
    max-width: 560px;

    height: 60%;
    width: 70%;
    border: 1px solid #222;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a {
        text-decoration: none;
        color: #ff7e14;
        margin-bottom: 5px;
    }

    a:hover {
        text-decoration: underline;
    }
`;

export const RegisterForm = styled.form`
    width: 80%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;

    button {
        border: 1px solid #ff7e14;
        border-radius: 10px;
        padding: 5px;
        margin: 10px;
    }

    button:hover {
        background: #ff7e14;
        color: #fff;

        cursor: pointer;
        transition: 0.3s ease-in-out;
    }
`;
