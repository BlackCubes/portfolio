import React, { FC } from 'react';

import githubLogo from 'assets/img/github-logo_black.png';
import linkedinLogo from 'assets/img/linkedin-logo_black.png';
import twitterLogo from 'assets/img/twitter-logo_black.png';

import {
  Container,
  Foot,
  Item,
  ItemLink,
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
        <Item>
          <ItemLink to="/work">Work</ItemLink>
        </Item>

        <Item>
          <ItemLink to="/">Articles</ItemLink>
        </Item>

        <Item>
          <ItemLink to="/">About</ItemLink>
        </Item>
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
