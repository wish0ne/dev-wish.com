import * as React from "react";
import { css } from "@emotion/react";
import { graphql, useStaticQuery } from "gatsby";

type DataProps = {
  allMdx: {
    group: { fieldValue: string; totalCount: number }[];
  };
};

type Props = {
  selectedTag: string;
  setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
};

const Tags = ({ selectedTag, setSelectedTag }: Props) => {
  const data: DataProps = useStaticQuery(graphql`
    query {
      allMdx {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
          totalCount
        }
      }
    }
  `);
  return (
    <div
      css={css`
        display: flex;
        column-gap: 2rem;
        row-gap: 0.4rem;
        flex-wrap: wrap;
        margin-bottom: 2rem;
      `}
    >
      <button
        onClick={() => setSelectedTag("전체")}
        css={css`
          font-size: 1.4rem;
          color: ${selectedTag === "전체" ? "#7c93c3" : "gray"};
          background-color: ${selectedTag === "전체" ? "#eef5ff" : "#eeeeee"};
          padding: 1rem;
          border-radius: 10px;
        `}
      >
        {`전체`}
      </button>
      {data.allMdx.group.map(({ fieldValue, totalCount }) => (
        <button
          key={fieldValue}
          css={css`
            font-size: 1.4rem;
            color: ${selectedTag === fieldValue ? "#7c93c3" : "gray"};
            background-color: ${selectedTag === fieldValue
              ? "#eef5ff"
              : "#eeeeee"};
            padding: 1rem;
            border-radius: 10px;
          `}
          onClick={() => setSelectedTag(fieldValue)}
        >
          {`#${fieldValue} (${totalCount})`}
        </button>
      ))}
    </div>
  );
};

// export const query = graphql`
//   query {
//     allMdx(sort: { frontmatter: { date: DESC } }) {
//       nodes {
//         frontmatter {
//           date(formatString: "YYYY.MM.DD")
//           title
//           subtitle
//           tags
//           slug
//           thumbnail_image_alt
//           thumbnail_image {
//             childImageSharp {
//               gatsbyImageData(width: 300)
//             }
//           }
//         }
//         id
//         excerpt
//       }
//       group(field: { frontmatter: { tags: SELECT } }) {
//         fieldValue
//         totalCount
//       }
//     }
//   }
// `;

export default Tags;
