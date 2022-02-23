import React, { FC } from 'react';

import { Sidebar, SidebarContainer } from './styles';

interface IGeneralSidebar {
  sidebarContentElement: JSX.Element | JSX.Element[];
}

const GeneralSidebar: FC<IGeneralSidebar> = ({ sidebarContentElement }) => (
  <Sidebar>
    <SidebarContainer>{sidebarContentElement}</SidebarContainer>
  </Sidebar>
);

export default GeneralSidebar;
