import React, { FC } from 'react';

import githubLogo from 'assets/img/github-logo_black.png';
import linkedinLogo from 'assets/img/linkedin-logo_black.png';
import twitterLogo from 'assets/img/twitter-logo_black.png';

import { ItemLink, itemData } from '../ItemLink';

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

const Footer: FC = () => (
  <Foot className="default-container navbar-footer-space">
    <Container>
      <ItemsContainer>
        {itemData.map((item) => (
          <Item key={item.id}>
            <ItemLink itemTitle={item.title} to={item.path} />
          </Item>
        ))}
      </ItemsContainer>

      <LogosContainer>
        <LogoWrapper>
          <LogoLink href="https://github.com/BlackCubes">
            <Logo
              src={githubLogo}
              alt="Github Logo"
              title="Follow Elias Gutierrez on GitHub"
            />
          </LogoLink>
        </LogoWrapper>

        <LogoWrapper>
          <LogoLink href="https://twitter.com/_BlackCubes_">
            <Logo
              src={twitterLogo}
              alt="Twitter Logo"
              title="Follow Elias Gutierrez on Twitter"
            />
          </LogoLink>
        </LogoWrapper>

        <LogoWrapper>
          <LogoLink href="https://www.linkedin.com/in/eliasgutierrez1991/">
            <Logo
              src={linkedinLogo}
              alt="LinkedIn Logo"
              title="Follow Elias Gutierrez on LinkedIn"
            />
          </LogoLink>
        </LogoWrapper>
      </LogosContainer>
    </Container>
  </Foot>
);

export default Footer;
