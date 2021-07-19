import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from '@emotion/styled';
import Layout from '../components/common/layout';
import MdxBody, { typo } from '../components/main/mdxbody';

type Props = {
  data: any;
};

const Header = styled.header`
  margin: 0 1rem;
  padding: 1.5rem 0;
  /* border-bottom: ${props => `1px solid ${props.theme.color.line}`}; */
`;

const Title = styled.h1`
  margin-bottom: 0.5rem;
  font-size: ${typo.h1Mobile.fontSize};
  line-height: ${typo.h1Mobile.lineHeight};

  @media screen and (min-width: 768px) {
    font-size: ${typo.h1.fontSize};
    line-height: ${typo.h1.lineHeight};
  }
`;

const Date = styled.p`
  margin-bottom: 0.75rem;
  color: ${props => props.theme.color.textSub};
  font-size: 14px;
  line-height: 20px;
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -0.25rem;
`;

const TagItem = styled.li`
  margin: 0 0.25rem 0.25rem 0;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;

  a {
    &:before {
      content: '#';
    }

    color: ${props => props.theme.color.highlight};

    &:hover,
    &:focus {
      outline: none;
      text-decoration: underline;
    }
  }
`;

function PostTemplate({ data }: Props) {
  const {
    mdx: {
      frontmatter: { title, tags, date },
    },
  } = data;

  return (
    <Layout>
      <Header>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <TagList>
          {tags.map((tag: string, index: number) => (
            <TagItem key={tag}>
              <Link to={`/?tag=${tag}`}>{tag}</Link>
            </TagItem>
          ))}
        </TagList>
      </Header>
      <MdxBody>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MdxBody>
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
