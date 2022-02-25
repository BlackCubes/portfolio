import { Link } from 'react-router-dom';
import styled from 'styled-components';

// GENERAL
export const SidebarTitle = styled.div`
  margin-bottom: 1.5rem;

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
  margin-bottom: 1.2rem;
  padding-top: 0.4rem;
  border-top: 0.1rem solid
    ${(props) => `rgba(${props.theme.colors.secondary.rgb}, 0.9)`};
  list-style: none;

  &:first-of-type {
    padding-top: 0;
    border-top: none;
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
  padding-top: 0.5rem;
`;

export const RelatedTitle = styled.h4`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.primary.hex};
  font-weight: 500;
`;
