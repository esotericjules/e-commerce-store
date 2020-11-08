import { createGlobalStyle} from "styled-components";

export const GlobalStyle =  createGlobalStyle`
    body {
        font-family: 'Opens Sans Condensed';
        padding: 20px 60px;
        
        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }
    
    a {
        text-decoration: none;
        color: #000000;
    }
    
    * {
        box-sizing: border-box;
    }
`;