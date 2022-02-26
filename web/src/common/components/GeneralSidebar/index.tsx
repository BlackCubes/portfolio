import React, { FC } from 'react';

import { Sidebar, SidebarContainer } from './styles';

export interface IGeneralSidebar {
  sidebarClassName?: string;
  sidebarContainerClassName?: string;
  sidebarContentElement: JSX.Element | JSX.Element[];
}

const GeneralSidebar: FC<IGeneralSidebar> = ({
  sidebarClassName,
  sidebarContainerClassName,
  sidebarContentElement,
}) => (
  <Sidebar className={sidebarClassName ?? ''}>
    <SidebarContainer className={sidebarContainerClassName ?? ''}>
      {sidebarContentElement}
    </SidebarContainer>
  </Sidebar>
);

export default GeneralSidebar;
