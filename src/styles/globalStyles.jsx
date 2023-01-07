import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-family: sans-serif;
    }

    body,#root, html{
        position: relative;
        max-width: 1920px;
        height: 100vh;
        margin: 0 auto;
    }

`