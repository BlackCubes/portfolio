import React, { FC } from 'react';

import profileImage from 'assets/img/profile-pic.jpg';

import GlassCircle from 'common/components/GlassCircle';

import HeadingPrimary from 'common/typography/HeadingPrimary';
import Paragraph from 'common/typography/Paragraph';

import {
  BiographyContainer,
  Container,
  MainBiographyWrapper,
  ProfileImageWrapper,
  SecondaryBiographyWrapper,
} from './styles';

const HeroBanner: FC = () => (
  <Container className="default-margin-bottom">
    <ProfileImageWrapper>
      <GlassCircle
        glassDarkShadowBlur={0.4}
        glassDarkShadowHorizontalOffset={0.3}
        glassDarkShadowVerticalOffset={0.3}
        glassLightShadowBlur={0.4}
        glassLightShadowHorizontalOffset={-0.3}
        glassLightShadowVerticalOffset={-0.3}
        imageAlt="Profile image of Elias Gutierrez"
        imageSrc={profileImage}
        opacity={1}
      />
    </ProfileImageWrapper>

    <BiographyContainer>
      <MainBiographyWrapper>
        <HeadingPrimary>
          Hello! I&apos;m Elias Gutierrez, and I&apos;m a Software Engineer and
          Full-Stack Developer
        </HeadingPrimary>
      </MainBiographyWrapper>

      <SecondaryBiographyWrapper>
        <Paragraph>
          I enjoy on architecting with the art and mathematical model of nature
          to create beautiful user experiences for the web, native mobile apps,
          and data science
        </Paragraph>
      </SecondaryBiographyWrapper>
    </BiographyContainer>
  </Container>
);

export default HeroBanner;
