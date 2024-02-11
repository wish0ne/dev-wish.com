import * as React from "react";
import { css } from "@emotion/react";
import {
  graphql,
  Link,
  type HeadFC,
  type PageProps,
  useStaticQuery,
} from "gatsby";
import Layout from "../../components/Layout";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import Tags from "../../components/Tags";
import { SEO } from "../../components/Seo";

type DataProps = {
  allMdx: {
    nodes: any[];
  };
};

const PostPage = ({ data }: PageProps<DataProps>) => {
  const [selectedTag, setSelectedTag] = React.useState<string>("전체");
  const [posts, setPosts] = React.useState<DataProps["allMdx"]["nodes"]>(
    data.allMdx.nodes
  );

  React.useEffect(() => {
    if (selectedTag === "전체") {
      setPosts(data.allMdx.nodes);
    } else {
      const newPosts: DataProps["allMdx"]["nodes"] = [];
      data.allMdx.nodes.forEach((post) => {
        if (post.frontmatter.tags.includes(selectedTag)) {
          newPosts.push(post);
        }
      });
      setPosts(newPosts);
    }
  }, [selectedTag]);

  return (
    <Layout>
      <div
        css={css`
          display: flex;
          flex: 1;
        `}
      >
        <div
          css={css`
            width: 70%;
            @media (max-width: 768px) {
              width: 100%;
            }
            margin: 0 auto;
          `}
        >
          <Tags selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
          <div
            css={css`
              display: grid;
              @media (max-width: 550px) {
                grid-template-columns: 1fr;
              }
              @media (min-width: 551px) and (max-width: 1400px) {
                grid-template-columns: 1fr 1fr;
              }
              grid-template-columns: 1fr 1fr 1fr;
              gap: 4rem;
            `}
          >
            {posts.map((node) => {
              const image = getImage(node.frontmatter.thumbnail_image);
              return (
                <div
                  css={css`
                    /* From https://css.glass */
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 20px;
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    padding: 2rem;
                  `}
                >
                  <Link
                    to={`/posts/${node.frontmatter.slug}`}
                    key={node.id}
                    css={css`
                      display: flex;
                      flex-direction: column;
                      flex-direction @media (max-width: 550px) {
                        flex-direction: column;
                      }
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
                          aspect-ratio: 2 / 1;
                        `}
                      />
                    )}
                    <h2
                      css={css`
                        color: black;
                        font-size: 1.8rem;
                        margin-bottom: 0;
                      `}
                    >
                      {node.frontmatter.title}
                    </h2>
                    <p
                      css={css`
                        font-size: 1.4rem;
                        color: black;
                      `}
                    >
                      {node.frontmatter.subtitle}
                    </p>
                    <div
                      css={css`
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        @media (min-width: 1400px) and (max-width: 1650px) {
                          flex-direction: column;
                          align-items: start;
                          gap: 1rem;
                        }
                        @media (min-width: 769px) and (max-width: 1100px) {
                          flex-direction: column;
                          align-items: start;
                          gap: 1rem;
                        }
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
                        `}
                      >
                        {node.frontmatter.tags.map((tag: string) => (
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
                            {`#${tag}`}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
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

export default PostPage;

export const Head = () => <SEO />;
