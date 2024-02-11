import * as React from "react";
import { css } from "@emotion/react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { SEO } from "../components/Seo";

const ResumePage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div
        css={css`
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
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
    </Layout>
  );
};

export default ResumePage;

export const Head: HeadFC = () => <SEO />;
