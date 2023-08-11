import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

	background: linear-gradient(to right, #a1ffce, #faffd1);
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
	margin: 0;
	color: #000;
  }

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}
`;