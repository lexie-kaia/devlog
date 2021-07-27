import { ImageDataLike } from 'gatsby-plugin-image';

export type QueryStringType = string;

export type AllPostsType = PostType[];

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
