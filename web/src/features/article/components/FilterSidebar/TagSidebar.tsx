import React, { FC } from 'react';

import GeneralSidebar from 'common/components/GeneralSidebar';

import { ITag } from 'common/models';

import HeadingTertiary from 'common/typography/HeadingTertiary';

import {
  CheckboxInput,
  SidebarItem,
  SidebarList,
  SidebarTitle,
  TagCheckbox,
  TagName,
} from './styles';

interface ITagSidebar {
  tagsData: ITag[] | [];
}

const TagSidebar: FC<ITagSidebar> = ({ tagsData }) => (
  <GeneralSidebar
    sidebarContentElement={
      <>
        <SidebarTitle>
          <HeadingTertiary>Tags</HeadingTertiary>
        </SidebarTitle>

        <SidebarList>
          {tagsData &&
            tagsData.length > 0 &&
            tagsData.map((tag) => (
              <SidebarItem key={`${tag.slug}-${tag.id}`}>
                <TagName>{tag.name}</TagName>

                <TagCheckbox>
                  <CheckboxInput value={tag.id} />
                </TagCheckbox>
              </SidebarItem>
            ))}
        </SidebarList>
      </>
    }
  />
);

export default TagSidebar;
