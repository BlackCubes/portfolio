import React, { FC, useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import GeneralSidebar from 'common/components/GeneralSidebar';

import { ICategory, ITag } from 'common/models';

import HeadingTertiary from 'common/typography/HeadingTertiary';

import CategoryItem from './CategoryItem';
import TagItem from './TagItem';
import {
  ClearFilter,
  ClearFilterButton,
  SidebarContainer,
  SidebarList,
  SidebarTitle,
} from './styles';

type TTagCheckedState = Array<boolean>;

type TCategoryCheckedState = {
  checked: {
    indexNumber: number;
  };
};

interface IFilterSidebar {
  categoriesData: ICategory[];
  handleCategoryTagQuery: Function;
  handleClearFilter: Function;
  tagsData: ITag[];
}

const FilterSidebar: FC<IFilterSidebar> = ({
  categoriesData,
  handleCategoryTagQuery,
  handleClearFilter,
  tagsData,
}) => {
  const clearFilterAnimateControls = useAnimation();

  const { inView: categoryContainerInView, ref: categoryContainerRef } =
    useInView();
  const categoryTitleAnimateControls = useAnimation();
  const [isCategoryTitleBeingAnimated, setIsCategoryTitleBeingAnimated] =
    useState(false);

  const { inView: tagContainerInView, ref: tagContainerRef } = useInView();
  const tagTitleAnimateControls = useAnimation();
  const [isTagTitleBeingAnimated, setIsTagTitleBeingAnimated] = useState(false);

  // For the UI side.
  const [tagCheckedState, setTagCheckedState] = useState<TTagCheckedState>(
    new Array(tagsData.length).fill(false)
  );
  // For the UI side.
  const [categoryCheckedState, setCategoryCheckedState] =
    useState<TCategoryCheckedState>({
      checked: {
        indexNumber: -1,
      },
    });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (categoryContainerInView) {
        clearFilterAnimateControls.start('visible');
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [clearFilterAnimateControls, categoryContainerInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (categoryContainerInView) {
        categoryTitleAnimateControls.start('visible');

        setIsCategoryTitleBeingAnimated(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [categoryContainerInView, categoryTitleAnimateControls]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (tagContainerInView) {
        tagTitleAnimateControls.start('visible');

        setIsTagTitleBeingAnimated(true);
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [tagContainerInView, tagTitleAnimateControls]);
  console.log(isCategoryTitleBeingAnimated, isTagTitleBeingAnimated);

  return (
    <GeneralSidebar
      sidebarClassName="filter-sidebar"
      sidebarContainerClassName="filter-sidebar"
      sidebarContentElement={
        <>
          <ClearFilter animate={clearFilterAnimateControls}>
            <ClearFilterButton
              onClick={() => {
                handleClearFilter('clearAll');

                setTagCheckedState(new Array(tagsData.length).fill(false));

                setCategoryCheckedState({
                  checked: {
                    indexNumber: -1,
                  },
                });
              }}
            >
              Clear filter
            </ClearFilterButton>
          </ClearFilter>

          <SidebarContainer ref={categoryContainerRef}>
            <SidebarTitle animate={categoryTitleAnimateControls}>
              <HeadingTertiary>Categories</HeadingTertiary>
            </SidebarTitle>

            <SidebarList>
              {categoriesData.map((category, categoryIndex) => (
                <CategoryItem
                  key={`${category.uuid}`}
                  categoryIndex={categoryIndex}
                  categoryName={category.name}
                  handleCategoryOnClick={() => {
                    handleCategoryTagQuery('category', category.id);

                    setCategoryCheckedState((prevCategoryCheckedState) => ({
                      ...prevCategoryCheckedState,
                      checked: {
                        indexNumber:
                          prevCategoryCheckedState.checked.indexNumber ===
                          categoryIndex
                            ? -1
                            : categoryIndex,
                      },
                    }));
                  }}
                  isCategoryTitleBeingAnimated={isCategoryTitleBeingAnimated}
                  isChecked={
                    categoryCheckedState.checked.indexNumber === categoryIndex
                  }
                />
              ))}
            </SidebarList>
          </SidebarContainer>

          <SidebarContainer ref={tagContainerRef}>
            <SidebarTitle animate={tagTitleAnimateControls}>
              <HeadingTertiary>Tags</HeadingTertiary>
            </SidebarTitle>

            <SidebarList>
              {tagsData.map((tag, tagIndex) => (
                <TagItem
                  key={`${tag.slug}-${tag.id}`}
                  handleCheckboxOnChange={() =>
                    handleCategoryTagQuery('tags', tag.id)
                  }
                  handleCheckboxOnClick={() =>
                    handleCategoryTagQuery('tags', tag.id)
                  }
                  handleTagOnClick={() => {
                    handleCategoryTagQuery('tags', tag.id);

                    setTagCheckedState((prevTagCheckedState) =>
                      prevTagCheckedState.map((prevBoolean, prevBooleanIndex) =>
                        prevBooleanIndex === tagIndex
                          ? !prevBoolean
                          : prevBoolean
                      )
                    );
                  }}
                  isChecked={tagCheckedState[tagIndex]}
                  tagId={tag.id}
                  tagName={tag.name}
                />
              ))}
            </SidebarList>
          </SidebarContainer>
        </>
      }
    />
  );
};

export default FilterSidebar;
