import React, { FC } from 'react';

import { Sidebar, SidebarContainer } from './styles';

export interface IGeneralSidebar {
  sidebarClassName?: string;
  sidebarContentElement: JSX.Element | JSX.Element[];
}

const GeneralSidebar: FC<IGeneralSidebar> = ({
  sidebarClassName,
  sidebarContentElement,
}) => (
  <Sidebar className={sidebarClassName ?? ''}>
    <SidebarContainer>{sidebarContentElement}</SidebarContainer>
  </Sidebar>
);

export default GeneralSidebar;
