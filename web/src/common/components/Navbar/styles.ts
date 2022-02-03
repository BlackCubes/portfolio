// import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  width: 5.5rem;
`;

export const LogoLink = styled.a`
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
  padding-left: 4rem;
`;

export const ItemLink = styled.a`
  display: inline-flex;
  align-items: end;
  height: inherit;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1.89rem;
    letter-spacing: 0.05rem;
    border-bottom: 0.1rem solid ${(props) => props.theme.colors.secondary};
  }
`;
