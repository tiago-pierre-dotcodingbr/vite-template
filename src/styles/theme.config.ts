import { createGlobalStyle } from 'styled-components';

export const theme = {
    colors: {
        backgroundColor: '#242424',
        white: '#FFF',
        purple: '#747bff',
    },
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :root {
        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
        color: ${({ theme }) => theme.colors.white};
        font-size: 16px;
        font-weight: 400;
        background-color: ${({ theme }) => theme.colors.backgroundColor};
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        scroll-behavior: smooth;
    }
`;
