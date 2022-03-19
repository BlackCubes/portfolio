import React, { FC, useEffect, useState } from 'react';

import logo from 'assets/img/logo_bw.png';

import {
  Container,
  HamburgerMenu,
  HamburgerMenuCheckbox,
  HamburgerMenuContainer,
  Item,
  ItemLink,
  ItemsContainer,
  Logo,
  LogoLink,
  LogoWrapper,
  Nav,
} from './styles';

type TItemData = {
  id: string;
  title: string;
  path: string;
};

const itemData: TItemData[] = [
  {
    id: 'b1b19382-6b92-4515-93c7-5446bfa717d5',
    title: 'Work',
    path: '/work',
  },
  {
    id: 'b9c2b576-5164-449a-ab4b-ad0ebeb39c27',
    title: 'Articles',
    path: '/articles',
  },
  {
    id: '4c5c324a-92ed-4575-a731-25370c21379a',
    title: 'About',
    path: '/',
  },
];

const Navbar: FC = () => {
  const [isMenuChecked, setIsMenuChecked] = useState(false);
  const [screenDimension, setScreenDimension] = useState({
    screenHeight: window.innerHeight,
    screenWidth: window.innerWidth,
  });
  const [scrollPosition, setScrollPosition] = useState(0);

  const getScreenDimension = (): void =>
    setScreenDimension((currentScreenDimension) => ({
      ...currentScreenDimension,
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth,
    }));

  useEffect(() => {
    window.addEventListener('resize', getScreenDimension);

    return () => {
      window.removeEventListener('resize', getScreenDimension);
    };
  }, [screenDimension]);

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
            <Logo src={logo} alt="Portfolio logo" />
          </LogoLink>
        </LogoWrapper>

        {/* FOR RESPONSIVE DESIGN ON MAX-WIDTH 599PX AND BELOW */}
        {screenDimension.screenWidth <= 599 && (
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

        <ItemsContainer windowHeight={screenDimension.screenHeight}>
          {itemData.map((item) => (
            <Item key={item.id}>
              <ItemLink to={item.path} onClick={() => setIsMenuChecked(false)}>
                {item.title}
              </ItemLink>
            </Item>
          ))}
        </ItemsContainer>
      </Container>
    </Nav>
  );
};

export default Navbar;
