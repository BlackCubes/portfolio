import React, { FC, useState } from 'react';

import GeneralSidebar from 'common/components/GeneralSidebar';

import { ICategory, ITag } from 'common/models';

import HeadingTertiary from 'common/typography/HeadingTertiary';

import {
  CategoryItem,
  CategoryName,
  CheckboxInput,
  SidebarContainer,
  SidebarList,
  SidebarTitle,
  TagCheckbox,
  TagItem,
  TagName,
} from './styles';

interface IFilterSidebar {
  categoriesData: ICategory[];
  handleCategoryTagQuery: Function;
  tagsData: ITag[];
}

const FilterSidebar: FC<IFilterSidebar> = ({
  categoriesData,
  handleCategoryTagQuery,
  tagsData,
}) => {
  const [tagCheckedState, setTagCheckedState] = useState<Array<boolean>>(
    new Array(tagsData.length).fill(false)
  );

  return (
    <GeneralSidebar
      sidebarContentElement={
        <>
          <SidebarContainer>
            <SidebarTitle>
              <HeadingTertiary>Categories</HeadingTertiary>
            </SidebarTitle>

            <SidebarList>
              {categoriesData.map((category) => (
                <CategoryItem
                  key={`${category.uuid}`}
                  onClick={() =>
                    handleCategoryTagQuery('categories', category.id)
                  }
                >
                  <CategoryName>{category.name}</CategoryName>
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
                  <TagName>{tag.name}</TagName>

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
