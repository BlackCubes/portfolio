import styled from 'styled-components';

export const Sidebar = styled.aside`
  &.filter-sidebar {
    position: fixed;
    top: 30rem;
    left: 24rem;
  }

  &.related-sidebar {
    position: absolute;
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
