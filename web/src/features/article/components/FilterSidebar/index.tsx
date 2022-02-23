import React, { FC } from 'react';

import GeneralSidebar from 'common/components/GeneralSidebar';

import { ICategory, ITag } from 'common/models';

import HeadingTertiary from 'common/typography/HeadingTertiary';

import {
  CheckboxInput,
  FilterCheckbox,
  FilterName,
  SidebarItem,
  SidebarList,
  SidebarTitle,
} from './styles';

interface IFilterSidebar {
  filterData: ICategory[] | ITag[] | [];
  filterNameType: 'Categories' | 'Tags';
}

const FilterSidebar: FC<IFilterSidebar> = ({ filterData, filterNameType }) => (
  <GeneralSidebar
    sidebarContentElement={
      <>
        <SidebarTitle>
          <HeadingTertiary>{filterNameType}</HeadingTertiary>
        </SidebarTitle>

        <SidebarList>
          {filterData &&
            filterData.length > 0 &&
            filterData.map((filter) => (
              <SidebarItem
                key={`${filter.name.toLowerCase().split(' ').join('-')}-${
                  filter.id
                }`}
              >
                <FilterName>{filter.name}</FilterName>

                <FilterCheckbox>
                  <CheckboxInput value={filter.id} />
                </FilterCheckbox>
              </SidebarItem>
            ))}
        </SidebarList>
      </>
    }
  />
);

export default FilterSidebar;
