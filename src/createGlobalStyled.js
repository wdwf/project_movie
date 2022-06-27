import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'LeagueSpartanRegular', sans-serif;
        list-style: none;
    }

    html, body, #root {
        min-height: 100vh;
        background-color: #181829;
        color: #fff;
    }
`;