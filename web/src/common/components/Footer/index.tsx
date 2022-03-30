import React, { FC, useEffect, useState } from 'react';

import githubLogoBlack from 'assets/img/github-logo_black.png';
import linkedinLogoBlack from 'assets/img/linkedin-logo_black.png';
import twitterLogoBlack from 'assets/img/twitter-logo_black.png';

import githubLogoWhite from 'assets/img/github-logo_white.png';
import linkedinLogoWhite from 'assets/img/linkedin-logo_white.png';
import twitterLogoWhite from 'assets/img/twitter-logo_white.png';

import { useThemeContext } from 'common/contexts';

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

const Footer: FC = () => {
  const [githubLogo, setGithubLogo] = useState(githubLogoBlack);
  const [linkedinLogo, setLinkedinLogo] = useState(linkedinLogoBlack);
  const [twitterLogo, setTwitterLogo] = useState(twitterLogoBlack);

  const { isDark } = useThemeContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setGithubLogo(!isDark ? githubLogoBlack : githubLogoWhite);

      setLinkedinLogo(!isDark ? linkedinLogoBlack : linkedinLogoWhite);

      setTwitterLogo(!isDark ? twitterLogoBlack : twitterLogoWhite);
    }, 600);

    return () => clearTimeout(timer);
  }, [isDark]);

  return (
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
};

export default Footer;
