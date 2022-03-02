import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import noImage from 'assets/img/no-image.png';

import {
  useGetArticleByIdQuery,
  useGetArticlesByRelatedCategoryQuery,
} from 'common/api/articleExtendedApi';

import SEO from 'common/components/SEO';

import { ArticleDetail, RelatedSidebar } from 'features/article/components';

type TArticleParams = {
  articleId: string;
};

const ArticleDetailView: FC = () => {
  const [doNotInitiateArticleQuery, setDoNotInitiateArticleQuery] =
    useState<boolean>(true);
  const [
    doNotInitiateRelatedArticlesQuery,
    setDoNotInitiateRelatedArticlesQuery,
  ] = useState<boolean>(true);

  const { articleId } = useParams<TArticleParams>();
  const [categoryId, setCategoryId] = useState<number>(0);

  const { data: articleData } = useGetArticleByIdQuery(
    articleId ? parseInt(articleId, 10) : 0,
    {
      skip: doNotInitiateArticleQuery,
    }
  );
  const { dataWithoutCurrentArticle: relatedArticlesByCategoryData } =
    useGetArticlesByRelatedCategoryQuery(categoryId, {
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
              (relatedArticle) => `${relatedArticle.id}` !== articleId
            )
          : [],
      }),
    });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (articleId) {
        setDoNotInitiateArticleQuery(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [articleId]);

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
    <>
      {articleData ? (
        <>
          <SEO
            openGraphMetaTags={[
              {
                property: 'og:description',
                content: articleData.meta.search_description,
              },
              {
                property: 'og:image',
                content: articleData.header_image ?? noImage,
              },
              {
                property: 'og:site_name',
                content: "Elias Gutierrez's Portfolio",
              },
              {
                property: 'og:title',
                content: articleData.meta.seo_title,
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
                content: articleData.meta.search_description,
              },
              {
                name: 'title',
                content: articleData.meta.seo_title,
              },
            ]}
            title={articleData.meta.seo_title}
            twitterMetaTags={[
              {
                property: 'twitter:card',
                content: 'summary_large_image',
              },
              {
                property: 'twitter:creator',
                content: 'Elias T. Gutierrez',
              },
              {
                property: 'twitter:description',
                content: articleData.meta.search_description,
              },
              {
                property: 'twitter:image',
                content: articleData.header_image ?? noImage,
              },
              {
                property: 'twitter:title',
                content: articleData.meta.seo_title,
              },
              {
                property: 'twitter:url',
                content: window.location.href,
              },
            ]}
          />

          <ArticleDetail articleData={articleData} />
        </>
      ) : null}

      {relatedArticlesByCategoryData.length > 0 && (
        <RelatedSidebar
          relatedArticlesByCategoryData={relatedArticlesByCategoryData}
        />
      )}
    </>
  );
};

export default ArticleDetailView;
