import React from 'react';
import { Global, css, useTheme } from '@emotion/react';

function Globalstyles() {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Spoqa Han Sans Neo', 'sans-serif';
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        html {
          font-family: 'Spoqa Han Sans Neo', 'sans-serif';
          font-size: 16px;
        }

        body {
          color: ${theme.color.textPrime};
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
          font-size: inherit;
          cursor: pointer;

          &:focus {
            outline: none;
            box-shadow: none;
          }
        }

        input,
        select,
        textarea {
          border: 0;
          background: transparent;
          color: inherit;
          font-size: inherit;

          &:focus {
            outline: none;
            box-shadow: none;
          }
        }
      `}
    />
  );
}

export default Globalstyles;
