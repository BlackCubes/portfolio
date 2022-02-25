import { Link } from 'react-router-dom';
import styled from 'styled-components';

// GENERAL
export const SidebarTitle = styled.div`
  margin-bottom: 1rem;

  & h3 {
    font-size: 2rem;
  }
`;

export const SidebarContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const SidebarList = styled.ul``;

// RELATED
export const RelatedItem = styled.li`
  list-style: none;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const RelatedLink = styled(Link)`
  text-decoration: none;

  &:hover h4 {
    text-decoration: underline;
  }
`;

export const RelatedContainer = styled.div`
  display: flex;
`;

export const RelatedImageWrapper = styled.div`
  margin-right: 1rem;
`;

export const RelatedTitleWrapper = styled.div`
  padding-top: 1rem;
`;

export const RelatedTitle = styled.h4`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.primary.hex};
`;
