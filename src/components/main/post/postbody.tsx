import React from 'react';
import styled from '@emotion/styled';
import MdxStyles from '../../../styles/mdxstyles';
import { MDXRenderer } from 'gatsby-plugin-mdx';

type Props = {
  mdxBody: string;
};

const Container = styled.div`
  padding: 5rem 0;
`;

function PostBody({ mdxBody }: Props) {
  return (
    <Container>
      <MdxStyles>
        <MDXRenderer>{mdxBody}</MDXRenderer>
      </MdxStyles>
    </Container>
  );
}

export default PostBody;
