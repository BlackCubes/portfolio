import React, { FC, useState } from 'react';

import { useGetArticlesQuery } from 'common/api/articleExtendedApi';
import { useGetCategoriesQuery } from 'common/api/categoryExtendedApi';
import { useGetTagsQuery } from 'common/api/tagExtendedApi';

import { ArticleList, FilterSidebar } from 'features/article/components';

type TCategoryTagIdQueryState = {
  categories: Array<number> | [];
  tags: Array<number> | [];
};

const ArticleListView: FC = () => {
  const [categoryTagIdQuery, setCategoryTagIdQuery] =
    useState<TCategoryTagIdQueryState>({
      categories: [],
      tags: [],
    });
  console.log('Categories: ', categoryTagIdQuery.categories);
  console.log('Tags: ', categoryTagIdQuery.tags);

  const { data: articlesData } = useGetArticlesQuery();
  const { data: categoriesData } = useGetCategoriesQuery();
  const { data: tagsData } = useGetTagsQuery();

  /**
   * Used to dynamically change the filtering to update the article API based
   * on categories and/or tags.
   *
   * It checks first if the category/tag exists in the array, and if it does
   * then it 'removes' it since it is assumed that the user has 'unchecked'
   * that particular filter.
   *
   * If the category/tag does not exist in the array, then it is assumed that
   * the user has 'checked' that particular filter which is then inserted.
   * @param categoryTagName
   * @param categoryTagId
   */
  const handleCategoryTagQuery = (
    categoryTagName: 'categories' | 'tags',
    categoryTagId: number
  ) => {
    setCategoryTagIdQuery((prevCategoryTagIdQuery) => {
      // Check if it exists.
      const existingCategoryTag = prevCategoryTagIdQuery[categoryTagName].find(
        (oldCategoryTagId) => oldCategoryTagId === categoryTagId
      );

      // If it exists, remove it since the user has 'unchecked' it.
      if (existingCategoryTag) {
        return {
          ...prevCategoryTagIdQuery,
          [categoryTagName]: prevCategoryTagIdQuery[categoryTagName].filter(
            (oldCategoryTagId) => oldCategoryTagId !== categoryTagId
          ),
        };
      }

      // If it does not exist, add it since the user has 'checked' it.
      return {
        ...prevCategoryTagIdQuery,
        [categoryTagName]: [
          ...prevCategoryTagIdQuery[categoryTagName],
          categoryTagId,
        ],
      };
    });
  };

  return (
    <>
      {categoriesData?.items &&
        categoriesData.items.length > 0 &&
        tagsData?.items &&
        tagsData.items.length > 0 && (
          <FilterSidebar
            categoriesData={categoriesData.items}
            handleCategoryTagQuery={handleCategoryTagQuery}
            tagsData={tagsData.items}
          />
        )}

      <ArticleList articlesData={articlesData?.items ?? []} />
    </>
  );
};

export default ArticleListView;
