import { createGlobalStyle } from "styled-components";

export const palette = ["#FACCAA", "#A1BCE7", "#9ED9B3", "#DAB3B4", "#AAA2C9"];

export const GlobalStyle = createGlobalStyle`
   :root{
      --white-bg: #F2F3F7;
      --white: #FFFFFF;
      --dark: #2F283B;
      --thumb-bg: #d2d2e0;
   }

   ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
   }

   ::-webkit-scrollbar-thumb {
      background: var(--thumb-bg);
      border-radius: var(--radius);
   }

   ::-webkit-scrollbar-thumb:active,
   ::-webkit-scrollbar-thumb:hover {
      background: var(--dark);
   }

   ::-webkit-scrollbar-track {
      background: #80808014;
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
      background-color: var(--white-bg);
      font-family: 'Lato', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
   }

   h1,h2,h3,h4,h5,h6{
      /* color: #6F718A; */
      font-family: 'Syne', sans-serif;
   }

   .pattern{
      position: absolute;
      bottom: 5rem;
      right: -6rem;
   }
   .pattern-2{
      position: absolute;
      top: -5rem;
      left: -5rem;
   }
  
`;
