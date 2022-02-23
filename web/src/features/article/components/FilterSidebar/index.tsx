import React, { FC } from 'react';

import GeneralSidebar from 'common/components/GeneralSidebar';

import { ICategory, ITag } from 'common/models';

import HeadingTertiary from 'common/typography/HeadingTertiary';

import {
  CheckboxInput,
  FilterCheckbox,
  FilterName,
  SidebarContainer,
  SidebarItem,
  SidebarList,
  SidebarTitle,
} from './styles';

interface IFilterSidebar {
  categoriesData: ICategory[] | [];
  tagsData: ITag[] | [];
}

const FilterSidebar: FC<IFilterSidebar> = ({ categoriesData, tagsData }) => (
  <GeneralSidebar
    sidebarContentElement={
      <>
        {categoriesData && categoriesData.length > 0 && (
          <SidebarContainer>
            <SidebarTitle>
              <HeadingTertiary>Categories</HeadingTertiary>
            </SidebarTitle>

            <SidebarList>
              {categoriesData.map((category) => (
                <SidebarItem key={`${category.uuid}`}>
                  <FilterName>{category.name}</FilterName>

                  <FilterCheckbox>
                    <CheckboxInput value={category.id} />
                  </FilterCheckbox>
                </SidebarItem>
              ))}
            </SidebarList>
          </SidebarContainer>
        )}

        {tagsData && tagsData.length > 0 && (
          <SidebarContainer>
            <SidebarTitle>
              <HeadingTertiary>Categories</HeadingTertiary>
            </SidebarTitle>

            <SidebarList>
              {tagsData.map((tag) => (
                <SidebarItem key={`${tag.slug}-${tag.id}`}>
                  <FilterName>{tag.name}</FilterName>

                  <FilterCheckbox>
                    <CheckboxInput value={tag.id} />
                  </FilterCheckbox>
                </SidebarItem>
              ))}
            </SidebarList>
          </SidebarContainer>
        )}
      </>
    }
  />
);

export default FilterSidebar;
