import React, { FC } from 'react';

import profileImage from 'assets/img/profile-pic.jpg';

import HeadingPrimary from 'common/typography/HeadingPrimary';
import Paragraph from 'common/typography/Paragraph';

import {
  BiographyContainer,
  Container,
  MainBiographyWrapper,
  ProfileImage,
  ProfileImageWrapper,
  SecondaryBiographyWrapper,
} from './styles';

const HeroBanner: FC = () => (
  <Container className="default-container default-margin-bottom navbar-footer-space">
    <ProfileImageWrapper>
      <ProfileImage src={profileImage} alt="Profile image of Elias Gutierrez" />
    </ProfileImageWrapper>

    <BiographyContainer>
      <MainBiographyWrapper>
        <HeadingPrimary opacity={0.8}>
          Hello! I&apos;m Elias Gutierrez, and I&apos;m a Software Engineer and
          Full-Stack Developer
        </HeadingPrimary>
      </MainBiographyWrapper>

      <SecondaryBiographyWrapper>
        <Paragraph opacity={0.8}>
          I enjoy architecturing with the art and mathematical model of nature
          to create beautiful user experiences for the web, native mobile apps,
          and data science
        </Paragraph>
      </SecondaryBiographyWrapper>
    </BiographyContainer>
  </Container>
);

export default HeroBanner;
