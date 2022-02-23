import styled from 'styled-components';

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

export const SidebarItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const FilterName = styled.span`
  font-size: 1.4rem;
  text-transform: capitalize;
`;

export const FilterCheckbox = styled.div`
  height: 1.4rem;
  margin-left: 1rem;
`;

export const CheckboxInput = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  height: 100%;
  cursor: pointer;
`;
