import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`


    *,::before,::after{
        box-sizing:border-box;
    }

    body {
        margin:0;
        font-family: 'Roboto', sans-serif;
        background-color:${({ theme }) => theme.bg}
    }
    h1,h2,h3,h4,h5,h6 {
        margin:0;
    }
    button {
        cursor: pointer;
    }

`;
