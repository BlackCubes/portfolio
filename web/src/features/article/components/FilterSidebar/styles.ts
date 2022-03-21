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

  @media ${({ theme }) => theme.responsive.below479} {
    padding: 0.4rem 0.5rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    font-size: 1.15rem;
  }
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

    @media ${({ theme }) => theme.responsive.below479} {
      font-size: 1.7rem;
    }

    @media ${({ theme }) => theme.responsive.below379} {
      font-size: 1.65rem;
    }
  }
`;

export const SidebarList = styled.ul`
  @media ${({ theme }) => theme.responsive.below1199} {
    display: flex;
    flex-wrap: wrap;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

// CATEGORIES
export const CategoryItem = styled.li`
  list-style: none;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 1rem;

    @media ${({ theme }) => theme.responsive.below1199} {
      margin-bottom: 1.5rem;
    }
  }

  @media ${({ theme }) => theme.responsive.below1199} {
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    margin-right: 1rem;
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

  @media ${({ theme }) => theme.responsive.below599} {
    font-size: 1.35rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    font-size: 1.25rem;
  }
`;

// TAGS
export const TagItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 1rem;

    @media ${({ theme }) => theme.responsive.below1199} {
      margin-bottom: 1.5rem;
    }
  }

  @media ${({ theme }) => theme.responsive.below1199} {
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    margin-right: 1rem;
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

  @media ${({ theme }) => theme.responsive.below599} {
    font-size: 1.35rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    font-size: 1.25rem;
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

  @media ${({ theme }) => theme.responsive.below479} {
    width: 1.2rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    width: 1.15rem;
  }
`;
