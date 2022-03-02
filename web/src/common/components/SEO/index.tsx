import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';

type TPrimaryMetaTags = {
  name: 'title' | 'description';
  content: string;
};

type TOpenGraphMetaTags = {
  property:
    | 'og:site_name'
    | 'og:url'
    | 'og:type'
    | 'og:title'
    | 'og:description'
    | 'og:image';
  content: string;
};

type TTwitterMetaTags = {
  property:
    | 'twitter:card'
    | 'twitter:creator'
    | 'twitter:url'
    | 'twitter:title'
    | 'twitter:description'
    | 'twitter:image';
  content: string;
};

interface ISEO {
  openGraphMetaTags: TOpenGraphMetaTags[];
  primaryMetaTags: TPrimaryMetaTags[];
  title: string;
  twitterMetaTags: TTwitterMetaTags[];
}

const SEO: FC<ISEO> = ({
  openGraphMetaTags,
  primaryMetaTags,
  title,
  twitterMetaTags,
}) => (
  <Helmet
    htmlAttributes={{ lang: 'en' }}
    meta={[...primaryMetaTags, ...openGraphMetaTags, ...twitterMetaTags]}
    title={title}
  />
);

export default SEO;
