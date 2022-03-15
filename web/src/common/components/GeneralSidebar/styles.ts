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

    @media ${({ theme }) => theme.responsive.below1199} {
      display: block;
      position: static;
      max-width: 75rem;
      margin-top: 15rem;
      margin-left: auto;
      margin-right: auto;
      top: auto;
      right: auto;
    }
  }
`;

export const SidebarContainer = styled.div`
  &.filter-sidebar {
    width: 15rem;
  }

  &.related-sidebar {
    width: 35rem;

    @media ${({ theme }) => theme.responsive.below1199} {
      width: 100%;
    }
  }
`;
