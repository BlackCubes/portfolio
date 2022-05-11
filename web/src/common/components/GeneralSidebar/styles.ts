import styled from 'styled-components';

export const Sidebar = styled.aside`
  &.filter-sidebar {
    position: sticky;
    top: 10rem;
    padding-top: 10rem;

    @media ${({ theme }) => theme.responsive.below1199} {
      position: static;
      top: auto;
      max-width: 75rem;
      margin-top: 10rem;
      margin-right: auto;
      margin-bottom: 5rem;
      margin-left: auto;
      padding-top: 0;
    }

    @media ${({ theme }) => theme.responsive.below899} {
      max-width: 95%;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      max-width: 93%;
      margin-top: 5rem;
    }
  }

  &.related-sidebar {
    position: sticky;
    top: 10rem;
    padding-top: 10rem;

    @media ${({ theme }) => theme.responsive.below1199} {
      position: static;
      top: auto;
      display: block;
      max-width: 75rem;
      margin-top: 15rem;
      margin-left: auto;
      margin-right: auto;
      padding-top: 0;
    }

    @media ${({ theme }) => theme.responsive.below899} {
      max-width: 95%;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      max-width: 93%;
      margin-top: 7rem;
    }

    @media ${({ theme }) => theme.responsive.below479} {
      margin-top: 5rem;
    }
  }
`;

export const SidebarContainer = styled.div`
  &.filter-sidebar {
    width: 15rem;

    @media ${({ theme }) => theme.responsive.below1199} {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }

  &.related-sidebar {
    width: 20rem;

    @media ${({ theme }) => theme.responsive.below1199} {
      width: 100%;
    }
  }
`;
