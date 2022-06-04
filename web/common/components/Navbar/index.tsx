import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { useAnimation } from 'framer-motion';

import { useScreenDimensions } from 'common/hooks';

import { itemData, ItemLink } from '../ItemLink';

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

interface INavbar {
  isFirstMount: boolean;
}

const Navbar: FC<INavbar> = ({ isFirstMount }) => {
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

  const navAnimateControls = useAnimation();

  useEffect(() => {
    if (!isFirstMount) navAnimateControls.start('visible');
  }, [isFirstMount, navAnimateControls]);

  return (
    <Nav
      animate={navAnimateControls}
      className={`default-container ${scrollPosition > 0 ? 'scrolling' : ''}`}
    >
      <Container>
        <LogoWrapper>
          <Link href="/" passHref>
            <LogoLink>
              <Logo
                alt="Portfolio logo"
                onClick={() => setIsMenuChecked(false)}
                src="/logo_main.png"
              />
            </LogoLink>
          </Link>
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
                href={item.path}
                itemTitle={item.title}
                onClick={() => setIsMenuChecked(false)}
              />
            </Item>
          ))}
        </ItemsContainer>
      </Container>
    </Nav>
  );
};

export default Navbar;
