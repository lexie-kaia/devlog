import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';

export type PostType = {
  title: string;
  category: string;
  date: string;
  summary: string;
  tags: string[];
  thumbnail: ImageDataLike;
};

const Wrapper = styled.li`
  padding: 1.25rem 0;
  border-bottom: ${props => `1px solid ${props.theme.color.line}`};
  transition: background 300ms ease-in-out;

  @media screen and (min-width: 577px) {
    display: flex;
  }
`;

const Info = styled.div`
  @media screen and (min-width: 577px) {
    flex-grow: 1;
    margin-right: 1rem;
  }
`;

const Thumb = styled.div`
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 68%;
  background: whitesmoke;
  margin-top: 1rem;

  @media screen and (min-width: 577px) {
    flex-shrink: 0;
    margin-top: 0;
    padding-bottom: 0;
    width: 200px;
    height: 136px;
  }
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 22px;
  line-height: 28px;
`;

const TitleLink = styled(Link)`
  &:hover,
  &:focus {
    outline: none;
    color: ${props => props.theme.color.highlight};
    text-decoration: underline;
  }
`;

const CategoryAndDate = styled.p`
  margin-bottom: 0.25rem;
  color: ${props => props.theme.color.textSub};
  font-size: 14px;
  line-height: 20px;
`;

const Summary = styled.p`
  margin-bottom: 0.5rem;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.color.textSub};
`;

const SummaryLink = styled(Link)`
  &:focus {
    outline: none;
    text-decoration: underline;
  }
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -0.25rem;
`;

const TagItem = styled.li`
  margin: 0 0.25rem 0.25rem 0;
`;

const TagLink = styled(Link)`
  padding: 0 0.5rem;
  border-radius: 1rem;
  color: ${props => props.theme.color.textSub};
  border: ${props => `1px solid ${props.theme.color.line}`};
  font-size: 13px;
  line-height: 20px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    color: ${props => props.theme.color.highlight};
    border: ${props => `1px solid ${props.theme.color.highlight}`};
  }
`;

function PostItem({
  title,
  category,
  date,
  summary,
  tags,
  thumbnail,
}: PostType) {
  const thumbnailData = getImage(thumbnail);
  console.log(thumbnailData);

  return (
    <Wrapper>
      <Info>
        <Title>
          <TitleLink to="/">{title}</TitleLink>
        </Title>
        <CategoryAndDate>
          {category} - {date}
        </CategoryAndDate>
        <Summary>
          <SummaryLink to="/">{summary}</SummaryLink>
        </Summary>
        <TagList>
          {tags.map(tag => (
            <TagItem key={tag}>
              <TagLink to="/">{tag}</TagLink>
            </TagItem>
          ))}
        </TagList>
      </Info>
      {thumbnailData && (
        <Thumb>
          <GatsbyImage image={thumbnailData} alt=""></GatsbyImage>
        </Thumb>
      )}
    </Wrapper>
  );
}

export default PostItem;
