import * as React from "react";
import { Global, css } from "@emotion/react";
import { Link, type HeadFC, type PageProps, graphql } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

type DataProps = {
  allMdx: {
    nodes: any[];
  };
};

const HomePage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout>
      <div
        css={css`
          display: grid;
          gap: 4rem;
        `}
      >
        <div
          css={css`
            display: grid;
            grid-template-columns: 1fr 1fr;
            @media (max-width: 1200px) {
              grid-template-columns: 1fr;
            }
            gap: 4rem;
          `}
        >
          <div
            css={css`
              /* From https://css.glass */
              background: rgba(255, 255, 255, 0.3);
              border-radius: 20px;
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(5px);
              -webkit-backdrop-filter: blur(5px);
              border: 1px solid rgba(255, 255, 255, 0.3);
              padding: 2rem;
            `}
          >
            <h1
              css={css`
                font-size: 1.6rem;
                font-weight: 600;
                font-style: oblique;
                margin-bottom: 2rem;
              `}
            >
              All Posts
            </h1>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                gap: 4rem;
              `}
            >
              {data.allMdx.nodes.map((node) => {
                const image = getImage(node.frontmatter.thumbnail_image);
                return (
                  <Link
                    to={`/posts/${node.frontmatter.slug}`}
                    key={node.id}
                    css={css`
                      display: flex;
                      @media (max-width: 550px) {
                        flex-direction: column;
                      }
                      gap: 2rem;
                    `}
                  >
                    {image && (
                      <GatsbyImage
                        image={image}
                        alt={node.frontmatter.thumbnail_image_alt}
                        css={css`
                          border-radius: 10px;
                          flex: 1;
                          box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
                            rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
                        `}
                      />
                    )}
                    <div
                      css={css`
                        flex: 1;
                      `}
                    >
                      <p
                        css={css`
                          color: gray;
                          font-size: 1.2rem;
                          margin: 0;
                        `}
                      >
                        {node.frontmatter.date}
                      </p>

                      <div
                        css={css`
                          display: flex;
                          gap: 1rem;
                          margin-top: 1rem;
                        `}
                      >
                        {node.frontmatter.tags
                          ?.split(" ")
                          .map((tag: string) => (
                            <span
                              key={tag}
                              css={css`
                                font-size: 1.4rem;
                                color: #7c93c3;
                                background-color: #eef5ff;
                                padding: 0.4rem;
                                border-radius: 10px;
                              `}
                            >
                              {tag}
                            </span>
                          ))}
                      </div>

                      <h2
                        css={css`
                          color: black;
                        `}
                      >
                        {node.frontmatter.title}
                      </h2>
                      <p
                        css={css`
                          font-size: "1.8rem";
                          color: black;
                        `}
                      >
                        {node.frontmatter.subtitle}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div
            css={css`
              background: rgba(255, 255, 255, 0.3);
              border-radius: 20px;
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(5px);
              -webkit-backdrop-filter: blur(5px);
              border: 1px solid rgba(255, 255, 255, 0.3);
              padding: 2rem;
              text-align: center;
            `}
          >
            <h1
              css={css`
                font-size: 3rem;
                color: lightgray;
              `}
            >
              𖦹 ´ ᯅ ` 𖦹
            </h1>
            <h1
              css={css`
                font-size: 1.8rem;
                color: gray;
                font-weight: 600;
              `}
            >
              준비중입니다.
            </h1>
          </div>
        </div>
        <div
          css={css`
            /* From https://css.glass */
            background: rgba(255, 255, 255, 0.3);
            border-radius: 20px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            padding: 2rem;
            text-align: center;
          `}
        >
          <h1
            css={css`
              font-size: 3rem;
              color: lightgray;
            `}
          >
            𖦹 ´ ᯅ ` 𖦹
          </h1>
          <h1
            css={css`
              font-size: 1.8rem;
              color: gray;
              font-weight: 600;
            `}
          >
            준비중입니다.
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          title
          subtitle
          tags
          slug
          thumbnail_image_alt
          thumbnail_image {
            childImageSharp {
              gatsbyImageData(width: 300)
            }
          }
        }
        id
        excerpt
      }
    }
  }
`;

export default HomePage;

export const Head: HeadFC = () => <title>dev-wish.com</title>;
