import React, { FC } from 'react';

import GeneralSidebar from 'common/components/GeneralSidebar';

import { ITag } from 'common/models';

import HeadingTertiary from 'common/typography/HeadingTertiary';

import {
  SidebarItem,
  SidebarList,
  SidebarTitle,
  TagsOption,
  TagsSelect,
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
          <SidebarItem>
            <TagsSelect>
              {tagsData &&
                tagsData.length > 0 &&
                tagsData.map((tag) => (
                  <TagsOption key={`${tag.slug}-${tag.id}`} value={tag.id}>
                    {tag.name}
                  </TagsOption>
                ))}
            </TagsSelect>
          </SidebarItem>
        </SidebarList>
      </>
    }
  />
);

export default TagSidebar;
