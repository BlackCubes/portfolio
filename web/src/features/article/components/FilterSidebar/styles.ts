import styled from 'styled-components';

// GENERAL
export const ClearFilter = styled.div`
  margin-bottom: 1rem;
  text-align: right;

  @media ${({ theme }) => theme.responsive.below1199} {
    text-align: left;
  }
`;

export const ClearFilterButton = styled.button`
  font-size: 1.2rem;
  color: ${(props) => `rgba(${props.theme.colors.secondary.hex}, 0.9)`};
  background: none;
  appearance: none;
  padding: 0.4rem 0.8rem;
  border: none;
  text-decoration: underline;
  cursor: pointer;
`;

export const SidebarContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 3rem;

    @media ${({ theme }) => theme.responsive.below1199} {
      margin-bottom: 1.5rem;
    }
  }
`;

export const SidebarTitle = styled.div`
  margin-bottom: 1rem;

  & h3 {
    font-size: 2rem;
  }
`;

export const SidebarList = styled.ul`
  @media ${({ theme }) => theme.responsive.below1199} {
    display: flex;
  }
`;

// CATEGORIES
export const CategoryItem = styled.li`
  list-style: none;
  cursor: pointer;

  @media ${({ theme }) => theme.responsive.below1199} {
    margin-bottom: 1.5rem;
    margin-left: 1.5rem;
  }

  &:first-child {
    @media ${({ theme }) => theme.responsive.below1199} {
      margin-left: 1rem;
    }
  }

  &:not(:last-child) {
    margin-bottom: 1rem;

    @media ${({ theme }) => theme.responsive.below1199} {
      margin-bottom: 1.5rem;
    }
  }
`;

export const CategoryName = styled.span`
  font-size: 1.4rem;
  font-style: normal;
  text-decoration: none;
  text-transform: capitalize;

  &.checked {
    font-style: italic;
    text-decoration: underline;
  }
`;

// TAGS
export const TagItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  cursor: pointer;

  @media ${({ theme }) => theme.responsive.below1199} {
    margin-bottom: 1.5rem;
    margin-left: 1.5rem;
  }

  &:first-child {
    margin-left: 1rem;
  }

  &:not(:last-child) {
    margin-bottom: 1rem;

    @media ${({ theme }) => theme.responsive.below1199} {
      margin-bottom: 1.5rem;
    }
  }
`;

export const TagName = styled.span`
  font-size: 1.4rem;
  font-style: normal;
  text-decoration: none;
  text-transform: capitalize;

  &.checked {
    font-style: italic;
    text-decoration: underline;
  }
`;

export const TagCheckbox = styled.div`
  height: 1.4rem;
  margin-left: 1rem;

  @media ${({ theme }) => theme.responsive.below1199} {
    margin-left: 0.5rem;
  }
`;

export const CheckboxInput = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  height: 100%;
  cursor: pointer;
`;
