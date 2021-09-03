import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #F1ECC3;
        --blueTeal: #C9D8B6;
        --greenMint: #57837B;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem; 
    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        background: var(--greenMint);

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white)
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;

        }

        p {
            font-size: 1rem;
            color: var(--white);
        }
    }
`