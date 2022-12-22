import { ReactNode } from "react";
import { ThemeProvider, Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import { theme } from "./theme";

interface GlobalStyleProps {
  children: ReactNode;
}

/**
 * @typedef Props
 * @prop {ReactNode} children
 */

/**
 * @param {Props} props
 * @return {FunctionComponent}
 */
function GlobalStyle({ children }: GlobalStyleProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${emotionReset}

          body {
            background-color: ${theme.color.background.main};
            color: ${theme.typography.main};
          }

          *,
          *::after,
          *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smooth: antialiased;
          }

          :root {
            --nav-width: 300px;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          button,
          input {
            -moz-appearance: none; /* Firefox */
            -webkit-appearance: none; /* Safari and Chrome */
            appearance: none;
            outline: none;
            border: 0;
            color: inherit;
            background-color: inherit;
          }
          button {
            cursor: pointer;
          }
          input {
            ::-webkit-input-placeholder {
              color: ${theme.typography.light};
            }

            ::-ms-input-placeholder {
              color: ${theme.typography.light};
            }

            ::-moz-input-placeholder {
              color: ${theme.typography.light};
            }
          }

          /* Heading */
          h1 {
            font-size: 22px;
            font-weight: 700;
          }

          h2 {
            font-size: 16px;
            font-weight: 400;
          }

          h3 {
            font-size: 16px;
            font-weight: 700;
          }

          .strong {
            font-size: 48px;
            font-weight: 700;
          }

          /* Ripple */
          .contained-ripple {
            cursor: pointer;
            position: relative;
            overflow: hidden;
          }

          span.ripple {
            background-color: ${theme.action.focus};
            border-radius: 50%;
            position: absolute;
            transform: scale(0);
            animation: ripple 0.3s linear forwards;
          }

          @keyframes ripple {
            to {
              transform: scale(1);
              opacity: 0;
            }
          }
        `}
      />
      {children}
    </ThemeProvider>
  );
}

export default GlobalStyle;
