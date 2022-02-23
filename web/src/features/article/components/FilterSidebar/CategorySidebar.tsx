import React, { FC } from 'react';

import GeneralSidebar from 'common/components/GeneralSidebar';

import { ICategory } from 'common/models';

import HeadingTertiary from 'common/typography/HeadingTertiary';

import {
  CategoryItemLink,
  SidebarItem,
  SidebarList,
  SidebarTitle,
} from './styles';

interface ICategorySidebar {
  categoriesData: ICategory[] | [];
}

const CategorySidebar: FC<ICategorySidebar> = ({ categoriesData }) => (
  <GeneralSidebar
    sidebarContentElement={
      <>
        <SidebarTitle>
          <HeadingTertiary>Categories</HeadingTertiary>
        </SidebarTitle>

        <SidebarList>
          {categoriesData &&
            categoriesData.length > 0 &&
            categoriesData.map((category) => (
              <SidebarItem key={category.uuid}>
                <CategoryItemLink to={`/articles?category=${category.id}`}>
                  {category.name}
                </CategoryItemLink>
              </SidebarItem>
            ))}
        </SidebarList>
      </>
    }
  />
);

export default CategorySidebar;
