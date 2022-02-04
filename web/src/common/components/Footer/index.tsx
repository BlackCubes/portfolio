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
  <Foot>
    <Container>
      <ItemsContainer>
        <Item>
          <ItemLink>Work</ItemLink>
        </Item>

        <Item>
          <ItemLink>Articles</ItemLink>
        </Item>

        <Item>
          <ItemLink>About</ItemLink>
        </Item>
      </ItemsContainer>

      <LogosContainer>
        <LogoWrapper>
          <LogoLink>
            <Logo
              src={githubLogo}
              alt="Github Logo"
              title="Follow Elias Gutierrez on GitHub"
            />
          </LogoLink>
        </LogoWrapper>

        <LogoWrapper>
          <LogoLink>
            <Logo
              src={twitterLogo}
              alt="Twitter Logo"
              title="Follow Elias Gutierrez on Twitter"
            />
          </LogoLink>
        </LogoWrapper>

        <LogoWrapper>
          <LogoLink>
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
