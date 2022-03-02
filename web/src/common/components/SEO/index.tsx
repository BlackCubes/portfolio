import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';

type TPrimaryMetaTags = {
  name: 'description' | 'title';
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
