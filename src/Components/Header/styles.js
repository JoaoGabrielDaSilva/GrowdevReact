import styled from 'styled-components';

export const Container = styled.div`
    height: 10%;
    background: #222;
    color: #fff;

    display: flex;
`;

export const Logo = styled.div`
    height: 100%;
    width: 10%;
    border: 1px solid #fff;
`
export const Wrapper = styled.div`
    width: 90%;
    height: 100%;
    padding: 10px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    ul {
        list-style: none;
    }
`