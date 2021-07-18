import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/common/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';

type Props = { data: any; pageContext: { id: string } };

function PostTemplate({ data, pageContext }: Props) {
  console.log(pageContext);
  console.log(data);

  const {
    mdx: {
      frontmatter: { title, tags, date },
    },
  } = data;
  return (
    <Layout>
      {title}
      {date}
      {tags.map((tag: string, index: number) => (
        <li key={index}>{tag}</li>
      ))}
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
}

export default PostTemplate;

export const pageQuery = graphql`
  query QueryPost($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        tags
        date(formatString: "YYYY.MM.DD")
      }
    }
  }
`;
