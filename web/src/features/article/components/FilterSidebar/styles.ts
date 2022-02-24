import styled from 'styled-components';

// GENERAL
export const SidebarContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const SidebarTitle = styled.div`
  margin-bottom: 1rem;

  & h3 {
    font-size: 2rem;
  }
`;

export const SidebarList = styled.ul``;

// CATEGORIES
export const CategoryItem = styled.li`
  list-style: none;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const CategoryName = styled.span`
  font-size: 1.4rem;
  text-transform: capitalize;
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
  }
`;

export const TagName = styled.span`
  font-size: 1.4rem;
  text-transform: capitalize;
`;

export const TagCheckbox = styled.div`
  height: 1.4rem;
  margin-left: 1rem;
`;

export const CheckboxInput = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  height: 100%;
  cursor: pointer;
`;
