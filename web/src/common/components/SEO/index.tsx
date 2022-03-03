import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';

type TPrimaryMetaTags = {
  name: 'description' | 'title';
  content: string;
};

type TArticleMetaTags = {
  property:
    | 'article:author'
    | 'article:modified_time'
    | 'article:published_time'
    | 'article:publisher'
    | 'article:section'
    | 'article:tag';
  content: string;
};

type TOpenGraphMetaTags = {
  property:
    | 'og:description'
    | 'og:image'
    | 'og:image:height'
    | 'og:image:width'
    | 'og:site_name'
    | 'og:title'
    | 'og:type'
    | 'og:url';
  content: string;
};

type TTwitterMetaTags = {
  property:
    | 'twitter:card'
    | 'twitter:creator'
    | 'twitter:description'
    | 'twitter:image'
    | 'twitter:site'
    | 'twitter:title'
    | 'twitter:url';
  content: string;
};

export interface ISEO {
  articleMetaTags?: TArticleMetaTags[] | [];
  openGraphMetaTags: TOpenGraphMetaTags[];
  primaryMetaTags: TPrimaryMetaTags[];
  title: string;
  twitterMetaTags: TTwitterMetaTags[];
}

const SEO: FC<ISEO> = ({
  articleMetaTags = [],
  openGraphMetaTags,
  primaryMetaTags,
  title,
  twitterMetaTags,
}) => (
  <Helmet
    htmlAttributes={{ lang: 'en' }}
    meta={[
      ...articleMetaTags,
      ...primaryMetaTags,
      ...openGraphMetaTags,
      ...twitterMetaTags,
    ]}
    title={title}
  />
);

export default SEO;
