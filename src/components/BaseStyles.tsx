import { Global, css } from "@emotion/react";

const BaseStyles = () => {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          width: 100%;
          height: 100vh;
        }

        /* Remove blue highlight on touch elements on mobile chrome */
        input,
        textarea,
        button,
        select,
        div,
        a {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }

        body {
          font-family: "Raleway", sans-serif;
        }

        a {
          text-decoration: none;
        }
      `}
    />
  );
};

export default BaseStyles;
