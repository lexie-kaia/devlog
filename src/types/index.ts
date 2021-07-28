import { ImageDataLike } from 'gatsby-plugin-image';

export type QueryStringType = string;

export type PostsType = PostType[];

export type PostType = {
  node: {
    id: string;
    slug: string;
    frontmatter: PostFrontMatterType;
  };
};

export type PostFrontMatterType = {
  title: string;
  date: string;
  category: string;
  tags: string[];
  thumbnail?: ImageDataLike;
};

export type PostListStyleType = 'block' | 'list';
