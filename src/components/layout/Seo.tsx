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

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta
        property="og:image"
        content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
      /> */}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta
        name="twitter:image"
        content="https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg"
      /> */}

      {(pagePath === '' || pagePath) && (
        <link rel="canonical" href={`${siteUrl}${pagePath}`} />
      )}
    </Helmet>
  );
}
