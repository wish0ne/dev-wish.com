import * as React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.thumbnail_image);
  return (
    <Layout>
      <div
        css={css`
          width: 70%;
          /* From https://css.glass */
          background: rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 2rem;
          margin: 0 auto;
          padding: 2rem;
          font-size: 1.8rem;
          line-height: 3rem;
          word-wrap: break-word;

          & img {
            width: 60%;
            display: block;
            border-radius: 20px;
            margin: 0 auto;
            box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
          }
        `}
      >
        <h1>{data.mdx.frontmatter.title}</h1>
        <p>{data.mdx.frontmatter.date}</p>
        <GatsbyImage
          css={css``}
          image={image}
          alt={data.mdx.frontmatter.thumbnail_image_alt}
        />

        <p>
          Photo Credit:{" "}
          <a href={data.mdx.frontmatter.thumbnail_image_credit_link}>
            {data.mdx.frontmatter.thumbnail_image_credit_text}
          </a>
        </p>
        {children}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        thumbnail_image_alt
        thumbnail_image_credit_link
        thumbnail_image_credit_text
        thumbnail_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>;

export default BlogPost;
