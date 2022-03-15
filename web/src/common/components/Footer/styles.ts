import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Foot = styled.footer`
  height: 11rem;
  margin-top: 4rem;
  padding-top: 1.5rem;
  border-top: 0.1rem dotted ${(props) => props.theme.colors.primary.hex};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: inherit;
  padding: 4.5rem 3.5rem 0;
  border-top: 0.1rem dotted ${(props) => props.theme.colors.primary.hex};
`;

export const ItemsContainer = styled.ul`
  display: flex;
  list-style: none;
`;

export const Item = styled.li`
  height: 100%;
  padding-right: 11rem;

  &:last-child {
    padding-right: 0;
  }

  @media ${({ theme }) => theme.responsive.below1199} {
    padding-right: 6rem;
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
    border-top: 0.1rem solid ${(props) => props.theme.colors.secondary.hex};
  }
`;

export const LogosContainer = styled(ItemsContainer)``;

export const LogoWrapper = styled.li`
  width: 2.2rem;
  margin-left: 5rem;

  &:first-child {
    margin-left: 0;
  }
`;

export const LogoLink = styled.a`
  display: inline-flex;

  &:hover {
    img {
      width: 90%;
    }
  }
`;

export const Logo = styled.img`
  width: 100%;
  transition: width 0.05s linear;
`;
