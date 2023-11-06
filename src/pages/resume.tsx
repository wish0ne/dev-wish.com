import * as React from "react";
import { css } from "@emotion/react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const ResumePage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1> 준비중 페이지입니다.</h1>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  );
};

export default ResumePage;

export const Head: HeadFC = () => <title>dev-wish.com</title>;
