import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { PostFrontMatterType } from '../../types';

type Props = PostFrontMatterType & { slug: string };

const Wrapper = styled.li`
  padding: 1.5rem 0;
  &:not(:last-child) {
    border-bottom: ${props => `1px solid ${props.theme.color.line}`};
  }
`;

const Info = styled.div`
  width: 100%;
`;

const Category = styled.p`
  margin-bottom: 0.25rem;
  color: ${props => props.theme.color.highlight};
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  font-weight: 500;

  a {
    &:hover,
    &:focus {
      outline: none;
      text-decoration: underline;
    }
  }
`;

const Title = styled.h3`
  margin-bottom: 0.75rem;
  font-size: 32px;
  line-height: 40px;

  a {
    &:hover,
    &:focus {
      outline: none;
      color: ${props => props.theme.color.highlight};
      text-decoration: underline;
    }
  }
`;

const Date = styled.p`
  margin-bottom: 0.25rem;
  color: ${props => props.theme.color.textSub};
  font-size: 14px;
  line-height: 20px;
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -0.25rem;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  color: ${props => props.theme.color.textSub};
`;

const TagItem = styled.li`
  margin: 0 0.25rem 0.25rem 0;

  a {
    &:before {
      content: '#';
    }

    &:hover,
    &:focus {
      outline: none;
      text-decoration: underline;
    }
  }
`;

const Thumbnail = styled.div`
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 40%;
  background: whitesmoke;
  margin-top: 1.25rem;
`;

function PostItem({ title, category, date, tags, thumbnail, slug }: Props) {
  return (
    <Wrapper>
      <Info>
        <Category>
          <Link to={`/?category=${category}`}>
            {category.replace(/\-/g, ' · ')}
          </Link>
        </Category>
        <Title>
          <Link to={`/${slug}`}>{title}</Link>
        </Title>

        <Date>{date}</Date>
        <TagList>
          {tags.map(tag => (
            <TagItem key={tag}>
              <Link to={`/?tag=${tag}`}>{tag}</Link>
            </TagItem>
          ))}
        </TagList>
      </Info>
    </Wrapper>
  );
}

export default PostItem;

// const thumbnailData = getImage(thumbnail);

// {thumbnailData && (
//         <Thumbnail>
//           <Link to={`/${slug}`}>
//             <GatsbyImage image={thumbnailData} alt=""></GatsbyImage>
//           </Link>
//         </Thumbnail>
//       )}
