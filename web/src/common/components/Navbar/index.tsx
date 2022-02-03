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
  Nav,
} from './styles';

const Navbar: FC = () => (
  <Nav>
    <Container>
      <LogoWrapper>
        <LogoLink href="#">
          <Logo src={logo} alt="Portfolio logo" />
        </LogoLink>
      </LogoWrapper>

      <ItemsContainer>
        <Item>
          <ItemLink href="#">Work</ItemLink>
        </Item>

        <Item>
          <ItemLink href="#">Articles</ItemLink>
        </Item>

        <Item>
          <ItemLink href="#">About</ItemLink>
        </Item>
      </ItemsContainer>
    </Container>
  </Nav>
);

export default Navbar;
