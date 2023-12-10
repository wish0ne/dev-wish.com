import * as React from "react";
import { Global, css } from "@emotion/react";
import { Link, useStaticQuery, graphql, HeadFC } from "gatsby";
import GlobalStyles from "./GlobalStyles";

const pageStyles = {
  color: "#232129",
  height: "100%",
  // fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
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
      <div
        css={css`
          scroll-padding-top: 10rem;
        `}
      >
        <header
          css={css`
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-between;
            flex: 1;
            padding: 2rem;
            box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
            background-color: white;
            z-index: 10;
          `}
        >
          <Link
            to="/"
            css={css`
              font-weight: 700;
              font-style: oblique;
              font-size: 2rem;
              color: black;
            `}
          >
            {data.site.siteMetadata.title}
          </Link>
          <nav
            css={css`
              justify-content: space-between;
              display: flex;
              align-items: center;
              gap: 2rem;

              & a {
                color: black;
              }
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
            <Link
              to="/posts"
              css={css`
                font-weight: bold;
              `}
            >
              Post
            </Link>
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
      <main
        css={css`
          margin: 10rem 4rem;
          scroll-padding-top: 10rem;
          scroll-margin-top: 10rem;
        `}
      >
        {children}
      </main>
      <footer>{/* Add your footer content here */}</footer>
    </div>
  );
};

export default Layout;

export const Head: HeadFC = () => (
  <>
    <title>dev-wish.com</title>
  </>
);
