import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  height: 11rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: inherit;
`;

export const LogoWrapper = styled.div`
  width: 5.5rem;

  @media ${({ theme }) => theme.responsive.below899} {
    width: 5rem;
  }
`;

export const LogoLink = styled(Link)`
  display: inline-flex;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const ItemsContainer = styled.ul`
  display: flex;
  list-style: none;
`;

export const Item = styled.li`
  height: 100%;
  padding-left: 11rem;

  @media ${({ theme }) => theme.responsive.below1199} {
    padding-left: 6rem;
  }

  @media ${({ theme }) => theme.responsive.below899} {
    padding-left: 4rem;
  }
`;

export const ItemLink = styled(Link)`
  display: inline-flex;
  align-items: end;
  height: inherit;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary.hex};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.secondary.hex};
    font-size: 1.89rem;
    letter-spacing: 0.05rem;
    border-bottom: 0.1rem solid ${(props) => props.theme.colors.secondary.hex};

    @media ${({ theme }) => theme.responsive.below899} {
      font-size: 1.79rem;
    }

    @media ${({ theme }) => theme.responsive.below599} {
      font-size: 1.69rem;
    }
  }

  @media ${({ theme }) => theme.responsive.below899} {
    font-size: 1.9rem;
  }

  @media ${({ theme }) => theme.responsive.below599} {
    font-size: 1.8rem;
  }
`;
