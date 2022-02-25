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
  const { data: relatedArticlesByCategoryData } =
    useGetArticlesByRelatedCategoryQuery(categoryId, {
      skip: doNotInitiateRelatedArticlesQuery,
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
        setCategoryId(articleData.categories[0].id);

        setDoNotInitiateRelatedArticlesQuery(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [articleData]);

  return (
    <>
      {articleData ? <ArticleDetail articleData={articleData} /> : null}

      {relatedArticlesByCategoryData?.items &&
        relatedArticlesByCategoryData.items.length > 0 && (
          <RelatedSidebar
            relatedArticlesByCategoryData={relatedArticlesByCategoryData.items}
          />
        )}
    </>
  );
};

export default ArticleDetailView;
