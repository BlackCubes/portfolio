import React, { FC } from 'react';

import { useGetArticlesQuery } from 'common/api/articleExtendedApi';
import { useGetCategoriesQuery } from 'common/api/categoryExtendedApi';
import { useGetTagsQuery } from 'common/api/tagExtendedApi';

import {
  ArticleList,
  CategorySidebar,
  TagSidebar,
} from 'features/article/components';

const ArticleListView: FC = () => {
  const { data: articlesData } = useGetArticlesQuery();
  const { data: categoriesData } = useGetCategoriesQuery();
  const { data: tagsData } = useGetTagsQuery();

  return (
    <>
      <CategorySidebar categoriesData={categoriesData?.items ?? []} />

      <TagSidebar tagsData={tagsData?.items ?? []} />

      <ArticleList articlesData={articlesData?.items ?? []} />
    </>
  );
};

export default ArticleListView;
