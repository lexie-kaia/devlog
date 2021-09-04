// import { ImageDataLike } from 'gatsby-plugin-image';

export type PostFrontMatterType = {
  title: string;
  date: string;
  category: string;
  tags: string[];
  // thumbnail?: ImageDataLike;
};

export type PostsType = PostType[];

export type PostType = {
  id: string;
  slug: string;
  frontmatter: PostFrontMatterType;
};

export type DetailPostType = {
  body: string;
  id: string;
  tableOfContents: TocListType;
  frontmatter: PostFrontMatterType;
};

export type MorePostFrontMatterType = {
  title: string;
  date: string;
  tags: string[];
};

export type MorePostType = {
  id: string;
  slug: string;
  frontmatter: MorePostFrontMatterType;
};

export type MorePostsType = MorePostType[];

export type PrevNextPostType = {
  frontmatter: {
    title: string;
  };
  slug: string;
};

export type PostListStyleType = 'default' | 'compact';

export type QueryStringType = string;

export type LayoutTypeType = 'fullPage' | 'infiniteScroll';

export type MenuTypeType = 'category' | 'tag';

export type MenuListType = Map<string, number>;

export type TocListType = {
  items: TocItemType[];
};

export type TocItemType = {
  title: string;
  url: string;
  items?: TocItemType[];
};
