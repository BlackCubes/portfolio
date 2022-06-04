import { FC, useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';

import { useThemeContext } from 'common/contexts';

import { itemData, ItemLink } from '../ItemLink';

const githubLogoBlack = '/github-logo_black.png';
const linkedinLogoBlack = '/linkedin-logo_black.png';
const twitterLogoBlack = '/twitter-logo_black.png';

const githubLogoWhite = '/github-logo_white.png';
const linkedinLogoWhite = '/linkedin-logo_white.png';
const twitterLogoWhite = '/twitter-logo_white.png';

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

interface IFooter {
  isFirstMount: boolean;
}

const Footer: FC<IFooter> = ({ isFirstMount }) => {
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

  const footerAnimateControls = useAnimation();

  useEffect(() => {
    if (!isFirstMount) footerAnimateControls.start('visible');
  }, [isFirstMount, footerAnimateControls]);

  return (
    <Foot
      animate={footerAnimateControls}
      className="default-container navbar-footer-space"
    >
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
                src={githubLogo}
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
                src={twitterLogo}
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
