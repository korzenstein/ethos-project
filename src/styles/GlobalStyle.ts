import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Cirka';
    src: url('/fonts/Cirka-Bold.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Cirka';
    src: url('/fonts/Cirka-Light.otf') format('opentype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Cirka';
    src: url('/fonts/Cirka-Variable.ttf') format('truetype');
    font-weight: 100 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'OwnersText';
    src: url('/fonts/OwnersText-Light.woff2') format('woff2'),
         url('/fonts/OwnersText-Light.woff') format('woff'),
         url('/fonts/OwnersText-Light.ttf') format('truetype'),
         url('/fonts/OwnersText-Light.eot');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'OwnersText';
    src: url('/fonts/OwnersText-Regular.woff2') format('woff2'),
         url('/fonts/OwnersText-Regular.woff') format('woff'),
         url('/fonts/OwnersText-Regular.ttf') format('truetype'),
         url('/fonts/OwnersText-Regular.eot');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'OwnersText';
    src: url('/fonts/OwnersText-RegularItalic.woff2') format('woff2'),
         url('/fonts/OwnersText-RegularItalic.woff') format('woff'),
         url('/fonts/OwnersText-RegularItalic.ttf') format('truetype'),
         url('/fonts/OwnersText-RegularItalic.eot');
    font-weight: 400;
    font-style: italic;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'OwnersText', sans-serif;
    background: black;
    overflow-x: hidden;
    color: #DAD9D6;
  }
`;

export default GlobalStyle;
