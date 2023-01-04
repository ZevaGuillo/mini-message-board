import { createGlobalStyle } from "styled-components";

export const palette = ["#FACCAA", "#A1BCE7", "#9ED9B3", "#DAB3B4", "#AAA2C9"];

export const GlobalStyle = createGlobalStyle`
   :root{
      --white-bg: #F2F3F7;
      --white: #FFFFFF;
      --dark: #00132B;
   }
    
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      line-height: normal;
   }  
      
   body {
      min-height: 100vh;
      overflow-x: hidden;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      font-family: 'Outfit', sans-serif;
      font-size: 14px;
      line-height: 17.64px;
      background-color: var(--dark);
      font-family: 'Lato', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
   }

   h1,h2,h3,h4,h5,h6{
      /* color: #6F718A; */
      font-family: 'Syne', sans-serif;
   }

  
`;
