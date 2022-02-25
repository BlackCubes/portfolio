import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetArticleByIdQuery } from 'common/api/articleExtendedApi';

import { ArticleDetail } from 'features/article/components';

type TArticleParams = {
  articleId: string;
};

const ArticleDetailView: FC = () => {
  const [doNotInitiateQuery, setDoNotInitiateQuery] = useState<boolean>(true);
  const { articleId } = useParams<TArticleParams>();

  const { data: articleData } = useGetArticleByIdQuery(
    articleId ? parseInt(articleId, 10) : 0,
    {
      skip: doNotInitiateQuery,
    }
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (articleId) {
        setDoNotInitiateQuery(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [articleId]);

  return articleData ? <ArticleDetail articleData={articleData} /> : null;
};

export default ArticleDetailView;
