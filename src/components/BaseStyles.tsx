import { Global, css } from "@emotion/react";

const BaseStyles = () => {
  return (
    <Global
      styles={(theme) => css`
        p,
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
          background-color: ${theme?.colors?.["grey"]}
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

        .flex {
          display: flex;
          justify-content: space-between;
        }

        .label__input {
          max-width: 240px;
          margin: 8px 0;

          label {
            margin-bottom: 4px;
          }
        }
        
        .label__select {
          margin: 8px 0;
        }

        .column {
          display: flex;
          flex-direction: column;

          label {
            margin-bottom: 4px;
          }
        }

        .table-containe {
          position: relative;
        }

        .table__line {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          height: 56px;
          border-bottom: 1px solid #ebeaea;
        }

        .lines {
          position: relative;
          top: -30px;
          background-color: #fff;
        }

        .button-container {
          position: relative;
          top: -30px;
        }
      `}
    />
  );
};

export default BaseStyles;
