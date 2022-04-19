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
}

a {
  color: inherit;
  text-decoration: none;
}

h1, h2, h3, h4, a {
  font-family: 'Pokemon', Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}
`