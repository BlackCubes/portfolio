import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import noImage from 'assets/img/no-image.png';

import {
  useGetArticleBySlugQuery,
  useGetArticlesByRelatedCategoryQuery,
} from 'common/api/articleExtendedApi';

import LoadingIcon from 'common/components/LoadingIcon';
import LoadingOverlay from 'common/components/LoadingOverlay';
import SEO from 'common/components/SEO';

import { ArticleDetail, RelatedSidebar } from 'features/article/components';

import { isLoadingOverall } from 'utils';

import { PageContainer } from './styles';

type TArticleParams = {
  articleSlug: string;
};

const ArticleDetailView: FC = () => {
  const [doNotInitiateArticleQuery, setDoNotInitiateArticleQuery] =
    useState<boolean>(true);
  const [
    doNotInitiateRelatedArticlesQuery,
    setDoNotInitiateRelatedArticlesQuery,
  ] = useState<boolean>(true);

  const { articleSlug } = useParams<TArticleParams>();
  const [categoryId, setCategoryId] = useState<number>(0);

  const { data: articleData, isFetching: articleFetching } =
    useGetArticleBySlugQuery(articleSlug ?? 'does-not-exist', {
      skip: doNotInitiateArticleQuery,
    });
  const {
    dataWithoutCurrentArticle: relatedArticlesByCategoryData,
    isFetching: relatedArticlesFetching,
  } = useGetArticlesByRelatedCategoryQuery(categoryId, {
    skip: doNotInitiateRelatedArticlesQuery,
    // selectFromResult is used to return related articles without the current
    // article in the current page view.
    selectFromResult: (result) => ({
      // Return original result from RTK for any debugging or needing it.
      ...result,
      // Create new property that returns the related articles without the
      // current one in the page view.
      dataWithoutCurrentArticle: result.data
        ? result.data.items.filter(
            // articleId is a string from URL params.
            (relatedArticle) => relatedArticle.meta.slug !== articleSlug
          )
        : [],
    }),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (articleSlug) {
        setDoNotInitiateArticleQuery(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [articleSlug]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (articleData) {
        setCategoryId(articleData.category?.id ?? 0);

        setDoNotInitiateRelatedArticlesQuery(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [articleData]);

  return (
    <motion.div
      key="article-detail"
      animate="animate"
      exit="exit"
      initial="initial"
      transition={{ duration: 1, ease: 'easeOut' }}
      variants={{
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: '-100%', transition: { duration: 0.3 } },
        initial: { opacity: 0, x: 0 },
      }}
    >
      {articleData && (
        <SEO
          articleMetaTags={[
            {
              property: 'article:published_time',
              content: articleData.meta.first_published_at,
            },
            {
              property: 'article:section',
              content: articleData.category?.name ?? '',
            },
            {
              property: 'article:tag',
              content:
                articleData.tags.length > 0
                  ? articleData.tags.map((tag) => tag.name).join(', ')
                  : '',
            },
          ]}
          openGraphMetaTags={[
            {
              property: 'og:description',
              content:
                articleData.meta.search_description.length > 0
                  ? articleData.meta.search_description
                  : articleData.description,
            },
            {
              property: 'og:image',
              content: articleData.header_image
                ? `http://localhost:8000${articleData.header_image}`
                : noImage,
            },
            {
              property: 'og:image:height',
              content: '720',
            },
            {
              property: 'og:image:width',
              content: '1200',
            },
            {
              property: 'og:site_name',
              content: "Elias Gutierrez's Portfolio",
            },
            {
              property: 'og:title',
              content:
                articleData.meta.seo_title.length > 0
                  ? `${articleData.meta.seo_title} - Articles | Elias Gutierrez, Software Engineer & Full-Stack Web Developer`
                  : `${articleData.title} - Articles | Elias Gutierrez, Software Engineer & Full-Stack Web Developer`,
            },
            {
              property: 'og:type',
              content: 'article',
            },
            {
              property: 'og:url',
              content: window.location.href,
            },
          ]}
          primaryMetaTags={[
            {
              name: 'description',
              content:
                articleData.meta.search_description.length > 0
                  ? articleData.meta.search_description
                  : articleData.description,
            },
            {
              name: 'title',
              content:
                articleData.meta.seo_title.length > 0
                  ? `${articleData.meta.seo_title} - Articles | Elias Gutierrez, Software Engineer & Full-Stack Web Developer`
                  : `${articleData.title} - Articles | Elias Gutierrez, Software Engineer & Full-Stack Web Developer`,
            },
          ]}
          title={
            articleData.meta.seo_title.length > 0
              ? `${articleData.meta.seo_title} - Articles | Elias Gutierrez, Software Engineer & Full-Stack Web Developer`
              : `${articleData.title} - Articles | Elias Gutierrez, Software Engineer & Full-Stack Web Developer`
          }
          twitterMetaTags={[
            {
              property: 'twitter:card',
              content: 'summary_large_image',
            },
            {
              property: 'twitter:creator',
              content: '@_BlackCubes_',
            },
            {
              property: 'twitter:description',
              content:
                articleData.meta.search_description.length > 0
                  ? articleData.meta.search_description
                  : articleData.description,
            },
            {
              property: 'twitter:image',
              content: articleData.header_image
                ? `http://localhost:8000${articleData.header_image}`
                : noImage,
            },
            {
              property: 'twitter:site',
              content: '@_BlackCubes_',
            },
            {
              property: 'twitter:title',
              content:
                articleData.meta.seo_title.length > 0
                  ? `${articleData.meta.seo_title} - Articles | Elias Gutierrez, Software Engineer & Full-Stack Web Developer`
                  : `${articleData.title} - Articles | Elias Gutierrez, Software Engineer & Full-Stack Web Developer`,
            },
            {
              property: 'twitter:url',
              content: window.location.href,
            },
          ]}
        />
      )}

      <PageContainer className="default-container navbar-footer-space">
        <LoadingOverlay
          contentComponent={
            <>
              {articleData && <ArticleDetail articleData={articleData} />}

              {relatedArticlesByCategoryData.length > 0 && (
                <RelatedSidebar
                  relatedArticlesByCategoryData={relatedArticlesByCategoryData}
                />
              )}
            </>
          }
          isLoading={isLoadingOverall(articleFetching, relatedArticlesFetching)}
          loaderComponent={<LoadingIcon />}
        />
      </PageContainer>
    </motion.div>
  );
};

export default ArticleDetailView;
