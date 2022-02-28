import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  useGetArticleByIdQuery,
  useGetArticlesByRelatedCategoryQuery,
} from 'common/api/articleExtendedApi';

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
      {articleData ? <ArticleDetail articleData={articleData} /> : null}

      {relatedArticlesByCategoryData.length > 0 && (
        <RelatedSidebar
          relatedArticlesByCategoryData={relatedArticlesByCategoryData}
        />
      )}
    </>
  );
};

export default ArticleDetailView;
