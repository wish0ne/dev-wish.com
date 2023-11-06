import * as React from "react";
import { Global, css } from "@emotion/react";
import { Link, type HeadFC, type PageProps } from "gatsby";

const globalStyles = css`
  html {
    font-size: 62.5%;
  }

  button {
    background: none;
    border: none;
  }

  a {
    text-decoration: none;
    font-size: 1.4rem;
  }

  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  body {
    font-family: "Pretendard-Regular", -apple-system, Roboto, sans-serif, serif;
  }
`;

const GlobalStyles: React.FC<PageProps> = () => {
  return <Global styles={globalStyles} />;
};

export default GlobalStyles;
