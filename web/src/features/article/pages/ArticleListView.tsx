import React, { FC } from 'react';

import { useGetArticlesQuery } from 'common/api/articleExtendedApi';

import { ArticleList } from 'features/article/components';

const ArticleListView: FC = () => {
  const { data: articlesData } = useGetArticlesQuery();

  return <ArticleList articlesData={articlesData?.items ?? []} />;
};

export default ArticleListView;
