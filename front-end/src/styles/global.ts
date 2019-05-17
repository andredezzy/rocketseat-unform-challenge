import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');

    body {
        margin: 0;
        padding: 0;
        font-family: Poppins, sans-serif;
        background-color: #F2F2F2;
    }

    *:focus {
        outline: 0;
    }
`;
