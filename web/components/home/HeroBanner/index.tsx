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
        imageSrc="/profile-pic3.jpg"
        opacity={1}
      />
    </ProfileImageWrapper>

    <BiographyContainer>
      <MainBiographyWrapper>
        <HeadingPrimary>
          Hello! I&apos;m Elias Gutierrez, and I&apos;m a Full-Stack Software
          Engineer 🤓. I love drinking coffee ☕️ while learning and improving
          on new and existing technologies 💾
        </HeadingPrimary>
      </MainBiographyWrapper>

      <SecondaryBiographyWrapper>
        <Paragraph>
          A passionate and curious individual with a BS degree in Physics from
          UCLA currently working as a Full-Stack Software Engineer at
          Aerobotics7 to remove landmines from around the world. I have
          experiences with Python, Django, Node.js, React.js, Figma/Lucid Charts
          and other platforms and tools to facilitate on creating and solving
          real-world problems for the users to enjoy, and the companies to
          succeed their vision
        </Paragraph>
      </SecondaryBiographyWrapper>
    </BiographyContainer>
  </Container>
);

export default HeroBanner;
