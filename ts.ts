* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  color: ${theme.textPrime};
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  line-height: 1;
}

ul {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  border: 0;
  background: transparent;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
}

button:focus {
  outline: none;
}

input,
select,
textarea {
  border: 0;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
}