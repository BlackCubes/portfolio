import React, { FC, useState } from 'react';

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

type TCheckedState = Array<boolean>;

type TSetCheckedState = React.Dispatch<React.SetStateAction<TCheckedState>>;

interface IFilterSidebar {
  categoriesData: ICategory[];
  tagsData: ITag[];
}

const FilterSidebar: FC<IFilterSidebar> = ({ categoriesData, tagsData }) => {
  const [categoriesChecked, setCategoriesChecked] = useState<TCheckedState>(
    new Array(categoriesData.length).fill(false)
  );
  const [tagsChecked, setTagsChecked] = useState<TCheckedState>(
    new Array(tagsData.length).fill(false)
  );

  const handleCheckboxOnChange = (
    currentCheckboxIndex: number,
    setCheckedState: TSetCheckedState
  ) => {
    setCheckedState((prevCheckedState) =>
      prevCheckedState.map((checkedValue, checkedIndex) =>
        checkedIndex === currentCheckboxIndex ? !checkedValue : checkedValue
      )
    );
  };

  return (
    <GeneralSidebar
      sidebarContentElement={
        <>
          <SidebarContainer>
            <SidebarTitle>
              <HeadingTertiary>Categories</HeadingTertiary>
            </SidebarTitle>

            <SidebarList>
              {categoriesData.map((category, categoryIndex) => (
                <SidebarItem key={`${category.uuid}`}>
                  <FilterName>{category.name}</FilterName>

                  <FilterCheckbox>
                    <CheckboxInput
                      checked={categoriesChecked[categoryIndex]}
                      onChange={() =>
                        handleCheckboxOnChange(
                          categoryIndex,
                          setCategoriesChecked
                        )
                      }
                      value={category.id}
                    />
                  </FilterCheckbox>
                </SidebarItem>
              ))}
            </SidebarList>
          </SidebarContainer>

          <SidebarContainer>
            <SidebarTitle>
              <HeadingTertiary>Tags</HeadingTertiary>
            </SidebarTitle>

            <SidebarList>
              {tagsData.map((tag, tagIndex) => (
                <SidebarItem key={`${tag.slug}-${tag.id}`}>
                  <FilterName>{tag.name}</FilterName>

                  <FilterCheckbox>
                    <CheckboxInput
                      checked={tagsChecked[tagIndex]}
                      onChange={() =>
                        handleCheckboxOnChange(tagIndex, setTagsChecked)
                      }
                      value={tag.id}
                    />
                  </FilterCheckbox>
                </SidebarItem>
              ))}
            </SidebarList>
          </SidebarContainer>
        </>
      }
    />
  );
};

export default FilterSidebar;
