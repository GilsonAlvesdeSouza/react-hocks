import {createGlobalStyle} from 'styled-components';
import bgImg from '../../assets/images/bg.jpeg';

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${bgImg}) center no-repeat;
    background-size: cover;
    color: #332c36;
    padding: 0;
    margin: 0;
    font-family: 'New Tegomin', serif;
  }
`;

export default GlobalStyle;