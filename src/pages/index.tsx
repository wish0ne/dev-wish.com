import * as React from "react";
import { Global, css } from "@emotion/react";
import { Link, type HeadFC, type PageProps, graphql } from "gatsby";
import Layout from "../components/Layout";

const HomePage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <h1
        css={css`
          font-size: 2rem;
        `}
      >
        전체 글
      </h1>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/posts/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export default HomePage;

export const Head: HeadFC = () => <title>dev-wish.com</title>;
