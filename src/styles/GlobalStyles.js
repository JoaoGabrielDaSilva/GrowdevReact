import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, input, button {
        background: none;
        outline: 0;
        background: none;
        border: none;
        font-family: Arial, sans-serif;
        font-weight: 600;
    }

    html, body, #root {
        height: 100%;
    }
`