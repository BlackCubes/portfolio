import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';

import { useGetArticlesQuery } from 'common/api/articleExtendedApi';
import { useGetCategoriesQuery } from 'common/api/categoryExtendedApi';
import { useGetTagsQuery } from 'common/api/tagExtendedApi';

import LoadingIcon from 'common/components/LoadingIcon';
import SEO from 'common/components/SEO';
import WithLoadingOverlay from 'common/components/WithLoadingOverlay';

import { ArticleList, FilterSidebar } from 'features/article/components';

import { isLoadingOverall } from 'utils';

import { PageContainer } from './styles';

type TCategoryTagIdQueryState = {
  category: number;
  tags: Array<number> | [];
};

const ArticleListView: FC = () => {
  const [categoryTagIdQuery, setCategoryTagIdQuery] =
    useState<TCategoryTagIdQueryState>({
      category: 0,
      tags: [],
    });

  const { data: articlesData, isFetching: articlesFetching } =
    useGetArticlesQuery({
      category: categoryTagIdQuery.category,
      tags: categoryTagIdQuery.tags,
    });
  const { data: categoriesData, isFetching: categoriesFetching } =
    useGetCategoriesQuery();
  const { data: tagsData, isFetching: tagsFetching } = useGetTagsQuery();

  /**
   * Used to dynamically change the filtering to update the article API based
   * on category and/or tags.
   *
   * It checks first if the category has been selected by the user, and if so
   * then it inserts the category ID if that ID does not exist. If the ID does
   * exist, then it 'removes' it since it is assumed that the user has 'unchecked'
   * that particular category.
   *
   * If the user selected tags, then it checks first if the tag exists in the
   * array, and if it does then it 'removes' it since it is assumed that the
   * user has 'unchecked' that particular tag.
   *
   * But, if the tag does not exist in the array, then it is assumed that
   * the user has 'checked' that particular tag which is then inserted.
   * @param categoryTagName
   * @param categoryTagId
   */
  const handleCategoryTagQuery = (
    categoryTagName: 'category' | 'tags',
    categoryTagId: number
  ) => {
    setCategoryTagIdQuery((prevCategoryTagIdQuery) => {
      // If the user is selecting a category, then insert the category ID.
      if (categoryTagName === 'category') {
        return {
          ...prevCategoryTagIdQuery,
          [categoryTagName]:
          // If the category ID exists, then remove it since the user has
          // 'unchecked' it. Otherwise, add the category ID.
            prevCategoryTagIdQuery.category === categoryTagId
              ? 0
              : categoryTagId,
        };
      }

      // Check if the tag ID exists.
      const existingTag = prevCategoryTagIdQuery[categoryTagName].find(
        (oldTagId) => oldTagId === categoryTagId
      );

      // If the tag ID exists, remove it since the user has 'unchecked' it.
      if (existingTag) {
        return {
          ...prevCategoryTagIdQuery,
          [categoryTagName]: prevCategoryTagIdQuery[categoryTagName].filter(
            (oldTagId) => oldTagId !== categoryTagId
          ),
        };
      }

      // If the tag ID does not exist, add it since the user has 'checked' it.
      return {
        ...prevCategoryTagIdQuery,
        [categoryTagName]: [
          ...prevCategoryTagIdQuery[categoryTagName],
          categoryTagId,
        ],
      };
    });
  };

  /**
   * Dynamically clears the filtering for the Article API on category and/or
   * tags.
   *
   * For case ``'clearAll'``, it resets the category and tags to what it was
   * initially.
   *
   * As a safety return, if no cases are brought forth, then it returns the
   * current state.
   * @param clearCase
   */
  const handleClearFiltering = (clearCase: 'clearAll') => {
    setCategoryTagIdQuery((prevCategoryTagIdQuery) => {
      if (clearCase === 'clearAll') {
        return {
          ...prevCategoryTagIdQuery,
          category: 0,
          tags: [],
        };
      }

      return {
        ...prevCategoryTagIdQuery,
      };
    });
  };

  return (
    <motion.div
      key="article-list"
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
      <SEO
        openGraphMetaTags={[
          {
            property: 'og:description',
            content: 'Latest Articles by Elias Gutierrez',
          },
          {
            property: 'og:image',
            content: `${window.location.origin}/website-preview.png`,
          },
          {
            property: 'og:site_name',
            content: "Elias Gutierrez's Portfolio",
          },
          {
            property: 'og:title',
            content:
              'Articles | Elias Gutierrez, Software Engineer & Full-Stack Web Developer',
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            property: 'og:url',
            content: window.location.href,
          },
        ]}
        primaryMetaTags={[
          {
            name: 'description',
            content: 'Latest Articles by Elias Gutierrez',
          },
          {
            name: 'title',
            content:
              'Articles | Elias Gutierrez, Software Engineer & Full-Stack Web Developer',
          },
        ]}
        title="Articles | Elias Gutierrez, Software Engineer & Full-Stack Web Developer"
        twitterMetaTags={[
          {
            property: 'twitter:card',
            content: 'summary',
          },
          {
            property: 'twitter:creator',
            content: '@_BlackCubes_',
          },
          {
            property: 'twitter:description',
            content: 'Latest Articles by Elias Gutierrez',
          },
          {
            property: 'twitter:image',
            content: `${window.location.origin}/website-preview.png`,
          },
          {
            property: 'twitter:site',
            content: '@_BlackCubes_',
          },
          {
            property: 'twitter:title',
            content:
              'Articles | Elias Gutierrez, Software Engineer & Full-Stack Web Developer',
          },
          {
            property: 'twitter:url',
            content: window.location.href,
          },
        ]}
      />

      <PageContainer className="default-container navbar-footer-space">
        <WithLoadingOverlay
          contentComponent={
            <>
              {categoriesData?.items &&
                categoriesData.items.length > 0 &&
                tagsData?.items &&
                tagsData.items.length > 0 && (
                  <FilterSidebar
                    categoriesData={categoriesData.items}
                    handleCategoryTagQuery={handleCategoryTagQuery}
                    handleClearFilter={handleClearFiltering}
                    tagsData={tagsData.items}
                  />
                )}

              <ArticleList articlesData={articlesData?.items ?? []} />
            </>
          }
          isLoading={isLoadingOverall(
            articlesFetching,
            categoriesFetching,
            tagsFetching
          )}
          loaderComponent={<LoadingIcon />}
          loaderDuration={1000}
        />
      </PageContainer>
    </motion.div>
  );
};

export default ArticleListView;
