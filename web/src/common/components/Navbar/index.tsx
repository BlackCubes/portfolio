import React, { FC } from 'react';

import logo from 'assets/img/logo_bw.png';

import {
  Container,
  Item,
  ItemLink,
  ItemsContainer,
  Logo,
  LogoLink,
  LogoWrapper,
} from './styles';

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
