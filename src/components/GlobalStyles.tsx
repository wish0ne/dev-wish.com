import * as React from "react";
import { Global, css } from "@emotion/react";
import { Link, type HeadFC, type PageProps } from "gatsby";

const globalStyles = css`
  html {
    font-size: 62.5%;
    background-color: #fbfbfb;
    height: 100%;
    background: rgb(247, 247, 252);
  }

  button {
    background: none;
    border: none;
  }

  a {
    text-decoration: none;
    font-size: 1.4rem;
  }

  body {
    font-family: "Pretendard Variable", -apple-system, Roboto, sans-serif, serif;
    margin: 10rem 4rem;
    height: 100%;
  }
`;

const GlobalStyles = () => {
  return <Global styles={globalStyles} />;
};

export default GlobalStyles;
