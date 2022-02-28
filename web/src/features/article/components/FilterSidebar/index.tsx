import React, { FC, useState } from 'react';

import GeneralSidebar from 'common/components/GeneralSidebar';

import { ICategory, ITag } from 'common/models';

import HeadingTertiary from 'common/typography/HeadingTertiary';

import {
  CategoryItem,
  CategoryName,
  CheckboxInput,
  ClearFilter,
  ClearFilterButton,
  SidebarContainer,
  SidebarList,
  SidebarTitle,
  TagCheckbox,
  TagItem,
  TagName,
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

  return (
    <GeneralSidebar
      sidebarClassName="filter-sidebar"
      sidebarContainerClassName="filter-sidebar"
      sidebarContentElement={
        <>
          <ClearFilter>
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

          <SidebarContainer>
            <SidebarTitle>
              <HeadingTertiary>Categories</HeadingTertiary>
            </SidebarTitle>

            <SidebarList>
              {categoriesData.map((category, categoryIndex) => (
                <CategoryItem
                  key={`${category.uuid}`}
                  onClick={() => {
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
                >
                  <CategoryName
                    className={
                      categoryCheckedState.checked.indexNumber === categoryIndex
                        ? 'checked'
                        : ''
                    }
                  >
                    {category.name}
                  </CategoryName>
                </CategoryItem>
              ))}
            </SidebarList>
          </SidebarContainer>

          <SidebarContainer>
            <SidebarTitle>
              <HeadingTertiary>Tags</HeadingTertiary>
            </SidebarTitle>

            <SidebarList>
              {tagsData.map((tag, tagIndex) => (
                <TagItem
                  key={`${tag.slug}-${tag.id}`}
                  onClick={() => {
                    handleCategoryTagQuery('tags', tag.id);

                    setTagCheckedState((prevTagCheckedState) =>
                      prevTagCheckedState.map((prevBoolean, prevBooleanIndex) =>
                        prevBooleanIndex === tagIndex
                          ? !prevBoolean
                          : prevBoolean
                      )
                    );
                  }}
                >
                  <TagName
                    className={tagCheckedState[tagIndex] ? 'checked' : ''}
                  >
                    {tag.name}
                  </TagName>

                  <TagCheckbox>
                    <CheckboxInput
                      checked={tagCheckedState[tagIndex]}
                      onChange={() => handleCategoryTagQuery('tags', tag.id)}
                      onClick={() => handleCategoryTagQuery('tags', tag.id)}
                      value={tag.id}
                    />
                  </TagCheckbox>
                </TagItem>
              ))}
            </SidebarList>
          </SidebarContainer>
        </>
      }
    />
  );
};

export default FilterSidebar;
