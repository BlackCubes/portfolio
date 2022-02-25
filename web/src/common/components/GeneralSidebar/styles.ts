import styled from 'styled-components';

export const Sidebar = styled.aside`
  position: fixed;

  &.filter-sidebar {
    top: 30rem;
    left: 24rem;
  }

  &.related-sidebar {
    top: 30rem;
    right: 14rem;
  }
`;

export const SidebarContainer = styled.div`
  &.filter-sidebar {
    width: 15rem;
  }

  &.related-sidebar {
    width: 35rem;
  }
`;
