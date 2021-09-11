import React, { ReactNode, useMemo, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// components
import MasterLayout from './MasterLayout';
// types
import { LayoutTypeType, PostType } from '../../types';
import Seo from './Seo';

type Props = {
  children: ReactNode;
  layoutType?: LayoutTypeType;
  pageTitle?: string;
  pageDescription?: string;
  pagePath?: string;
};

export default function Layout({
  children,
  layoutType,
  pageTitle,
  pageDescription,
  pagePath,
}: Props) {
  const data = useStaticQuery(graphql`
    query QueryPostsOnlyWithCategoryAndTag {
      allMdx {
        nodes {
          frontmatter {
            category
            tags
          }
        }
      }
    }
  `);

  const { categoryList, tagList } = useMemo(() => {
    const {
      allMdx: { nodes: allPosts },
    } = data;

    const categoryList = new Map();
    categoryList.set('all', 0);
    const tagList = new Map();

    allPosts.forEach((post: PostType) => {
      const {
        frontmatter: { category, tags },
      } = post;

      if (!categoryList.has(category)) {
        categoryList.set(category, 1);
      } else {
        categoryList.set(category, categoryList.get(category) + 1);
      }

      categoryList.set('all', categoryList.get('all') + 1);

      tags.forEach(tag => {
        if (!tagList.has(tag)) {
          tagList.set(tag, 1);
        } else {
          tagList.set(tag, tagList.get(tag) + 1);
        }
      });
    });

    return { categoryList, tagList };
  }, [data]);

  return (
    <>
      <Seo
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pagePath={pagePath}
      />
      <MasterLayout
        categoryList={categoryList}
        tagList={tagList}
        isFullPageLayout={layoutType === 'fullPage' ? true : false}
      >
        {children}
      </MasterLayout>
    </>
  );
}
