import React from 'react';
import styled from '@emotion/styled';
import { MDXRenderer } from 'gatsby-plugin-mdx';
// components
import MdxStyles from '../../../styles/MdxStyles';

type Props = {
  mdxBody: string;
};

export default function PostBodyRenderer({ mdxBody }: Props) {
  return (
    <PostBody>
      <MdxStyles>
        <MDXRenderer>{mdxBody}</MDXRenderer>
      </MdxStyles>
    </PostBody>
  );
}

export const PostBody = styled.div`
  padding: 5rem 0;
`;
