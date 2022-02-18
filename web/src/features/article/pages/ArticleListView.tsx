import React, { FC } from 'react';

import { useGetArticlesQuery } from 'common/api/articleExtendedApi';

import { ArticleListSection } from 'features/article/components';

const ArticleListView: FC = () => {
  const { data: articlesData } = useGetArticlesQuery();

  return <ArticleListSection articlesData={articlesData?.items ?? []} />;
};

export default ArticleListView;
