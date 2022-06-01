import React, { FC } from 'react';

import { useThemeContext } from 'common/contexts';

import { itemData, ItemLink } from '../ItemLink';

import {
  Container,
  Foot,
  Item,
  ItemsContainer,
  Logo,
  LogoLink,
  LogoWrapper,
  LogosContainer,
} from './styles';

const Footer: FC = () => {
  const { isDark } = useThemeContext();

  return (
    <Foot className="default-container navbar-footer-space">
      <Container>
        <ItemsContainer>
          {itemData.map((item) => (
            <Item key={item.id}>
              <ItemLink itemTitle={item.title} href={item.path} />
            </Item>
          ))}
        </ItemsContainer>

        <LogosContainer>
          <LogoWrapper>
            <LogoLink
              href="https://github.com/BlackCubes"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Logo
                src={`/github-logo_${isDark ? 'white' : 'black'}.png`}
                alt="Github Logo"
                title="Follow Elias Gutierrez on GitHub"
              />
            </LogoLink>
          </LogoWrapper>

          <LogoWrapper>
            <LogoLink
              href="https://twitter.com/_BlackCubes_"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Logo
                src={`/twitter-logo_${isDark ? 'white' : 'black'}.png`}
                alt="Twitter Logo"
                title="Follow Elias Gutierrez on Twitter"
              />
            </LogoLink>
          </LogoWrapper>

          <LogoWrapper>
            <LogoLink
              href="https://www.linkedin.com/in/eliasgutierrez1991/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Logo
                src={`/linkedin-logo_${isDark ? 'white' : 'black'}.png`}
                alt="LinkedIn Logo"
                title="Follow Elias Gutierrez on LinkedIn"
              />
            </LogoLink>
          </LogoWrapper>
        </LogosContainer>
      </Container>
    </Foot>
  );
};

export default Footer;
