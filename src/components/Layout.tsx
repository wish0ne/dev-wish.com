import * as React from "react";
import { Global, css } from "@emotion/react";
import { Link, useStaticQuery, graphql } from "gatsby";
import GlobalStyles from "./GlobalStyles";

const pageStyles = {
  color: "#232129",
  padding: 64,
  height: "100%",
  // fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div style={pageStyles}>
      <GlobalStyles />
      <div>
        <header
          css={css`
            display: flex;
            justify-content: space-between;
            flex: 1;
          `}
        >
          <div
            css={css`
              font-weight: bold;
            `}
          >
            {data.site.siteMetadata.title}
          </div>
          <nav
            css={css`
              justify-content: space-between;
            `}
          >
            <Link
              to="/"
              css={css`
                font-weight: bold;
              `}
            >
              Home
            </Link>
            <button
              css={css`
                font-weight: bold;
              `}
            >
              Post
            </button>
            <Link
              to="/resume"
              css={css`
                font-weight: bold;
              `}
            >
              Resume
            </Link>
          </nav>
        </header>
      </div>
      <main>{children}</main>
      <footer>{/* Add your footer content here */}</footer>
    </div>
  );
};

export default Layout;
