import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type Props = {
  pageTitle?: string;
  pageDescription?: string;
  pagePath?: string;
};

export default function Seo({ pageTitle, pageDescription, pagePath }: Props) {
  const {
    site: {
      siteMetadata: {
        title: siteTitle,
        author,
        description: siteDescription,
        siteUrl,
      },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            description
            siteUrl
          }
        }
      }
    `
  );

  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : `${siteTitle}`;
  const description = pageDescription ? pageDescription : siteDescription;
  const url =
    siteUrl.charAt(siteUrl.length - 1) === '/'
      ? siteUrl.slice(0, siteUrl.length - 1)
      : siteUrl;

  return (
    <Helmet>
      <html lang="ko-KR" />
      <title>{title}</title>
      <meta name="author" content={author} />
      <meta name="description" content={description} />

      <meta
        name="google-site-verification"
        content="gSO3c8LykLYRcQYDNgy5w3boLBlF9QZx2ren2hYiqd0"
      />
      <meta
        name="naver-site-verification"
        content="3d694bff458d9919bcff4831ab27aa4faf5cdaaa"
      />

      <meta property="og:url" content={`${url}${pagePath}`} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}/assets/images/og-image.jpg`} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`${url}/assets/images/og-image.jpg`}
      />

      {pagePath && <link rel="canonical" href={`${url}${pagePath}`} />}
    </Helmet>
  );
}
