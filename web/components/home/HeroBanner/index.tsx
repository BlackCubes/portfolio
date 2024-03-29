import { FC } from 'react';

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
        imageSrc="/profile-pic.jpg"
        opacity={1}
      />
    </ProfileImageWrapper>

    <BiographyContainer>
      <MainBiographyWrapper>
        <HeadingPrimary>
          Hello! I&apos;m Elias Gutierrez, and I&apos;m a Full-Stack Software
          Engineer
        </HeadingPrimary>
      </MainBiographyWrapper>

      <SecondaryBiographyWrapper>
        <Paragraph>
          I enjoy creating beautiful user-centered interactivities and solving
          abstract software puzzles to create efficiency and scalability for
          teams and companies
        </Paragraph>
      </SecondaryBiographyWrapper>
    </BiographyContainer>
  </Container>
);

export default HeroBanner;
