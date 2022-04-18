import React, { FC, useEffect, useState } from 'react';

import logo from 'assets/img/logo_bw.png';

import { useScreenDimensions } from 'common/hooks';

import { ItemLink, itemData } from '../ItemLink';

import {
  Container,
  HamburgerMenu,
  HamburgerMenuCheckbox,
  HamburgerMenuContainer,
  Item,
  ItemsContainer,
  Logo,
  LogoLink,
  LogoWrapper,
  Nav,
} from './styles';

const Navbar: FC = () => {
  const [isMenuChecked, setIsMenuChecked] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const screenDimensions = useScreenDimensions();

  const handleScroll = (): void => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Nav
      className={`default-container ${scrollPosition > 0 ? 'scrolling' : ''}`}
    >
      <Container>
        <LogoWrapper>
          <LogoLink to="/">
            <Logo
              src={logo}
              alt="Portfolio logo"
              onClick={() => setIsMenuChecked(false)}
            />
          </LogoLink>
        </LogoWrapper>

        {/* FOR RESPONSIVE DESIGN ON MAX-WIDTH 599PX AND BELOW */}
        {screenDimensions.screenWidth <= 599 && (
          <HamburgerMenuCheckbox
            checked={isMenuChecked}
            onChange={() => {
              setIsMenuChecked((currentIsChecked) => !currentIsChecked);
            }}
          />
        )}

        <HamburgerMenuContainer>
          <HamburgerMenu />
        </HamburgerMenuContainer>

        <ItemsContainer windowHeight={screenDimensions.screenHeight}>
          {itemData.map((item) => (
            <Item key={item.id}>
              <ItemLink
                itemTitle={item.title}
                onClick={() => setIsMenuChecked(false)}
                to={item.path}
              />
            </Item>
          ))}
        </ItemsContainer>
      </Container>
    </Nav>
  );
};

export default Navbar;
