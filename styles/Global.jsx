import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@font-face {
  font-family: 'Pokemon';
  src: url('Hollow.ttf');
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f7f7b9;

}

a {
  color: inherit;
  text-decoration: none;

  &:hover {
    color: darkred;
    font-size: large;
    transition: all 0.5s ease;
  }
}

h1, h2, h3, h4 {
  font-family: 'Pokemon', Arial, Helvetica, sans-serif;
  color: darkblue;
}

* {
  box-sizing: border-box;
}
`