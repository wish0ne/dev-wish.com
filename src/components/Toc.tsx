import * as React from "react";
import { Global, css } from "@emotion/react";
import { Link, useStaticQuery, graphql, HeadFC } from "gatsby";

interface toc {
  title: string;
  url: string;
  items?: toc[];
}

interface Props {
  tableOfContents: {
    items: toc[];
  };
}

const getSubItems = (items: toc[], depth: number) => {
  return items.map((item) => {
    return (
      <div key={item.title}>
        <a href={item.url} key={item.title} css={css``}>
          <h3
            css={css`
              font-size: 1.4rem;
              font-weight: 500;
              color: gray;
              padding-left: ${depth * 2}rem;
            `}
          >
            {item.title}
          </h3>
        </a>
        {item?.items && getSubItems(item?.items, depth + 1)}
      </div>
    );
  });
};

const Toc = ({ tableOfContents }: Props) => {
  return (
    <aside
      css={css`
        font-size: 1.4rem;
        font-weight: 500;
        position: sticky;
        top: 10rem;
        align-self: flex-start;
      `}
    >
      {getSubItems(tableOfContents?.items, 0)}
    </aside>
  );
};

export default Toc;
