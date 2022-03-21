import { Link } from 'react-router-dom';
import styled from 'styled-components';

// GENERAL
export const SidebarTitle = styled.div`
  margin-bottom: 1.5rem;

  & h3 {
    font-size: 2rem;

    @media ${({ theme }) => theme.responsive.below479} {
      font-size: 1.7rem;
    }

    @media ${({ theme }) => theme.responsive.below379} {
      font-size: 1.6rem;
    }
  }
`;

export const SidebarContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    overflow-x: hidden;
  }
`;

export const SidebarList = styled.ul`
  @media ${({ theme }) => theme.responsive.below1199} {
    display: flex;
    overflow-x: auto;
  }

  @media ${({ theme }) => theme.responsive.below479} {
    margin-left: -0.5rem;
  }
`;

// RELATED
export const RelatedItem = styled.li`
  margin-bottom: 1.2rem;
  padding-top: 0.4rem;
  border-top: 0.1rem solid
    ${(props) => `rgba(${props.theme.colors.secondary.rgb}, 0.9)`};
  list-style: none;

  @media ${({ theme }) => theme.responsive.below1199} {
    max-width: 22rem;
    margin-left: 1.2rem;
    margin-bottom: 0;
    padding-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    border-left: ${({ theme }) =>
      `0.1rem solid rgba(${theme.colors.glassLightShadow.rgb}, 0.17)`};
    border-top: ${({ theme }) =>
      `0.1rem solid rgba(${theme.colors.glassLightShadow.rgb}, 0.17)`};
    border-right: ${({ theme }) =>
      `0.1rem solid rgba(${theme.colors.glassDarkShadow.rgb}, 0.27)`};
    border-bottom: ${({ theme }) =>
      `0.1rem solid rgba(${theme.colors.glassDarkShadow.rgb}, 0.27)`};
    border-radius: 2rem;
  }

  &:first-of-type {
    padding-top: 0;
    border-top: none;

    @media ${({ theme }) => theme.responsive.below1199} {
      padding-top: 1rem;
    }
  }
`;

export const RelatedLink = styled(Link)`
  text-decoration: none;

  &:hover {
    h4 {
      text-decoration: underline;
    }
  }
`;

export const RelatedContainer = styled.div`
  display: flex;

  @media ${({ theme }) => theme.responsive.below1199} {
    flex-direction: column;
    align-items: center;
  }
`;

export const RelatedImageWrapper = styled.div`
  margin-right: 1rem;

  @media ${({ theme }) => theme.responsive.below1199} {
    margin-right: 0;
  }
`;

export const RelatedTitleWrapper = styled.div`
  padding-top: 0.5rem;

  @media ${({ theme }) => theme.responsive.below899} {
    text-align: center;
  }
`;

export const RelatedTitle = styled.h4`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.primary.hex};
  font-weight: 500;

  @media ${({ theme }) => theme.responsive.below899} {
    font-size: 1.55rem;
  }

  @media ${({ theme }) => theme.responsive.below379} {
    font-size: 1.5rem;
  }
`;
