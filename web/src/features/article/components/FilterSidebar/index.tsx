import React, { FC } from 'react';

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
}) => (
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
            {tagsData.map((tag) => (
              <TagItem key={`${tag.slug}-${tag.id}`}>
                <TagName>{tag.name}</TagName>

                <TagCheckbox>
                  <CheckboxInput
                    onChange={() => handleCategoryTagQuery('tags', tag.id)}
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

export default FilterSidebar;
