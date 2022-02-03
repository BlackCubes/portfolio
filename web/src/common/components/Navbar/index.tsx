import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from 'assets/img/logo_bw.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  width: 5rem;
`;

const LogoLink = styled(Link)``;

const Logo = styled.img`
  width: 100%;
`;

const ItemsContainer = styled.ol``;

const Item = styled.li``;

const ItemLink = styled(Link)``;

const Navbar: FC = () => (
  <Container>
    <LogoWrapper>
      <LogoLink to="/">
        <Logo src={logo} alt="Portfolio logo" />
      </LogoLink>
    </LogoWrapper>

    <ItemsContainer>
      <Item>
        <ItemLink to="/">Work</ItemLink>
      </Item>

      <Item>
        <ItemLink to="/">Articles</ItemLink>
      </Item>

      <Item>
        <ItemLink to="/">About</ItemLink>
      </Item>
    </ItemsContainer>
  </Container>
);

export default Navbar;
