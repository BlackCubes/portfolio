import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';

import { createAppStore } from 'app';
import { getArticles } from 'app/api/articleExtendedApi';
// import { getWorksByCategory } from 'app/api/workExtendedApi';

import environment from 'environment';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const store = createAppStore();

  const { data: articles } = await store.dispatch(
    getArticles.initiate({
      category: 0,
      tags: [],
    })
  );

  let articlesFields: ISitemapField[] = [];

  if (articles)
    articlesFields = articles.items.map((article) => ({
      changefreq: 'monthly',
      loc: `${environment.webRoute}/articles/${article.meta.slug}`,
      lastmod: new Date().toISOString(),
      priority: 0.9,
    }));

  // const { data: works } = await store.dispatch(
  //   getWorksByCategory.initiate({
  //     category: 'Work',
  //     limit: 4,
  //   })
  // );

  // let worksFields: ISitemapField[] = [];

  // if (works)
  //   worksFields = works.items.map((work) => ({
  //     changefreq: 'monthly',
  //     loc: `${environment.webRoute}/work/${work.meta.slug}`,
  //     lastmod: new Date().toISOString(),
  //     priority: 0.7,
  //   }));

  // const { data: personals } = await store.dispatch(
  //   getWorksByCategory.initiate({
  //     category: 'Personal',
  //     limit: 4,
  //   })
  // );

  // let personalsFields: ISitemapField[] = [];

  // if (personals)
  //   personalsFields = personals.items.map((personal) => ({
  //     changefreq: 'monthly',
  //     loc: `${environment.webRoute}/work/${personal.meta.slug}`,
  //     lastmod: new Date().toISOString(),
  //     priority: 0.7,
  //   }));

  return getServerSideSitemap(ctx, [
    ...articlesFields,
    // ...worksFields,
    // ...personalsFields,
  ]);
};

/* eslint-disable @typescript-eslint/no-empty-function */
export default function Sitemap() {}
